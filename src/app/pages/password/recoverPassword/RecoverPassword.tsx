//  Dependencies
import { useNavigate } from "react-router-dom";
//  Hooks
import { Api } from "../../../shared/services";
import { useState, useCallback } from "react";
//  Components
import { Input, PasswordHeader } from "../../../shared/components";
//  Types
import { IRecoverPassword } from "../../../shared/types";
//  Style
import "./recoverPassword.css";

export const RecoverPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>();
  const [display, setDisplay] = useState(false);
  const [userCode, setUserCode] = useState<IRecoverPassword | null>();
  const [emailCode, setEmailCode] = useState<string>();

  const generateCode = useCallback(() => {
    const sendEmail = async () => {
      await Api()
        .post("recover-password", { email })
        .then((res) => {
          setUserCode(res.data);
          setDisplay(true);
          setTimeout(() => {
            setUserCode(null);
            alert(
              "O tempo expirou, solicite um novo código apertando em Reenviar código"
            );
          }, 300000);
        })
        .catch((error) => {
          setDisplay(false);
          const errors = error.response.data;
          errors.forEach((error: string) => alert(error));
        });
    };
    sendEmail();
    alert("Código enviado!");
  }, [email]);

  const codeVerification = useCallback(() => {
    const sendCode = () => {
      const fullCode = userCode?.code.join("");
      if (fullCode === emailCode) navigate(`/new-password/${userCode?._id}`);
      else alert("Código errado!");
    };
    sendCode();
  }, [userCode, emailCode, navigate]);

  return (
    <div className="RecoverPassword-container">
      <PasswordHeader />

      {display === false ? (
        <div>
          <h2>Redefinir sua senha</h2>
          <p>Coloque abaixo o email onde você queira receber sua nova senha.</p>
          <Input
            placeholder="Coloque seu E-mail..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={generateCode}
            className="RecoverPassword-send-button"
          >
            Enviar
          </button>
        </div>
      ) : (
        <div id="verificationContainer">
          <h3>Coloque aqui o código enviado ao seu e-mail:</h3>
          <Input
            onChange={(e) => setEmailCode(e.target.value)}
            mask="justNumber"
            className="RecoverPassword-code-input"
            maxLength={6}
          />
          <button
            onClick={codeVerification}
            className="RecoverPassword-send-button"
          >
            Verificar
          </button>
          <button
            onClick={generateCode}
            className="RecoverPassword-resend-code-button"
          >
            Reenviar código
          </button>
        </div>
      )}
    </div>
  );
};
