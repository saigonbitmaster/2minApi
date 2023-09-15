import { MongooseQuery } from '../types/types';
declare const kpiQuery: (query: MongooseQuery) => ({
    $match: {
        [key: string]: any;
    };
    $addFields?: undefined;
    $lookup?: undefined;
    $project?: undefined;
    $skip?: undefined;
    $limit?: undefined;
    $sort?: undefined;
} | {
    $addFields: {
        id: {
            $toString: string;
        };
        _commit?: undefined;
        commit?: undefined;
        lastMonthCommit?: undefined;
    };
    $match?: undefined;
    $lookup?: undefined;
    $project?: undefined;
    $skip?: undefined;
    $limit?: undefined;
    $sort?: undefined;
} | {
    $lookup: {
        from: string;
        localField: string;
        foreignField: string;
        as: string;
    };
    $match?: undefined;
    $addFields?: undefined;
    $project?: undefined;
    $skip?: undefined;
    $limit?: undefined;
    $sort?: undefined;
} | {
    $addFields: {
        _commit: {
            $first: string;
        };
        id?: undefined;
        commit?: undefined;
        lastMonthCommit?: undefined;
    };
    $match?: undefined;
    $lookup?: undefined;
    $project?: undefined;
    $skip?: undefined;
    $limit?: undefined;
    $sort?: undefined;
} | {
    $addFields: {
        commit: string;
        id?: undefined;
        _commit?: undefined;
        lastMonthCommit?: undefined;
    };
    $match?: undefined;
    $lookup?: undefined;
    $project?: undefined;
    $skip?: undefined;
    $limit?: undefined;
    $sort?: undefined;
} | {
    $addFields: {
        lastMonthCommit: {
            $filter: {
                input: string;
                as: string;
                cond: {
                    $gte: (Date | {
                        $dateAdd: {
                            startDate: {
                                $toDate: string;
                            };
                            unit: string;
                            amount: number;
                        };
                    })[];
                };
            };
        };
        id?: undefined;
        _commit?: undefined;
        commit?: undefined;
    };
    $match?: undefined;
    $lookup?: undefined;
    $project?: undefined;
    $skip?: undefined;
    $limit?: undefined;
    $sort?: undefined;
} | {
    $project: {
        _commit: number;
        id: number;
        commits: number;
    };
    $match?: undefined;
    $addFields?: undefined;
    $lookup?: undefined;
    $skip?: undefined;
    $limit?: undefined;
    $sort?: undefined;
} | {
    $skip: number;
    $match?: undefined;
    $addFields?: undefined;
    $lookup?: undefined;
    $project?: undefined;
    $limit?: undefined;
    $sort?: undefined;
} | {
    $limit: number;
    $match?: undefined;
    $addFields?: undefined;
    $lookup?: undefined;
    $project?: undefined;
    $skip?: undefined;
    $sort?: undefined;
} | {
    $sort: {
        [key: string]: any;
    };
    $match?: undefined;
    $addFields?: undefined;
    $lookup?: undefined;
    $project?: undefined;
    $skip?: undefined;
    $limit?: undefined;
})[];
declare const kpiQueryCount: (query: MongooseQuery) => ({
    $match: {
        [key: string]: any;
    };
    $addFields?: undefined;
    $lookup?: undefined;
    $project?: undefined;
    $count?: undefined;
} | {
    $addFields: {
        id: {
            $toString: string;
        };
        _commit?: undefined;
        commit?: undefined;
        lastMonthCommit?: undefined;
    };
    $match?: undefined;
    $lookup?: undefined;
    $project?: undefined;
    $count?: undefined;
} | {
    $lookup: {
        from: string;
        localField: string;
        foreignField: string;
        as: string;
    };
    $match?: undefined;
    $addFields?: undefined;
    $project?: undefined;
    $count?: undefined;
} | {
    $addFields: {
        _commit: {
            $first: string;
        };
        id?: undefined;
        commit?: undefined;
        lastMonthCommit?: undefined;
    };
    $match?: undefined;
    $lookup?: undefined;
    $project?: undefined;
    $count?: undefined;
} | {
    $addFields: {
        commit: string;
        id?: undefined;
        _commit?: undefined;
        lastMonthCommit?: undefined;
    };
    $match?: undefined;
    $lookup?: undefined;
    $project?: undefined;
    $count?: undefined;
} | {
    $addFields: {
        lastMonthCommit: {
            $filter: {
                input: string;
                as: string;
                cond: {
                    $gte: (Date | {
                        $dateAdd: {
                            startDate: {
                                $toDate: string;
                            };
                            unit: string;
                            amount: number;
                        };
                    })[];
                };
            };
        };
        id?: undefined;
        _commit?: undefined;
        commit?: undefined;
    };
    $match?: undefined;
    $lookup?: undefined;
    $project?: undefined;
    $count?: undefined;
} | {
    $project: {
        _commit: number;
        id: number;
        commits: number;
    };
    $match?: undefined;
    $addFields?: undefined;
    $lookup?: undefined;
    $count?: undefined;
} | {
    $count: string;
    $match?: undefined;
    $addFields?: undefined;
    $lookup?: undefined;
    $project?: undefined;
})[];
export { kpiQuery, kpiQueryCount };
