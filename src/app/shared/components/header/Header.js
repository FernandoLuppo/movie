"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
//  Dependencies
const ai_1 = require("react-icons/ai");
const react_router_dom_1 = require("react-router-dom");
//  Hooks
const services_1 = require("../../services");
const react_1 = require("react");
//  Context
const context_1 = require("../../context");
//  Components
const Input_1 = require("../input/Input");
//  Style
require("./header.css");
const Header = ({ blackHeader }) => {
    const [searchList, setSearchList] = (0, react_1.useState)();
    const auth = (0, react_1.useContext)(context_1.AuthContext);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleClick = () => {
        auth.logout();
        navigate("/login");
    };
    const API_KEY = process.env.REACT_APP_API_KEY;
    const urlPT1 = "https://api.themoviedb.org/3/search/movie?api_key=";
    const urlPT2 = "&language=pt-BR&page=1&include_adult=false&query=";
    const url = urlPT1 + API_KEY + urlPT2;
    const handleChange = async (e) => {
        const search = document.getElementById("Header-search-container");
        if (e.target.value === "") {
            if (search)
                search.style.display = "none";
        }
        else {
            if (search)
                search.style.display = "block";
        }
        await (0, services_1.Api)().get(`${url}${e.target.value}`)
            .then(res => setSearchList(res.data.results))
            .catch(error => console.log(error));
    };
    return (<header className={blackHeader ? "Header-black" : ""}>
            <div>
                <div className="Header-logo">
                    <react_router_dom_1.Link to="/">
                        <img src={require("../../images/logo.png")} alt="logo"/>
                        <h1>LuppoTw</h1>
                    </react_router_dom_1.Link>
                </div>
                <nav>
                    <div className="Header-search">
                        <div>
                            <Input_1.Input onChange={handleChange} id="input" autoComplete="off"/>
                            <ai_1.AiOutlineSearch className="Header-search-icon"/>
                        </div>
                        <div className="Header-search-container" id="Header-search-container">
                            {searchList?.map(item => {
            const chosenMovie = () => {
                navigate(`/watch/${item.id}`);
                window.location.reload();
            };
            return <span onClick={chosenMovie} className="Header-search-list"><p>{item.title}</p></span>;
        })}
                        </div>
                    </div>
                    <button onClick={handleClick}>Sair</button>
                </nav>
            </div>
        </header>);
};
exports.Header = Header;
