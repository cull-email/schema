"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Sender {
    constructor(data) {
        var _a, _b, _c, _d;
        this.id = (_a = data.id) !== null && _a !== void 0 ? _a : uuid_1.v4();
        this.organizationId = data.organizationId;
        this.ignore = (_b = data.ignore) !== null && _b !== void 0 ? _b : false;
        this.feature = (_c = data.feature) !== null && _c !== void 0 ? _c : false;
        this.addresses = data.addresses;
        this.tags = (_d = data.tags) !== null && _d !== void 0 ? _d : [];
    }
}
exports.Sender = Sender;
exports.default = Sender;
