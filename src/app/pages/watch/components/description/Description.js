"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Description = void 0;
//  Style
require("./description.css");
const Description = ({ movie }) => {
    const vote = () => {
        if (movie.vote_average > 6)
            return "Description-positive-vote";
        else
            return "Description-negative-vote";
    };
    return (<div className="Description-container"> 
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}/>
               
            <div className="Description-content">
                <h1>{movie.title}</h1>
                <div>
                    <h3 className={vote()}>⭐ {movie.vote_average}</h3>
                    <h3>📆 {movie.release_date}</h3>
                </div>
                <p>{movie.overview}</p>
            </div>
        </div>);
};
exports.Description = Description;
