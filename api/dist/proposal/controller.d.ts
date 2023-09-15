import { CreateProposalDto } from './dto/create.dto';
import { UpdateProposalDto } from './dto/update.dto';
import { ProposalService } from './service';
import { ImportBody } from '../flatworks/types/types';
import { FundService } from '../fund/service';
import { ChallengeService } from '../challenge/service';
import { ProposerService } from '../proposer/service';
export declare class ProposalController {
    private readonly service;
    private readonly fundService;
    private readonly challengeService;
    private readonly proposerService;
    constructor(service: ProposalService, fundService: FundService, challengeService: ChallengeService, proposerService: ProposerService);
    index(res: any, query: any): Promise<any>;
    find(id: string): Promise<import("./schemas/schema").Proposal>;
    import(importBody: ImportBody): Promise<any>;
    create(createProposalDto: CreateProposalDto): Promise<import("./schemas/schema").Proposal>;
    update(id: string, updateProposalDto: UpdateProposalDto): Promise<import("./schemas/schema").Proposal>;
    delete(id: string): Promise<import("./schemas/schema").Proposal>;
}
