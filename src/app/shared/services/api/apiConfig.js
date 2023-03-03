"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const axios_1 = __importDefault(require("axios"));
const Api = () => {
    return axios_1.default.create({
        baseURL: "https://technotes-api.onrender.com"
    });
};
exports.Api = Api;
