import { Model } from 'mongoose';
import { CreateProposalDto } from './dto/create.dto';
import { UpdateProposalDto } from './dto/update.dto';
import { Proposal, ProposalDocument } from './schemas/schema';
import { RaList, MongooseQuery } from '../flatworks/types/types';
import { FundService } from '../fund/service';
import { ChallengeService } from '../challenge/service';
import { ProposerService } from '../proposer/service';
export declare class ProposalService {
    private readonly model;
    private readonly fundService;
    private readonly challengeService;
    private readonly proposerService;
    constructor(model: Model<ProposalDocument>, fundService: FundService, challengeService: ChallengeService, proposerService: ProposerService);
    findAll(query: MongooseQuery): Promise<RaList>;
    findAllSearch(query: MongooseQuery): Promise<RaList>;
    findAllKpi(query: MongooseQuery): Promise<RaList>;
    findOne(id: string): Promise<Proposal>;
    import(proposals: CreateProposalDto[]): Promise<any>;
    create(createProposalDto: CreateProposalDto): Promise<Proposal>;
    update(id: string, updateProposalDto: UpdateProposalDto): Promise<Proposal>;
    delete(id: string): Promise<Proposal>;
    getAllGithubRepos(): Promise<(Proposal & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    _pageFullTextSearchTransform(query: MongooseQuery): Promise<MongooseQuery>;
    pageFullTextSearch(keyword: string): Promise<any[]>;
    pageFullTextSearchGetIdsOnly(keyword: string, convertIdToString?: boolean): Promise<string[]>;
}
