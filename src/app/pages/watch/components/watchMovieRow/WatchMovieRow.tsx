//  Dependencies
import { useNavigate } from "react-router-dom"
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md"
//  Hooks
import { useEffect, useState, useCallback } from "react"
import { Api } from "../../../../shared/services"
//  Types
import { IList } from "../../../../shared/types"
//  Style
import "./watchMovieRow.css"

export const WatchMovieRow = () => {
    
    const [ row, setRow ] = useState<IList>()
    const [scrollX, setScrollX] = useState(-340)

    const navigate = useNavigate()

    useEffect(() => {
        const loadMovies = async () => {
            await Api().get("/movies")
            .then(res => res.data.filter((data: IList) => data.slug === "trending" ? setRow(data) : ""))
            .catch(error => console.log(error))
        }
        loadMovies()
    }, [])

    const leftArrow = useCallback(() => {
        let x = scrollX + Math.round(window.innerWidth / 2)
        if(x > 0) x = 0
        setScrollX(x)
    }, [scrollX])

    const rightArrow = useCallback(() => {
        if(window.innerWidth > 700) {
            let x = scrollX - Math.round(window.innerWidth / 2)
            if(row?.items.length) {
                let listW = row?.items.length * 170 + 215
                if ((window.innerWidth - listW) > x) x = (window.innerWidth - listW)
                setScrollX(x)
            }
        } else {
            let x = scrollX - Math.round(window.innerWidth / 2)
            if(row?.items.length) {
                let listW = row?.items.length * 170 + 112
                if ((window.innerWidth - listW) > x) x = (window.innerWidth - listW)
                setScrollX(x)
            }
        }
    }, [row?.items.length, scrollX])
    const rowWidth = () => {
        if (row?.items.length) return window.innerWidth > 700 ? row?.items.length * 170 + 215 : row?.items.length * 170 + 112
    }
    
    return (
        <div className="WatchMovieRow-container">
            <h2>{row?.title}</h2>
            <div>
                <div className="WatchMovieRow-left" onClick={leftArrow}>
                    <MdNavigateBefore size={40}/>
                </div>
                <div className="WatchMovieRow-right" onClick={rightArrow}>
                    <MdNavigateNext size={40}/>
                </div>

                <div className="WatchMovieRow-listArea">
                    <div className="WatchMovieRow-list" style={{marginLeft: scrollX, width: rowWidth()}}>
                        {row?.items.length && row.items.length > 0 && row.items.map(item => {
                            const chosenMovie = () => {
                                navigate(`/watch/${item.id}`)
                                window.location.reload()
                            }
                            return(
                                <div className="WatchMovieRow-item" key={item.id}>
                                    <span onClick={chosenMovie} className="nav-item">
                                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title} />
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}