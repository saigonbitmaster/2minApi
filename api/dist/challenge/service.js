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
exports.ChallengeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schema_1 = require("./schemas/schema");
const service_1 = require("../fund/service");
const getlist_1 = require("../flatworks/utils/getlist");
let ChallengeService = class ChallengeService {
    constructor(model, fundService) {
        this.model = model;
        this.fundService = fundService;
    }
    async findAll(query) {
        const { keyword } = query.filter;
        if (keyword) {
            query.filter = (0, getlist_1.fullTextSearchTransform)(query.filter, keyword);
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
        const result = { count: count, data: data };
        return result;
    }
    async findMany(ids) {
        return await this.model.find({ _id: { $in: ids } });
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
    async findOne(id) {
        return await this.model.findById(id).exec();
    }
    async findByName(fundId, name) {
        return await this.model.findOne({ fundId: fundId, name: name }).exec();
    }
    async import(challenges) {
        return challenges.forEach(async (challenge) => {
            await this.model.findOneAndUpdate({ name: challenge.name }, challenge, {
                new: true,
                upsert: true,
            });
        });
    }
    async create(createChallengeDto) {
        return await new this.model(Object.assign(Object.assign({}, createChallengeDto), { createdAt: new Date() })).save();
    }
    async update(id, updateChallengeDto) {
        return await this.model.findByIdAndUpdate(id, updateChallengeDto).exec();
    }
    async delete(id) {
        return await this.model.findByIdAndDelete(id).exec();
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
ChallengeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.Challenge.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        service_1.FundService])
], ChallengeService);
exports.ChallengeService = ChallengeService;
//# sourceMappingURL=service.js.map