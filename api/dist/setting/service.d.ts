import { Model } from 'mongoose';
import { CreateSettingDto } from './dto/create.dto';
import { UpdateSettingDto } from './dto/update.dto';
import { Setting, SettingDocument } from './schemas/schema';
import { RaList, MongooseQuery } from '../flatworks/types/types';
export declare class SettingService {
    private readonly model;
    constructor(model: Model<SettingDocument>);
    findAll(query: MongooseQuery): Promise<RaList>;
    findAllSearch(query: MongooseQuery): Promise<RaList>;
    findById(id: string): Promise<Setting>;
    findByName(name: string): Promise<Setting>;
    create(createSettingDto: CreateSettingDto): Promise<Setting>;
    import(funds: CreateSettingDto[]): Promise<any>;
    update(id: string, updateSettingDto: UpdateSettingDto): Promise<Setting>;
    delete(id: string): Promise<Setting>;
    pageFullTextSearch(keyword: string): Promise<any[]>;
    pageFullTextSearchGetIdsOnly(keyword: string, convertIdToString?: boolean): Promise<string[]>;
}
