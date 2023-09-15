import { CreateSettingDto } from './dto/create.dto';
import { UpdateSettingDto } from './dto/update.dto';
import { SettingService } from './service';
export declare class SettingController {
    private readonly service;
    constructor(service: SettingService);
    index(res: any, query: any): Promise<any>;
    findById(id: string): Promise<import("./schemas/schema").Setting>;
    create(createSettingDto: CreateSettingDto): Promise<import("./schemas/schema").Setting>;
    update(id: string, updateSettingDto: UpdateSettingDto): Promise<import("./schemas/schema").Setting>;
    delete(id: string): Promise<import("./schemas/schema").Setting>;
}
