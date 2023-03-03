"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRequire = void 0;
//  Hooks
const react_1 = require("react");
//  Context
const AuthContext_1 = require("./AuthContext");
//  Components
const pages_1 = require("../../../pages");
//  If the user has already logged in at some point, release the routes, otherwise redirect to the login page
const AuthRequire = ({ children }) => {
    const auth = (0, react_1.useContext)(AuthContext_1.AuthContext);
    if (auth.user) {
        return children;
    }
    else {
        return <pages_1.Login />;
    }
};
exports.AuthRequire = AuthRequire;
