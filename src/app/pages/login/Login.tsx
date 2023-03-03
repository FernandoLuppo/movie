//  Dependencies
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { Link } from "react-router-dom"
//  Hooks
import { useCallback, useContext, useState } from "react"
//  Context
import { AuthContext } from "../../shared/context"
//  Components
import { Input } from "../../shared/components"
//  Style
import "./login.css"

export const Login = () => {
    const auth = useContext(AuthContext)

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const handleClick = useCallback(() => {
        auth.login(email, password)
    },[auth, email, password])

    return (
        <div className="Login-container">
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
                    <Input name="email" placeholder="E-mail..." onChange={e => setEmail(e.target.value.toLocaleLowerCase())} />
                    <Input type="password" name="password" placeholder="Senha..." onChange={e => setPassword(e.target.value)} />
                    <button onClick={handleClick}>Entrar</button>
                    <span>Não tem uma conta? então <br />
                        <Link to="/register">Registre um usuário</Link>
                    </span>
                    <span>Esqueceu sua senha?<br />
                        <Link to="/recover-password">Resgatar Senha</Link>
                    </span>
                    <div>
                        <BsLinkedin size={50} onClick={() => window.location.href="https://www.linkedin.com/in/fernando-luppo-331496203/"} />
                        <BsGithub size={50} onClick={() => window.location.href="https://github.com/FernandoLuppo"} />
                    </div>
                </section>
            </main> 
        </div>
    )
}