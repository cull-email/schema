"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const organization_1 = __importDefault(require("./organization"));
const sender_1 = __importDefault(require("./sender"));
const message_1 = __importDefault(require("./message"));
exports.default = {
    Organization: organization_1.default,
    Sender: sender_1.default,
    Message: message_1.default
};
