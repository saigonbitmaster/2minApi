import { HttpService } from '@nestjs/axios';
import { AddressUtxoType } from '../flatworks/types/types';
export declare class ToolService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getAddressUtxo(address: string): Promise<AddressUtxoType[]>;
    getTxsUtxo(tx_hash: string): Promise<any[]>;
    getRepoCommits(gitLink: string): Promise<any>;
    repoCodeScan(gitLink: string): Promise<any>;
}
