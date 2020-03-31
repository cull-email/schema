"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Message {
    constructor(data) {
        var _a, _b, _c;
        this.id = (_a = data.id) !== null && _a !== void 0 ? _a : uuid_1.v4();
        this.organizationId = data.organizationId;
        this.senderId = data.senderId;
        this.seen = (_b = data.seen) !== null && _b !== void 0 ? _b : false;
        this.tags = (_c = data.tags) !== null && _c !== void 0 ? _c : [];
        this.thumbnail = data.thumbnail;
        this.from = data.from;
        this.to = data.to;
        this.subject = data.subject;
        this.body = data.body;
    }
}
exports.Message = Message;
exports.default = Message;
