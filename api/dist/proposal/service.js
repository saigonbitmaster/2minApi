"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProposalService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schema_1 = require("./schemas/schema");
const kpi_1 = require("../flatworks/scripts/kpi");
const getlist_1 = require("../flatworks/utils/getlist");
const service_1 = require("../fund/service");
const service_2 = require("../challenge/service");
const service_3 = require("../proposer/service");
let ProposalService = class ProposalService {
    constructor(model, fundService, challengeService, proposerService) {
        this.model = model;
        this.fundService = fundService;
        this.challengeService = challengeService;
        this.proposerService = proposerService;
    }
    async findAll(query) {
        const { keyword } = query.filter;
        if (keyword) {
            query = await this._pageFullTextSearchTransform(query);
        }
        const isPagination = query.limit > 0;
        const count = await this.model.find(query.filter).count().exec();
        const data = isPagination
            ? await this.model
                .find(query.filter)
                .sort(query.sort)
                .skip(query.skip)
                .limit(query.limit)
                .exec()
            : await this.model.find(query.filter).sort(query.sort).exec();
        return { count: count, data: data };
    }
    async findAllSearch(query) {
        const count = await this.model.find(query.filter).count().exec();
        if (query.limit <= 0) {
            return {
                data: [],
                count: count,
            };
        }
        const data = await this.model
            .find(query.filter)
            .sort(query.sort)
            .skip(query.skip)
            .limit(query.limit)
            .exec();
        const result = { count: count, data: data };
        return result;
    }
    async findAllKpi(query) {
        var _a;
        const { keyword } = query.filter;
        if (keyword) {
            query = await this._pageFullTextSearchTransform(query);
        }
        const aggregateQuery = (0, kpi_1.kpiQuery)(query);
        const aggregateQueryCount = (0, kpi_1.kpiQueryCount)(query);
        const count = await this.model.aggregate(aggregateQueryCount).exec();
        const _data = await this.model.aggregate(aggregateQuery).exec();
        const data = _data.map((item) => {
            item.commits = item.commit ? item.commit.length : 0;
            item.lastMonthCommits = item.lastMonthCommit
                ? item.lastMonthCommit.length
                : 0;
            delete item.commit;
            delete item.lastMonthCommit;
            return item;
        });
        return { count: (_a = count[0]) === null || _a === void 0 ? void 0 : _a.count, data: data };
    }
    async findOne(id) {
        return await this.model.findById(id).exec();
    }
    async import(proposals) {
        return proposals.forEach(async (proposal) => {
            await this.model.findOneAndUpdate({ projectId: proposal.projectId }, proposal, {
                new: true,
                upsert: true,
            });
        });
    }
    async create(createProposalDto) {
        return await new this.model(Object.assign(Object.assign({}, createProposalDto), { createdAt: new Date() })).save();
    }
    async update(id, updateProposalDto) {
        return await this.model.findByIdAndUpdate(id, updateProposalDto).exec();
    }
    async delete(id) {
        return await this.model.findByIdAndDelete(id).exec();
    }
    async getAllGithubRepos() {
        return await this.model.find({ gitLinks: { $exists: true, $ne: [] } }, { gitLinks: 1 });
    }
    async _pageFullTextSearchTransform(query) {
        const { keyword } = query.filter;
        if (keyword) {
            const [proposalIds, fundIds, challengeIds, proposerIds] = await Promise.all([
                this.pageFullTextSearchGetIdsOnly(keyword, false),
                this.fundService.pageFullTextSearchGetIdsOnly(keyword),
                this.challengeService.pageFullTextSearchGetIdsOnly(keyword),
                this.proposerService.pageFullTextSearchGetIdsOnly(keyword),
            ]);
            const conditionOr = [];
            if (fundIds && fundIds.length > 0) {
                conditionOr.push({
                    fundId: {
                        $in: fundIds,
                    },
                });
            }
            if (challengeIds && challengeIds.length > 0) {
                conditionOr.push({
                    challengeId: {
                        $in: challengeIds,
                    },
                });
            }
            if (proposerIds && proposerIds.length > 0) {
                conditionOr.push({
                    proposerId: {
                        $in: proposerIds,
                    },
                });
            }
            if (conditionOr.length === 0) {
                query.filter = (0, getlist_1.fullTextSearchTransform)(query.filter, keyword);
                return query;
            }
            if (proposalIds && proposalIds.length > 0) {
                conditionOr.push({
                    _id: {
                        $in: proposalIds,
                    },
                });
            }
            query.filter = {
                $or: conditionOr,
            };
        }
        return query;
    }
    async pageFullTextSearch(keyword) {
        let filters = {};
        filters = (0, getlist_1.fullTextSearchTransform)(filters, keyword);
        return await this.model.find(filters);
    }
    async pageFullTextSearchGetIdsOnly(keyword, convertIdToString = true) {
        const challenges = await this.pageFullTextSearch(keyword);
        if (!challenges || challenges.length === 0)
            return [];
        return challenges.map((fund) => convertIdToString ? fund._id.toString() : fund._id);
    }
};
ProposalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.Proposal.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        service_1.FundService,
        service_2.ChallengeService,
        service_3.ProposerService])
], ProposalService);
exports.ProposalService = ProposalService;
//# sourceMappingURL=service.js.map