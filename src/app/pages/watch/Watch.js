"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Watch = void 0;
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const components_1 = require("../../shared/components");
const services_1 = require("../../shared/services");
const components_2 = require("./components");
require("./watch.css");
const Watch = () => {
    const [movie, setMovie] = (0, react_1.useState)();
    const [blackHeader, setBlackHeader] = (0, react_1.useState)(false);
    const params = (0, react_router_dom_1.useParams)();
    const _id = params.id;
    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_BASE_WATCH = process.env.REACT_APP_API_BASE_WATCH;
    const keyPT1 = API_BASE_WATCH;
    const keyPT2 = _id + "?api_key=" + API_KEY + "&language=pt-BR";
    const key = keyPT1 + keyPT2;
    (0, react_1.useEffect)(() => {
        const getMovie = async () => {
            await (0, services_1.Api)().get(key)
                .then(res => setMovie(res.data));
        };
        getMovie();
    }, [key]);
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
    return (<div className="Watch-container">
            <components_1.Header blackHeader={blackHeader}/>
            {movie && <components_2.Trailer movie={movie}/>}
            {movie && <components_2.Description movie={movie}/>}
            <components_2.WatchMovieRow />
        </div>);
};
exports.Watch = Watch;
