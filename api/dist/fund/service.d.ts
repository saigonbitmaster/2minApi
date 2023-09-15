import { Model } from 'mongoose';
import { CreateFundDto } from './dto/create.dto';
import { UpdateFundDto } from './dto/update.dto';
import { Fund, FundDocument } from './schemas/schema';
import { RaList, MongooseQuery } from '../flatworks/types/types';
export declare class FundService {
    private readonly model;
    constructor(model: Model<FundDocument>);
    findAll(query: MongooseQuery): Promise<RaList>;
    findAllSearch(query: MongooseQuery): Promise<RaList>;
    findById(id: string): Promise<Fund>;
    findMany(ids: string[]): Promise<any>;
    findByName(name: string): Promise<Fund>;
    create(createFundDto: CreateFundDto): Promise<Fund>;
    import(funds: CreateFundDto[]): Promise<any>;
    update(id: string, updateFundDto: UpdateFundDto): Promise<Fund>;
    delete(id: string): Promise<Fund>;
    pageFullTextSearch(keyword: string): Promise<any[]>;
    pageFullTextSearchGetIdsOnly(keyword: string, convertIdToString?: boolean): Promise<string[]>;
}
