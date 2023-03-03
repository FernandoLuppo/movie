"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewPassword = void 0;
//  Dependencies
const react_router_dom_1 = require("react-router-dom");
//  Hooks
const services_1 = require("../../../shared/services");
const react_1 = require("react");
//  Components
const components_1 = require("../../../shared/components");
//  Style
require("./newPassword.css");
const NewPassword = () => {
    const params = (0, react_router_dom_1.useParams)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const _id = params.id;
    const [password, setPassword] = (0, react_1.useState)();
    const [confirmPassword, setConfirmPassword] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        const checkID = async () => {
            (0, services_1.Api)().post("/new-password-check-id", { _id })
                .then()
                .catch(() => navigate("/login"));
        };
        checkID();
    }, [_id, navigate]);
    const handleClick = (0, react_1.useCallback)(() => {
        if (password === confirmPassword) {
            const sendPassword = async () => {
                await (0, services_1.Api)().put("/new-password", { password, _id })
                    .then((res) => {
                    if (res.data.message === "success") {
                        alert("Senha alterada com sucesso!");
                        navigate("/login");
                    }
                })
                    .catch(error => {
                    const errors = error.response.data;
                    errors.forEach((error) => alert(error));
                });
            };
            sendPassword();
        }
        else
            alert("Suas Senhas não batem!");
    }, [_id, confirmPassword, navigate, password]);
    return (<div className="NewPassword-container">
            <components_1.PasswordHeader />

            <div>
                <h2>Crie uma nova Senha</h2>
                <div>
                    <p>Coloque sua senha:</p>
                    <components_1.Input type="password" placeholder="Coloque sua senha..." onChange={e => setPassword(e.target.value)}/>
                </div>
                <div>
                    <p>Preencha novamente sua senha:</p>
                    <components_1.Input type="password" placeholder="Preencha novamente sua senha..." onChange={e => setConfirmPassword(e.target.value)}/>
                </div>
                <button onClick={handleClick}>Enviar</button>
            </div>
        </div>);
};
exports.NewPassword = NewPassword;
