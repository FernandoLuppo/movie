"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieRow = void 0;
//  Dependencies
const md_1 = require("react-icons/md");
const react_router_dom_1 = require("react-router-dom");
//  Hooks
const react_1 = require("react");
//  Style
require("./movieRow.css");
const MovieRow = ({ title, items }) => {
    const [scrollX, setScrollX] = (0, react_1.useState)(-340);
    const leftArrow = (0, react_1.useCallback)(() => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0)
            x = 0;
        setScrollX(x);
    }, [scrollX]);
    const rightArrow = (0, react_1.useCallback)(() => {
        if (window.innerWidth > 700) {
            let x = scrollX - Math.round(window.innerWidth / 2);
            let listW = items.length * 170 + 215;
            if ((window.innerWidth - listW) > x)
                x = (window.innerWidth - listW);
            setScrollX(x);
        }
        else {
            let x = scrollX - Math.round(window.innerWidth / 2);
            let listW = items.length * 170 + 112;
            if ((window.innerWidth - listW) > x)
                x = (window.innerWidth - listW);
            setScrollX(x);
        }
    }, [scrollX, items.length]);
    return (<div className="MovieRow-container">
            <h2>{title}</h2>
            <div>
                <div className="MovieRow-left" onClick={leftArrow}>
                    <md_1.MdNavigateBefore size={40}/>
                </div>
                <div className="MovieRow-right" onClick={rightArrow}>
                    <md_1.MdNavigateNext size={40}/>
                </div>

                <div className="MovieRow-listArea">
                    <div className="MovieRow-list" style={{ marginLeft: scrollX, width: window.innerWidth > 700 ? items.length * 170 + 215 : items.length * 170 + 112 }}>
                        {items.length > 0 && items.map(item => {
            return (<div className="MovieRow-item" key={item.id}>
                                    <react_router_dom_1.Link to={`/watch/${item.id}`} className="nav-item">
                                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title}/>
                                    </react_router_dom_1.Link>
                                </div>);
        })}
                    </div>
                </div>
            </div>
        </div>);
};
exports.MovieRow = MovieRow;
