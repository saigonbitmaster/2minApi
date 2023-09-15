declare const webSearchConfig: () => {
    baseUrl: string;
    priority: {
        priority: number;
        collection: string;
        serviceName: string;
        totalRecords: number;
        limit: number;
        skip: number;
    }[];
};
declare const cmsSearchConfig: () => {
    baseUrl: string;
    priority: {
        priority: number;
        collection: string;
        serviceName: string;
        totalRecords: number;
        limit: number;
        skip: number;
    }[];
};
export { webSearchConfig, cmsSearchConfig };
