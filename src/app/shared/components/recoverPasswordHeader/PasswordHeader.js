"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordHeader = void 0;
//  Dependencies
const react_router_dom_1 = require("react-router-dom");
//  Style
require("./passwordHeader.css");
const PasswordHeader = () => {
    return (<header className="PasswordHeader-header">
            <react_router_dom_1.Link to="/login">
                <img src={require("../../../shared/images/logo.png")} alt="logo"/>
                <h1>LuppoTw</h1>
            </react_router_dom_1.Link>
        </header>);
};
exports.PasswordHeader = PasswordHeader;
