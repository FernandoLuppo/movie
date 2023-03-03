//  Dependencies
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom"
//  Hooks
import { Api } from "../../services";
import { useState, useContext } from "react"
//  Context
import { AuthContext } from "../../context";
//  Components
import { Input } from "../input/Input";
//  Types
import { IHeader, ISearchBar } from "../../types"
//  Style
import "./header.css"

export const Header = ({blackHeader}: IHeader) => {
    const [ searchList, setSearchList ] = useState<ISearchBar[]>()

    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const handleClick = () => {
        auth.logout()
        navigate("/login")
    }

    const API_KEY = process.env.REACT_APP_API_KEY
    const urlPT1 = "https://api.themoviedb.org/3/search/movie?api_key="
    const urlPT2 = "&language=pt-BR&page=1&include_adult=false&query="
    const url = urlPT1 + API_KEY + urlPT2
    
    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const search = document.getElementById("Header-search-container")

        if (e.target.value === "") {
            if (search) search.style.display = "none"
        } else {
            if (search) search.style.display = "block"
        }
        
        await Api().get(`${url}${e.target.value}`)
        .then(res => setSearchList(res.data.results))
        .catch(error => console.log(error))
    }

    return (
        <header className={blackHeader ? "Header-black" : ""}>
            <div>
                <div className="Header-logo">
                    <Link to="/">
                        <img src={require("../../images/logo.png")} alt="logo" />
                        <h1>LuppoTw</h1>
                    </Link>
                </div>
                <nav>
                    <div className="Header-search">
                        <div>
                            <Input onChange={handleChange} id="input" autoComplete="off" />
                            <AiOutlineSearch className="Header-search-icon" />
                        </div>
                        <div className="Header-search-container" id="Header-search-container">
                            {searchList?.map(item => {
                                const chosenMovie = () => {
                                    navigate(`/watch/${item.id}`)
                                    window.location.reload()
                                }
                                return <span onClick={chosenMovie} className="Header-search-list"><p>{item.title}</p></span>
                            })}
                        </div>
                    </div>
                    <button onClick={handleClick}>Sair</button>
                </nav>
            </div>
        </header>
    )
}