"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
//  Components
const mask_1 = require("./mask");
const Input = ({ mask, ...props }) => {
    const handleKeyUp = (e) => {
        if (mask === "justNumber") {
            (0, mask_1.justNumber)(e);
        }
    };
    return <input {...props} onKeyUp={handleKeyUp}/>;
};
exports.Input = Input;
