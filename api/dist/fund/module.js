"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundModule = void 0;
const common_1 = require("@nestjs/common");
const service_1 = require("./service");
const controller_1 = require("./controller");
const mongoose_1 = require("@nestjs/mongoose");
const schema_1 = require("./schemas/schema");
let FundModule = class FundModule {
};
FundModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [service_1.FundService],
        controllers: [controller_1.FundController],
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: schema_1.Fund.name, schema: schema_1.FundSchema }]),
        ],
        exports: [service_1.FundService],
    })
], FundModule);
exports.FundModule = FundModule;
//# sourceMappingURL=module.js.map