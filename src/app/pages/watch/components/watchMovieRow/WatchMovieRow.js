"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatchMovieRow = void 0;
//  Dependencies
const react_router_dom_1 = require("react-router-dom");
const md_1 = require("react-icons/md");
//  Hooks
const react_1 = require("react");
const services_1 = require("../../../../shared/services");
//  Style
require("./watchMovieRow.css");
const WatchMovieRow = () => {
    const [row, setRow] = (0, react_1.useState)();
    const [scrollX, setScrollX] = (0, react_1.useState)(-340);
    const navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(() => {
        const loadMovies = async () => {
            await (0, services_1.Api)().get("/movies")
                .then(res => res.data.filter((data) => data.slug === "trending" ? setRow(data) : ""))
                .catch(error => console.log(error));
        };
        loadMovies();
    }, []);
    const leftArrow = (0, react_1.useCallback)(() => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0)
            x = 0;
        setScrollX(x);
    }, [scrollX]);
    const rightArrow = (0, react_1.useCallback)(() => {
        if (window.innerWidth > 700) {
            let x = scrollX - Math.round(window.innerWidth / 2);
            if (row?.items.length) {
                let listW = row?.items.length * 170 + 215;
                if ((window.innerWidth - listW) > x)
                    x = (window.innerWidth - listW);
                setScrollX(x);
            }
        }
        else {
            let x = scrollX - Math.round(window.innerWidth / 2);
            if (row?.items.length) {
                let listW = row?.items.length * 170 + 112;
                if ((window.innerWidth - listW) > x)
                    x = (window.innerWidth - listW);
                setScrollX(x);
            }
        }
    }, [row?.items.length, scrollX]);
    const rowWidth = () => {
        if (row?.items.length)
            return window.innerWidth > 700 ? row?.items.length * 170 + 215 : row?.items.length * 170 + 112;
    };
    return (<div className="WatchMovieRow-container">
            <h2>{row?.title}</h2>
            <div>
                <div className="WatchMovieRow-left" onClick={leftArrow}>
                    <md_1.MdNavigateBefore size={40}/>
                </div>
                <div className="WatchMovieRow-right" onClick={rightArrow}>
                    <md_1.MdNavigateNext size={40}/>
                </div>

                <div className="WatchMovieRow-listArea">
                    <div className="WatchMovieRow-list" style={{ marginLeft: scrollX, width: rowWidth() }}>
                        {row?.items.length && row.items.length > 0 && row.items.map(item => {
            const chosenMovie = () => {
                navigate(`/watch/${item.id}`);
                window.location.reload();
            };
            return (<div className="WatchMovieRow-item" key={item.id}>
                                    <span onClick={chosenMovie} className="nav-item">
                                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title}/>
                                    </span>
                                </div>);
        })}
                    </div>
                </div>
            </div>
        </div>);
};
exports.WatchMovieRow = WatchMovieRow;
