"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
//  Dependencies
const react_router_dom_1 = require("react-router-dom");
//  Components
const pages_1 = require("../pages");
//  Contexts
const context_1 = require("../shared/context");
const Routes = () => {
    return (<react_router_dom_1.BrowserRouter>
            <context_1.AuthProvider>
                <react_router_dom_1.Routes>
                    <react_router_dom_1.Route path="/" element={<context_1.AuthRequire><pages_1.Home /></context_1.AuthRequire>}/>
                    <react_router_dom_1.Route path="/login" element={<pages_1.Login />}/>
                    <react_router_dom_1.Route path="/register" element={<pages_1.Register />}/>
                    <react_router_dom_1.Route path="/watch/:id" element={<context_1.AuthRequire><pages_1.Watch /></context_1.AuthRequire>}/>
                    <react_router_dom_1.Route path="/recover-password" element={<pages_1.RecoverPassword />}/>
                    <react_router_dom_1.Route path="/new-password/:id" element={<pages_1.NewPassword />}/>

                    <react_router_dom_1.Route path="*" element={<context_1.AuthRequire><pages_1.Home /></context_1.AuthRequire>}/>
                </react_router_dom_1.Routes>
            </context_1.AuthProvider>
        </react_router_dom_1.BrowserRouter>);
};
exports.Routes = Routes;
