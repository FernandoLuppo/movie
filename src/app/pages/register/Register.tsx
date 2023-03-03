//  Dependencies
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { Link } from "react-router-dom"
//  Hooks
import { useState, useContext, useCallback } from "react"
//  Context
import { AuthContext, } from "../../shared/context"
//  Components
import { Input } from "../../shared/components"
//  Style
import "./register.css"

export const Register = () => {
    const auth = useContext(AuthContext)

    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const handleClick = useCallback (() => {
        auth.register(name, email, password)
    } ,[auth, name, email, password])

    return (
        <div className="Register-container">
            <main>
                <section>
                    <h1>Registro</h1>
                    <Input name="nome" placeholder="Nome..." onChange={e => setName(e.target.value)} />
                    <Input name="email" placeholder="E-mail..." onChange={e => setEmail(e.target.value)} />
                    <Input type="password" name="password" placeholder="Senha..." onChange={e => setPassword(e.target.value)} />
                    <button onClick={handleClick}>Registrar</button>
                    <span>Voltar ao login <br />
                        <Link to="/login">Login</Link>
                    </span>
                    <div>
                        <BsLinkedin size={50} className="teste" onClick={() => window.location.href="https://www.linkedin.com/in/fernando-luppo-331496203/"} />
                        <BsGithub size={50} className="teste" onClick={() => window.location.href="https://github.com/FernandoLuppo"} />
                    </div>
                </section>
            </main> 
        </div>
    )
}