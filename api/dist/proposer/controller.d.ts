import { CreateProposerDto } from './dto/create.dto';
import { UpdateProposerDto } from './dto/update.dto';
import { ProposerService } from './service';
import { ImportBody } from '../flatworks/types/types';
export declare class ProposerController {
    private readonly service;
    constructor(service: ProposerService);
    index(res: any, query: any): Promise<any>;
    find(id: string): Promise<import("./schemas/schema").Proposer>;
    create(createProposerDto: CreateProposerDto): Promise<import("./schemas/schema").Proposer>;
    import(importBody: ImportBody): Promise<any>;
    update(id: string, updateProposerDto: UpdateProposerDto): Promise<import("./schemas/schema").Proposer>;
    delete(id: string): Promise<import("./schemas/schema").Proposer>;
}
