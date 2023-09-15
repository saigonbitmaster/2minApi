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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProposerSchema = exports.Proposer = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const uniqueValidator = require("mongoose-unique-validator");
let Proposer = class Proposer {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Proposer.prototype, "fullName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Proposer.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Proposer.prototype, "walletAddress", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Proposer.prototype, "telegram", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Proposer.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Proposer.prototype, "completedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Proposer.prototype, "deletedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Proposer.prototype, "createdDate", void 0);
Proposer = __decorate([
    (0, mongoose_1.Schema)()
], Proposer);
exports.Proposer = Proposer;
const ProposerSchema = mongoose_1.SchemaFactory.createForClass(Proposer);
exports.ProposerSchema = ProposerSchema;
ProposerSchema.plugin(uniqueValidator);
ProposerSchema.index({
    fullName: 'text',
    email: 'text',
    telegram: 'text',
    walletAddress: 'text',
});
//# sourceMappingURL=schema.js.map