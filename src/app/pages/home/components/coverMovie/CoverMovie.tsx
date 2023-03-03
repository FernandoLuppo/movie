//  Dependencies
import { FaPlay } from "react-icons/fa"
import { Link } from "react-router-dom"
//  Types
import { IRandomMovie } from "../../../../shared/types"
//  Style
import "./coverMovie.css"

export const CoverMovie = ({item}: IRandomMovie) => {
    const url = `https://image.tmdb.org/t/p/original${item.backdrop_path}`
    const vote = () => {
        if (item.vote_average > 6) return "CoverMovie-positive-vote"
        else return "CoverMovie-negative-vote"
    }
    let firstDate = new Date(item.release_date)

    return (
        <div className="CoverMovie-container" style={{backgroundImage: `url(${url})`}}>
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
                            <Link to={`/watch/${item.id}`}><FaPlay /> Assistir</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}