import { ProposalService } from './service';
export declare class ProposalKpiController {
    private readonly service;
    constructor(service: ProposalService);
    index(res: any, query: any): Promise<any>;
    find(id: string): Promise<import("./schemas/schema").Proposal>;
}
