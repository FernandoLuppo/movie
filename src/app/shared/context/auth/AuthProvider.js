"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthProvider = void 0;
//  Dependencies
const services_1 = require("../../services");
const react_router_dom_1 = require("react-router-dom");
//  Hooks
const react_1 = require("react");
//  Context
const AuthContext_1 = require("./AuthContext");
//  Route validator
const AuthProvider = ({ children }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [user, setUser] = (0, react_1.useState)(null);
    //  Checks if the user has already logged in through localStorage, if he has already done so, the routes are released
    (0, react_1.useEffect)(() => {
        const validateId = async () => {
            const storageData = localStorage.getItem("authId");
            if (storageData) {
                const response = await (0, services_1.Api)().post("/localStorage", { storageData });
                if (response.data)
                    setUser(response.data);
            }
        };
        validateId();
    }, []);
    //  send the user information to bank for validation and release routes
    const login = async (email, password) => {
        await (0, services_1.Api)().post("/login", { email, password })
            .then(res => {
            setUser(res.data);
            setId(res.data._id);
            navigate("/");
        }).catch(error => {
            let errors = error.response.data;
            if (errors)
                errors.forEach((error) => alert(error));
        });
    };
    //  Register a new user
    const register = async (name, email, password) => {
        await (0, services_1.Api)().post("/register", { name, email, password })
            .then(() => navigate("/login"))
            .catch(error => {
            let errors = error.response.data;
            if (errors)
                errors.forEach((error) => alert(error));
        });
    };
    //  Do logout
    const logout = async () => {
        setUser(null);
        setId("");
    };
    //  Define user information in localStorage to release routes
    const setId = (_id) => {
        localStorage.setItem("authId", _id);
    };
    return (<AuthContext_1.AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext_1.AuthContext.Provider>);
};
exports.AuthProvider = AuthProvider;
