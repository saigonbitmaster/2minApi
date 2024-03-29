"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kpiQueryCount = exports.kpiQuery = void 0;
const kpiQuery = (query) => {
    return [
        { $match: query.filter },
        { $addFields: { id: { $toString: '$_id' } } },
        {
            $lookup: {
                from: 'gitcommits',
                localField: 'id',
                foreignField: 'proposalId',
                as: 'commits',
            },
        },
        { $addFields: { _commit: { $first: '$commits' } } },
        { $addFields: { commit: '$_commit.commits' } },
        {
            $addFields: {
                lastMonthCommit: {
                    $filter: {
                        input: '$commit',
                        as: 'commitDate',
                        cond: {
                            $gte: [
                                {
                                    $dateAdd: {
                                        startDate: { $toDate: '$$commitDate.date' },
                                        unit: 'month',
                                        amount: 1,
                                    },
                                },
                                new Date(),
                            ],
                        },
                    },
                },
            },
        },
        {
            $project: {
                _commit: 0,
                id: 0,
                commits: 0,
            },
        },
        { $skip: query.skip },
        { $limit: query.limit },
        { $sort: query.sort },
    ];
};
exports.kpiQuery = kpiQuery;
const kpiQueryCount = (query) => {
    return [
        { $match: query.filter },
        { $addFields: { id: { $toString: '$_id' } } },
        {
            $lookup: {
                from: 'gitcommits',
                localField: 'id',
                foreignField: 'proposalId',
                as: 'commits',
            },
        },
        { $addFields: { _commit: { $first: '$commits' } } },
        { $addFields: { commit: '$_commit.commits' } },
        {
            $addFields: {
                lastMonthCommit: {
                    $filter: {
                        input: '$commit',
                        as: 'commitDate',
                        cond: {
                            $gte: [
                                {
                                    $dateAdd: {
                                        startDate: { $toDate: '$$commitDate.date' },
                                        unit: 'month',
                                        amount: 1,
                                    },
                                },
                                new Date(),
                            ],
                        },
                    },
                },
            },
        },
        {
            $project: {
                _commit: 0,
                id: 0,
                commits: 0,
            },
        },
        {
            $count: 'count',
        },
    ];
};
exports.kpiQueryCount = kpiQueryCount;
//# sourceMappingURL=kpi.js.map