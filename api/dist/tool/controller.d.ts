import { ToolService } from './service';
import { ImportBody } from '../flatworks/types/types';
export declare class ToolController {
    private readonly service;
    constructor(service: ToolService);
    create(importBody: ImportBody): Promise<void>;
    getUtxos(res: any, query: any): Promise<any>;
    getCommits(res: any, query: any): Promise<any>;
}
