//  Dependencies
import { useParams, useNavigate } from "react-router-dom"
//  Hooks
import { Api } from "../../../shared/services"
import { useState, useCallback, useEffect } from "react"
//  Components
import { Input, PasswordHeader } from "../../../shared/components"
//  Style
import "./newPassword.css"

export const NewPassword = () => {
    const params = useParams()
    const navigate = useNavigate()
    const _id =  params.id

    const [ password, setPassword ] = useState<string>()
    const [ confirmPassword, setConfirmPassword ] = useState<string>()

    useEffect(() => {
        const checkID = async () => {
            Api().post("/new-password-check-id", {_id})
            .then()
            .catch(() => navigate("/login"))
        }
        checkID()
    }, [_id, navigate])

    const handleClick = useCallback(() => {
        if (password === confirmPassword) {
            const sendPassword = async () => {
                await Api().put("/new-password", { password, _id })
                .then((res) => {
                    if(res.data.message === "success") {
                        alert("Senha alterada com sucesso!")
                        navigate("/login")
                    }
                })
                .catch(error => {
                    const errors = error.response.data
                    errors.forEach((error:string) => alert(error))
                })
            }
            sendPassword()
        } else alert("Suas Senhas não batem!")
    }, [_id, confirmPassword, navigate, password])

    return (
        <div className="NewPassword-container">
            <PasswordHeader />

            <div>
                <h2>Crie uma nova Senha</h2>
                <div>
                    <p>Coloque sua senha:</p>
                    <Input type="password" placeholder="Coloque sua senha..." onChange={e => setPassword(e.target.value)} />
                </div>
                <div>
                    <p>Preencha novamente sua senha:</p>
                    <Input type="password" placeholder="Preencha novamente sua senha..." onChange={e => setConfirmPassword(e.target.value)} />
                </div>
                <button onClick={handleClick}>Enviar</button>
            </div>
        </div>
    )
}