//  Dependencies
import YouTube from "react-youtube"
//  Hooks
import { useEffect, useState } from "react"
import { Api } from "../../../../shared/services"
//  Types
import { IVideos, IWatch } from "../../../../shared/types"
//  Style
import "./trailer.css"

export const Trailer = ({movie}: IWatch) => {
    const [ trailer, setTrailer ] = useState<IVideos>()

    const _id =  movie.id
    const API_KEY = process.env.REACT_APP_API_KEY
    const API_BASE_WATCH = process.env.REACT_APP_API_BASE_WATCH
    
    const keyPT1 =  API_BASE_WATCH
    const keyPT2 =  _id + "?api_key=" + API_KEY + "&append_to_response=videos"
    const key =  keyPT1 + keyPT2

    useEffect(() => {
        const getVideo = async () => {
            await Api().get(key)
            .then(res => {
                const video = res.data.videos.results
                video.forEach((item: IVideos) => {
                    if(item.name === "Official Trailer") setTrailer(item)
                })
            })
        }
        getVideo()
    },[key])
    
    return (
        <div className="Trailer-container">
            <YouTube videoId={trailer?.key} className="Trailer-youtube" />
        </div>
    )
}