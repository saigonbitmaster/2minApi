import { MongooseQuery, RaList } from '../types/types';
declare const queryTransform: (query: any) => MongooseQuery;
declare const formatRaList: (res: any, result: RaList) => any;
declare const fullTextSearchTransform: (filters: object, searchKeyword: string) => {
    $text: {
        $search: string;
    };
};
export { queryTransform, formatRaList, fullTextSearchTransform };
