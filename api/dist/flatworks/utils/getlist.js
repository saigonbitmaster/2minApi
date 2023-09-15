"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fullTextSearchTransform = exports.formatRaList = exports.queryTransform = void 0;
const queryTransform = (query) => {
    const sort = {};
    query.sort
        ? (sort[JSON.parse(query.sort)[0]] =
            JSON.parse(query.sort)[1] === 'ASC' ? 1 : -1)
        : null;
    const range = query.range ? JSON.parse(query.range) : [0, 24];
    const [rangeStart, rangeEnd] = [...range];
    const limit = rangeEnd - rangeStart + 1;
    const skip = rangeStart;
    const filter = query.filter ? JSON.parse(query.filter) : {};
    return { filter, sort, skip, limit };
};
exports.queryTransform = queryTransform;
const formatRaList = (res, result) => {
    return res
        .set({
        'Content-Range': result.count,
        'Access-Control-Expose-Headers': 'Content-Range',
    })
        .json(result.data);
};
exports.formatRaList = formatRaList;
const fullTextSearchTransform = (filters, searchKeyword) => {
    delete filters['keyword'];
    return Object.assign(Object.assign({}, filters), { $text: { $search: searchKeyword } });
};
exports.fullTextSearchTransform = fullTextSearchTransform;
//# sourceMappingURL=getlist.js.map