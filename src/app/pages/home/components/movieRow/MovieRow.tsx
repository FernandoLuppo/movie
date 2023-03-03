//  Dependencies
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md"
import { Link } from "react-router-dom"
//  Hooks
import { useCallback, useState } from "react"
//  Types
import { IList } from "../../../../shared/types"
//  Style
import "./movieRow.css"

export const MovieRow = ({title, items}: IList ) => {

    const [scrollX, setScrollX] = useState(-340)

    const leftArrow = useCallback(() => {
        let x = scrollX + Math.round(window.innerWidth / 2)
        if(x > 0) x = 0
        setScrollX(x)
    }, [scrollX])
    
    const rightArrow = useCallback(() => {
        if(window.innerWidth > 700) {
            let x = scrollX - Math.round(window.innerWidth / 2)
            let listW = items.length * 170 + 215
            if ((window.innerWidth - listW) > x) x = (window.innerWidth - listW)
            setScrollX(x)
        } else {
            let x = scrollX - Math.round(window.innerWidth / 2)
            let listW = items.length * 170 + 112
            if ((window.innerWidth - listW) > x) x = (window.innerWidth - listW)
            setScrollX(x)
        }
    }, [scrollX, items.length])

    return (
        <div className="MovieRow-container">
            <h2>{title}</h2>
            <div>
                <div className="MovieRow-left" onClick={leftArrow}>
                    <MdNavigateBefore size={40} />
                </div>
                <div className="MovieRow-right" onClick={rightArrow}>
                    <MdNavigateNext size={40} />
                </div>

                <div className="MovieRow-listArea">
                    <div className="MovieRow-list" style={{marginLeft: scrollX, width: window.innerWidth > 700 ? items.length * 170 + 215 : items.length * 170 + 112}}>
                        {items.length > 0 && items.map(item => {
                            return(
                                <div className="MovieRow-item" key={item.id}>
                                    <Link to={`/watch/${item.id}`} className="nav-item">
                                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title} />
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

