import { CreateFundDto } from './dto/create.dto';
import { UpdateFundDto } from './dto/update.dto';
import { FundService } from './service';
import { ImportBody } from '../flatworks/types/types';
export declare class FundController {
    private readonly service;
    constructor(service: FundService);
    index(res: any, query: any): Promise<any>;
    findById(id: string): Promise<import("./schemas/schema").Fund>;
    import(importBody: ImportBody): Promise<any>;
    create(createFundDto: CreateFundDto): Promise<import("./schemas/schema").Fund>;
    update(id: string, updateFundDto: UpdateFundDto): Promise<import("./schemas/schema").Fund>;
    delete(id: string): Promise<import("./schemas/schema").Fund>;
}
