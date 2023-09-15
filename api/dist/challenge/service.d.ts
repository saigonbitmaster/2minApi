import { Model } from 'mongoose';
import { CreateChallengeDto } from './dto/create.dto';
import { UpdateChallengeDto } from './dto/update.dto';
import { Challenge, ChallengeDocument } from './schemas/schema';
import { RaList, MongooseQuery } from '../flatworks/types/types';
import { FundService } from '../fund/service';
export declare class ChallengeService {
    private readonly model;
    private readonly fundService;
    constructor(model: Model<ChallengeDocument>, fundService: FundService);
    findAll(query: MongooseQuery): Promise<RaList>;
    findMany(ids: string[]): Promise<any>;
    findAllSearch(query: MongooseQuery): Promise<RaList>;
    findOne(id: string): Promise<Challenge>;
    findByName(fundId: string, name: string): Promise<Challenge>;
    import(challenges: CreateChallengeDto[]): Promise<any>;
    create(createChallengeDto: CreateChallengeDto): Promise<Challenge>;
    update(id: string, updateChallengeDto: UpdateChallengeDto): Promise<Challenge>;
    delete(id: string): Promise<Challenge>;
    pageFullTextSearch(keyword: string): Promise<any[]>;
    pageFullTextSearchGetIdsOnly(keyword: string, convertIdToString?: boolean): Promise<string[]>;
}
