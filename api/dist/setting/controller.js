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
exports.SettingController = void 0;
const common_1 = require("@nestjs/common");
const create_dto_1 = require("./dto/create.dto");
const update_dto_1 = require("./dto/update.dto");
const service_1 = require("./service");
const getlist_1 = require("../flatworks/utils/getlist");
const public_api_decorator_1 = require("../flatworks/roles/public.api.decorator");
const roles_decorator_1 = require("../flatworks/roles/roles.decorator");
const types_1 = require("../flatworks/types/types");
let SettingController = class SettingController {
    constructor(service) {
        this.service = service;
    }
    async index(res, query) {
        const mongooseQuery = (0, getlist_1.queryTransform)(query);
        const result = await this.service.findAll(mongooseQuery);
        return (0, getlist_1.formatRaList)(res, result);
    }
    async findById(id) {
        return await this.service.findById(id);
    }
    async create(createSettingDto) {
        return await this.service.create(createSettingDto);
    }
    async update(id, updateSettingDto) {
        return await this.service.update(id, updateSettingDto);
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
], SettingController.prototype, "index", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, public_api_decorator_1.Public)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SettingController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(types_1.Role.Admin),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateSettingDto]),
    __metadata("design:returntype", Promise)
], SettingController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Roles)(types_1.Role.Admin),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dto_1.UpdateSettingDto]),
    __metadata("design:returntype", Promise)
], SettingController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(types_1.Role.Admin),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SettingController.prototype, "delete", null);
SettingController = __decorate([
    (0, common_1.Controller)('settings'),
    __metadata("design:paramtypes", [service_1.SettingService])
], SettingController);
exports.SettingController = SettingController;
//# sourceMappingURL=controller.js.map