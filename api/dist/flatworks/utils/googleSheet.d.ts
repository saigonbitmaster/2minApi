declare const getSheetData: (sheetUrl: any, sheetName: any, range: any) => Promise<any[][]>;
declare const fundTransform: (data: any[]) => any[];
declare const proposerTransform: (data: any[]) => any[];
declare const challengeTransform: (data: any[], fundService: any) => Promise<any[]>;
declare const proposalTransform: (data: any[], fundService: any, challengeService: any, proposerService: any) => Promise<any[]>;
export { getSheetData, fundTransform, challengeTransform, proposerTransform, proposalTransform, };
