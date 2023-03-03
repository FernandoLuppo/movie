"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
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
require("./login.css");
const Login = () => {
    const auth = (0, react_1.useContext)(context_1.AuthContext);
    const [email, setEmail] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const handleClick = (0, react_1.useCallback)(() => {
        auth.login(email, password);
    }, [auth, email, password]);
    return (<div className="Login-container">
            <div className="Login-warning">
                <div>
                    <p>Caso esteja tendo problemas para entrar use as seguintes credenciais</p>
                    <p><strong>Email: testefl@teste.com</strong></p> 
                    <p><strong>Senha: 12345</strong></p>
                </div>
            </div>
            <main>
                <section>
                    <h1>Login</h1>
                    <components_1.Input name="email" placeholder="E-mail..." onChange={e => setEmail(e.target.value.toLocaleLowerCase())}/>
                    <components_1.Input type="password" name="password" placeholder="Senha..." onChange={e => setPassword(e.target.value)}/>
                    <button onClick={handleClick}>Entrar</button>
                    <span>Não tem uma conta? então <br />
                        <react_router_dom_1.Link to="/register">Registre um usuário</react_router_dom_1.Link>
                    </span>
                    <span>Esqueceu sua senha?<br />
                        <react_router_dom_1.Link to="/recover-password">Resgatar Senha</react_router_dom_1.Link>
                    </span>
                    <div>
                        <bs_1.BsLinkedin size={50} onClick={() => window.location.href = "https://www.linkedin.com/in/fernando-luppo-331496203/"}/>
                        <bs_1.BsGithub size={50} onClick={() => window.location.href = "https://github.com/FernandoLuppo"}/>
                    </div>
                </section>
            </main> 
        </div>);
};
exports.Login = Login;
