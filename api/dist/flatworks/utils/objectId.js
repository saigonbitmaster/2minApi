"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToObjectId = void 0;
const mongoose_1 = require("mongoose");
const ToObjectId = (objectId) => {
    return new mongoose_1.Types.ObjectId(objectId);
};
exports.ToObjectId = ToObjectId;
//# sourceMappingURL=objectId.js.map