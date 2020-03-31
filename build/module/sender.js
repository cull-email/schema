import { v4 as uuid } from 'uuid';
export class Sender {
    constructor(data) {
        var _a, _b, _c, _d;
        this.id = (_a = data.id) !== null && _a !== void 0 ? _a : uuid();
        this.organizationId = data.organizationId;
        this.ignore = (_b = data.ignore) !== null && _b !== void 0 ? _b : false;
        this.feature = (_c = data.feature) !== null && _c !== void 0 ? _c : false;
        this.addresses = data.addresses;
        this.tags = (_d = data.tags) !== null && _d !== void 0 ? _d : [];
    }
}
export default Sender;
