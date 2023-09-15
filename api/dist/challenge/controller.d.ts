import { CreateChallengeDto } from './dto/create.dto';
import { UpdateChallengeDto } from './dto/update.dto';
import { ChallengeService } from './service';
import { ImportBody } from '../flatworks/types/types';
import { FundService } from '../fund/service';
export declare class ChallengeController {
    private readonly service;
    private readonly fundService;
    constructor(service: ChallengeService, fundService: FundService);
    index(res: any, query: any): Promise<any>;
    find(id: string): Promise<import("./schemas/schema").Challenge>;
    create(createChallengeDto: CreateChallengeDto): Promise<import("./schemas/schema").Challenge>;
    import(importBody: ImportBody): Promise<any>;
    update(id: string, updateChallengeDto: UpdateChallengeDto): Promise<import("./schemas/schema").Challenge>;
    delete(id: string): Promise<import("./schemas/schema").Challenge>;
}
