"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecoverPassword = void 0;
//  Dependencies
const react_router_dom_1 = require("react-router-dom");
//  Hooks
const services_1 = require("../../../shared/services");
const react_1 = require("react");
//  Components
const components_1 = require("../../../shared/components");
//  Style
require("./recoverPassword.css");
const RecoverPassword = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [email, setEmail] = (0, react_1.useState)();
    const [display, setDisplay] = (0, react_1.useState)(false);
    const [userCode, setUserCode] = (0, react_1.useState)();
    const [emailCode, setEmailCode] = (0, react_1.useState)();
    const generateCode = (0, react_1.useCallback)(() => {
        const sendEmail = async () => {
            await (0, services_1.Api)().post("recover-password", { email })
                .then(res => {
                setUserCode(res.data);
                setDisplay(true);
                setTimeout(() => {
                    setUserCode(null);
                    alert("O tempo expirou, solicite um novo código apertando em Reenviar código");
                }, 300000);
            })
                .catch(error => {
                setDisplay(false);
                const errors = error.response.data;
                errors.forEach((error) => alert(error));
            });
        };
        sendEmail();
        alert("Código enviado!");
    }, [email]);
    const codeVerification = (0, react_1.useCallback)(() => {
        const sendCode = () => {
            const fullCode = userCode?.code.join("");
            if (fullCode === emailCode)
                navigate(`/new-password/${userCode?._id}`);
            else
                alert("Código errado!");
        };
        sendCode();
    }, [userCode, emailCode, navigate]);
    return (<div className="RecoverPassword-container">
            <components_1.PasswordHeader />

            {display === false ?
            <div>
                    <h2>Redefinir sua senha</h2>
                    <p>Coloque Abaixo o email onde você queira receber sua nova senha.</p>
                    <components_1.Input placeholder="Coloque seu E-mail..." onChange={e => setEmail(e.target.value)}/>
                    <button onClick={generateCode} className="RecoverPassword-send-button">Enviar</button>
                </div>
            :
                <div id="verificationContainer">
                    <h3>Coloque aqui o código enviado ao seu e-mail:</h3>
                    <components_1.Input onChange={e => setEmailCode(e.target.value)} mask="justNumber" className="RecoverPassword-code-input" maxLength={6}/>
                    <button onClick={codeVerification} className="RecoverPassword-send-button">Verificar</button>
                    <button onClick={generateCode} className="RecoverPassword-resend-code-button">Reenviar código</button>
                </div>}
        </div>);
};
exports.RecoverPassword = RecoverPassword;
