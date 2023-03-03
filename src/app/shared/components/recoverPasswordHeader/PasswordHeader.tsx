//  Dependencies
import { Link } from "react-router-dom"
//  Style
import "./passwordHeader.css"

export const PasswordHeader = () => {
    return (
        <header className="PasswordHeader-header">
            <Link to="/login">
                <img src={require("../../../shared/images/logo.png")} alt="logo" />
                <h1>LuppoTw</h1>
            </Link>
        </header>
    )
}