import { Model } from 'mongoose';
import { CreateProposerDto } from './dto/create.dto';
import { UpdateProposerDto } from './dto/update.dto';
import { Proposer, ProposerDocument } from './schemas/schema';
import { RaList, MongooseQuery } from '../flatworks/types/types';
export declare class ProposerService {
    private readonly model;
    constructor(model: Model<ProposerDocument>);
    findAll(query: MongooseQuery): Promise<RaList>;
    findAllSearch(query: MongooseQuery): Promise<RaList>;
    findOne(id: string): Promise<Proposer>;
    findByName(name: string): Promise<Proposer>;
    create(createProposerDto: CreateProposerDto): Promise<Proposer>;
    import(proposers: CreateProposerDto[]): Promise<any>;
    update(id: string, updateProposerDto: UpdateProposerDto): Promise<Proposer>;
    delete(id: string): Promise<Proposer>;
    pageFullTextSearch(keyword: string): Promise<any[]>;
    pageFullTextSearchGetIdsOnly(keyword: string, convertIdToString?: boolean): Promise<string[]>;
}
