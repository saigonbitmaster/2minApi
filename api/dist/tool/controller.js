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
exports.ToolController = void 0;
const common_1 = require("@nestjs/common");
const service_1 = require("./service");
const getlist_1 = require("../flatworks/utils/getlist");
const googleSheet_1 = require("../flatworks/utils/googleSheet");
const public_api_decorator_1 = require("../flatworks/roles/public.api.decorator");
const roles_decorator_1 = require("../flatworks/roles/roles.decorator");
const types_1 = require("../flatworks/types/types");
let ToolController = class ToolController {
    constructor(service) {
        this.service = service;
    }
    async create(importBody) {
        const result = await (0, googleSheet_1.getSheetData)('https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit#gid=0', 'funds', 'A2:E');
    }
    async getUtxos(res, query) {
        const _query = (0, getlist_1.queryTransform)(query);
        const filter = _query.filter;
        const rangeStart = _query.skip;
        const rangeEnd = _query.limit + _query.skip;
        let result;
        if (!filter.queryType || !filter.value) {
            result = { count: 0, data: [] };
            return (0, getlist_1.formatRaList)(res, result);
        }
        if (filter.queryType === 'utx') {
            const response = await this.service.getTxsUtxo(filter.value);
            result = { count: 1, data: [response] };
            return (0, getlist_1.formatRaList)(res, result);
        }
        const response = await this.service.getAddressUtxo(filter.value);
        const data = response.slice(rangeStart, rangeEnd);
        result = { count: response.length, data: data };
        return (0, getlist_1.formatRaList)(res, result);
    }
    async getCommits(res, query) {
        const _query = (0, getlist_1.queryTransform)(query);
        const filter = _query.filter;
        const rangeStart = _query.skip;
        const rangeEnd = _query.limit + _query.skip;
        let result;
        if (!filter.queryType || !filter.value) {
            result = { count: 0, data: [] };
            return (0, getlist_1.formatRaList)(res, result);
        }
        if (filter.queryType === 'commit') {
            const response = await this.service.getRepoCommits(filter.value);
            const data = response.slice(rangeStart, rangeEnd);
            result = { count: response.length, data: data };
            return (0, getlist_1.formatRaList)(res, result);
        }
        if (filter.queryType === 'codescan') {
            const response = await this.service.repoCodeScan(filter.value);
            const data = response.slice(rangeStart, rangeEnd);
            result = { count: response.length, data: data };
            return (0, getlist_1.formatRaList)(res, result);
        }
    }
};
__decorate([
    (0, common_1.Post)('import'),
    (0, roles_decorator_1.Roles)(types_1.Role.Admin),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ToolController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('utxos'),
    (0, public_api_decorator_1.Public)(),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ToolController.prototype, "getUtxos", null);
__decorate([
    (0, common_1.Get)('commits'),
    (0, public_api_decorator_1.Public)(),
    __param(0, (0, common_1.Response)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ToolController.prototype, "getCommits", null);
ToolController = __decorate([
    (0, common_1.Controller)('tools'),
    __metadata("design:paramtypes", [service_1.ToolService])
], ToolController);
exports.ToolController = ToolController;
//# sourceMappingURL=controller.js.map