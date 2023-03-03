"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trailer = void 0;
//  Dependencies
const react_youtube_1 = __importDefault(require("react-youtube"));
//  Hooks
const react_1 = require("react");
const services_1 = require("../../../../shared/services");
//  Style
require("./trailer.css");
const Trailer = ({ movie }) => {
    const [trailer, setTrailer] = (0, react_1.useState)();
    const _id = movie.id;
    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_BASE_WATCH = process.env.REACT_APP_API_BASE_WATCH;
    const keyPT1 = API_BASE_WATCH;
    const keyPT2 = _id + "?api_key=" + API_KEY + "&append_to_response=videos";
    const key = keyPT1 + keyPT2;
    (0, react_1.useEffect)(() => {
        const getVideo = async () => {
            await (0, services_1.Api)().get(key)
                .then(res => {
                const video = res.data.videos.results;
                video.forEach((item) => {
                    if (item.name === "Official Trailer")
                        setTrailer(item);
                });
            });
        };
        getVideo();
    }, [key]);
    return (<div className="Trailer-container">
            <react_youtube_1.default videoId={trailer?.key} className="Trailer-youtube"/>
        </div>);
};
exports.Trailer = Trailer;
