"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = void 0;
//  Dependencies
const bs_1 = require("react-icons/bs");
const react_router_dom_1 = require("react-router-dom");
//  Hooks
const react_1 = require("react");
//  Context
const context_1 = require("../../shared/context");
//  Components
const components_1 = require("../../shared/components");
//  Style
require("./register.css");
const Register = () => {
    const auth = (0, react_1.useContext)(context_1.AuthContext);
    const [name, setName] = (0, react_1.useState)("");
    const [email, setEmail] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const handleClick = (0, react_1.useCallback)(() => {
        auth.register(name, email, password);
    }, [auth, name, email, password]);
    return (<div className="Register-container">
            <main>
                <section>
                    <h1>Registro</h1>
                    <components_1.Input name="nome" placeholder="Nome..." onChange={e => setName(e.target.value)}/>
                    <components_1.Input name="email" placeholder="E-mail..." onChange={e => setEmail(e.target.value)}/>
                    <components_1.Input type="password" name="password" placeholder="Senha..." onChange={e => setPassword(e.target.value)}/>
                    <button onClick={handleClick}>Registrar</button>
                    <span>Voltar ao login <br />
                        <react_router_dom_1.Link to="/login">Login</react_router_dom_1.Link>
                    </span>
                    <div>
                        <bs_1.BsLinkedin size={50} className="teste" onClick={() => window.location.href = "https://www.linkedin.com/in/fernando-luppo-331496203/"}/>
                        <bs_1.BsGithub size={50} className="teste" onClick={() => window.location.href = "https://github.com/FernandoLuppo"}/>
                    </div>
                </section>
            </main> 
        </div>);
};
exports.Register = Register;
