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
exports.ProposalKpiController = void 0;
const common_1 = require("@nestjs/common");
const service_1 = require("./service");
const getlist_1 = require("../flatworks/utils/getlist");
const public_api_decorator_1 = require("../flatworks/roles/public.api.decorator");
let ProposalKpiController = class ProposalKpiController {
    constructor(service) {
        this.service = service;
    }
    async index(res, query) {
        const mongooseQuery = (0, getlist_1.queryTransform)(query);
        const result = await this.service.findAllKpi(mongooseQuery);
        return (0, getlist_1.formatRaList)(res, result);
    }
    async find(id) {
        return await this.service.findOne(id);
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
], ProposalKpiController.prototype, "index", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, public_api_decorator_1.Public)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProposalKpiController.prototype, "find", null);
ProposalKpiController = __decorate([
    (0, common_1.Controller)('kpis'),
    __metadata("design:paramtypes", [service_1.ProposalService])
], ProposalKpiController);
exports.ProposalKpiController = ProposalKpiController;
//# sourceMappingURL=controller.kpi.js.map