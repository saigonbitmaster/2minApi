/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose-unique-validator/node_modules/mongoose/types/aggregate" />
/// <reference types="mongoose-unique-validator/node_modules/mongoose/types/callback" />
/// <reference types="mongoose-unique-validator/node_modules/mongoose/types/collection" />
/// <reference types="mongoose-unique-validator/node_modules/mongoose/types/connection" />
/// <reference types="mongoose-unique-validator/node_modules/mongoose/types/cursor" />
/// <reference types="mongoose-unique-validator/node_modules/mongoose/types/document" />
/// <reference types="mongoose-unique-validator/node_modules/mongoose/types/error" />
/// <reference types="mongoose-unique-validator/node_modules/mongoose/types/expressions" />
/// <reference types="mongoose-unique-validator/node_modules/mongoose/types/helpers" />
/// <reference types="mongoose-unique-validator/node_modules/mongoose/types/middlewares" />
/// <reference types="mongoose-unique-validator/node_modules/mongoose/types/indexes" />
/// <reference types="mongoose-unique-validator/node_modules/mongoose/types/models" />
/// <reference types="mongoose-unique-validator/node_modules/mongoose/types/mongooseoptions" />
/// <reference types="mongoose-unique-validator/node_modules/mongoose/types/pipelinestage" />
/// <reference types="mongoose-unique-validator/node_modules/mongoose/types/populate" />
/// <reference types="mongoose-unique-validator/node_modules/mongoose/types/query" />
/// <reference types="mongoose-unique-validator/node_modules/mongoose/types/schemaoptions" />
/// <reference types="mongoose-unique-validator/node_modules/mongoose/types/schematypes" />
/// <reference types="mongoose-unique-validator/node_modules/mongoose/types/session" />
/// <reference types="mongoose-unique-validator/node_modules/mongoose/types/types" />
/// <reference types="mongoose-unique-validator/node_modules/mongoose/types/utility" />
/// <reference types="mongoose-unique-validator/node_modules/mongoose/types/validation" />
/// <reference types="mongoose-unique-validator/node_modules/mongoose/types/virtuals" />
/// <reference types="mongoose-unique-validator/node_modules/mongoose" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose-unique-validator/node_modules/mongoose/types/inferschematype" />
import { Document } from 'mongoose';
export declare type ProposalDocument = Proposal & Document;
export declare class Proposal {
    name: string;
    projectId: string;
    proposalUrl: string;
    requestedBudget: number;
    previousProposals: string[];
    walletAddress: string;
    gitLinks: string[];
    smartContract: string;
    projectStatus: string;
    startDate: Date;
    completeDate: Date;
    gitCommits: string[];
    fundTransactions: string[];
    fundId: string;
    challengeId: string;
    proposerId: string;
    description: string;
    completedAt?: Date;
    deletedAt?: Date;
    createdDate?: Date;
}
declare const ProposalSchema: import("mongoose").Schema<Proposal, import("mongoose").Model<Proposal, any, any, any, any>, {}, {}, {}, {}, "type", Proposal>;
export { ProposalSchema };
