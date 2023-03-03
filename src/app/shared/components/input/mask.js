"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.justNumber = void 0;
const justNumber = (e) => {
    let value = e.currentTarget.value;
    value = value.replace(/[a-z!@#¨$%^&*)(=_]+/g, "");
    e.currentTarget.value = value;
    return e;
};
exports.justNumber = justNumber;
