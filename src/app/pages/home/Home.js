"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
//  Hooks
const react_1 = require("react");
const services_1 = require("../../shared/services");
//  Components
const components_1 = require("./components");
const components_2 = require("../../shared/components");
//  Style
require("./home.css");
const Home = () => {
    const [list, setList] = (0, react_1.useState)(null);
    const [coverMovie, setCoverMovie] = (0, react_1.useState)(null);
    const [blackHeader, setBlackHeader] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const loadMovies = async () => {
            await (0, services_1.Api)().get("/movies")
                .then(res => {
                setList(res.data);
                let response = res.data;
                let topRated = response.filter(i => i.slug === "topRated");
                if (topRated) {
                    let randomChosen = Math.floor(Math.random() * (topRated[0]?.items.length - 1));
                    let item = topRated[0].items[randomChosen];
                    let chose = { item };
                    setCoverMovie(chose);
                }
            })
                .catch(error => console.log(error));
        };
        loadMovies();
    }, []);
    (0, react_1.useEffect)(() => {
        const scrollListener = () => {
            if (window.scrollY > 10)
                setBlackHeader(true);
            else
                setBlackHeader(false);
        };
        window.addEventListener("scroll", scrollListener);
        return () => window.removeEventListener("scroll", scrollListener);
    }, []);
    return (<div className="Home-container">
            <components_2.Header blackHeader={blackHeader}/>
            
            {coverMovie && <components_1.CoverMovie item={coverMovie.item}/>}

            <section>
                {list?.map((item, key) => {
            return <components_1.MovieRow items={item.items} title={item.title} key={key}/>;
        })}
            </section>

            <footer>
                <p>Esse site foi feito com propósito estudantil<br />utilizando a API do TMDB (The Movie Database)</p>
                <a href="https://www.themoviedb.org">themoviedb.org</a>
            </footer>
            
        </div>);
};
exports.Home = Home;
