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
exports.ProposalController = void 0;
const common_1 = require("@nestjs/common");
const create_dto_1 = require("./dto/create.dto");
const update_dto_1 = require("./dto/update.dto");
const service_1 = require("./service");
const getlist_1 = require("../flatworks/utils/getlist");
const googleSheet_1 = require("../flatworks/utils/googleSheet");
const service_2 = require("../fund/service");
const service_3 = require("../challenge/service");
const service_4 = require("../proposer/service");
const public_api_decorator_1 = require("../flatworks/roles/public.api.decorator");
const roles_decorator_1 = require("../flatworks/roles/roles.decorator");
const types_1 = require("../flatworks/types/types");
let ProposalController = class ProposalController {
    constructor(service, fundService, challengeService, proposerService) {
        this.service = service;
        this.fundService = fundService;
        this.challengeService = challengeService;
        this.proposerService = proposerService;
    }
    async index(res, query) {
        const mongooseQuery = (0, getlist_1.queryTransform)(query);
        const result = await this.service.findAll(mongooseQuery);
        return (0, getlist_1.formatRaList)(res, result);
    }
    async find(id) {
        return await this.service.findOne(id);
    }
    async import(importBody) {
        const _data = await (0, googleSheet_1.getSheetData)(importBody.sheet, importBody.id, 'A2:O');
        const data = await (0, googleSheet_1.proposalTransform)(_data, this.fundService, this.challengeService, this.proposerService);
        return this.service.import(data);
    }
    async create(createProposalDto) {
        return await this.service.create(createProposalDto);
    }
    async update(id, updateProposalDto) {
        return await this.service.update(id, updateProposalDto);
    }
    async delete(id) {
        return await this.service.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, public_api_decorator_1.Public)(),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProposalController.prototype, "index", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, public_api_decorator_1.Public)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProposalController.prototype, "find", null);
__decorate([
    (0, common_1.Post)('import'),
    (0, roles_decorator_1.Roles)(types_1.Role.Admin),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProposalController.prototype, "import", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(types_1.Role.Admin),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateProposalDto]),
    __metadata("design:returntype", Promise)
], ProposalController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Roles)(types_1.Role.Admin),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dto_1.UpdateProposalDto]),
    __metadata("design:returntype", Promise)
], ProposalController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(types_1.Role.Admin),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProposalController.prototype, "delete", null);
ProposalController = __decorate([
    (0, common_1.Controller)('proposals'),
    __metadata("design:paramtypes", [service_1.ProposalService,
        service_2.FundService,
        service_3.ChallengeService,
        service_4.ProposerService])
], ProposalController);
exports.ProposalController = ProposalController;
//# sourceMappingURL=controller.js.map