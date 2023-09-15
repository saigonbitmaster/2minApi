"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const module_1 = require("./proposal/module");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const module_2 = require("./proposer/module");
const module_3 = require("./fund/module");
const module_4 = require("./challenge/module");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRootAsync({
                useFactory: () => ({
                    uri: process.env.CONNECTION_STRING,
                }),
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            module_2.ProposerModule,
            module_3.FundModule,
            module_4.ChallengeModule,
            module_1.ProposalModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map