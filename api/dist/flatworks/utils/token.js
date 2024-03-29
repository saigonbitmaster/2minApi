"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getToken = (req) => {
    if (req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }
    else if (req.access_token && req.query.access_token) {
        return req.query.access_token;
    }
    return null;
};
exports.default = getToken;
//# sourceMappingURL=token.js.map