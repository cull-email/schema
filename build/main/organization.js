"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Organization {
    constructor(data) {
        var _a, _b, _c, _d;
        this.id = (_a = data.id) !== null && _a !== void 0 ? _a : uuid_1.v4();
        this.ignore = (_b = data.ignore) !== null && _b !== void 0 ? _b : false;
        this.feature = (_c = data.feature) !== null && _c !== void 0 ? _c : false;
        this.domains = data.domains;
        this.url = data.url;
        this.name = data.name;
        this.description = data.description;
        this.icon = data.icon;
        this.tags = (_d = data.tags) !== null && _d !== void 0 ? _d : [];
    }
}
exports.Organization = Organization;
exports.default = Organization;
