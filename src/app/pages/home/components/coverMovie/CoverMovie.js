"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoverMovie = void 0;
//  Dependencies
const fa_1 = require("react-icons/fa");
const react_router_dom_1 = require("react-router-dom");
//  Style
require("./coverMovie.css");
const CoverMovie = ({ item }) => {
    const url = `https://image.tmdb.org/t/p/original${item.backdrop_path}`;
    const vote = () => {
        if (item.vote_average > 6)
            return "CoverMovie-positive-vote";
        else
            return "CoverMovie-negative-vote";
    };
    let firstDate = new Date(item.release_date);
    return (<div className="CoverMovie-container" style={{ backgroundImage: `url(${url})` }}>
            <div className="CoverMovie-gradient-x">
                <div className="CoverMovie-gradient-y">
                    <h1>{item.title}</h1>
                    <div className="CoverMovie-description">
                        <div className={vote()}>{item.vote_average} Pontos</div>
                        <div>{firstDate.getFullYear()}</div>
                    </div>
                    <div className="CoverMovie-overview">
                        <p>{item.overview}</p>
                    </div>

                    <div className="CoverMovie-buttons">
                        <button>
                            <react_router_dom_1.Link to={`/watch/${item.id}`}><fa_1.FaPlay /> Assistir</react_router_dom_1.Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>);
};
exports.CoverMovie = CoverMovie;
