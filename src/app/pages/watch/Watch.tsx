import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Header } from "../../shared/components"
import { Api } from "../../shared/services"
import { ISearchBar } from "../../shared/types"
import { Description, Trailer, WatchMovieRow } from "./components"
import "./watch.css"

export const Watch = () => {

    const [ movie, setMovie ] = useState<ISearchBar>()
    const [ blackHeader, setBlackHeader ] = useState(false)

    const params = useParams()
    const _id =  params.id
    const API_KEY = process.env.REACT_APP_API_KEY
    const API_BASE_WATCH = process.env.REACT_APP_API_BASE_WATCH

    const keyPT1 = API_BASE_WATCH
    const keyPT2 = _id + "?api_key=" + API_KEY + "&language=pt-BR"
    const key = keyPT1 + keyPT2

    useEffect(() => {
        const getMovie = async () => {
            await Api().get(key)
            .then(res => setMovie(res.data))
        }
        getMovie()
    }, [key])
    

    useEffect(() => {
        const scrollListener = () => {
            if(window.scrollY > 10) setBlackHeader(true)
            else setBlackHeader(false)
        }
        window.addEventListener("scroll", scrollListener)
        return () => window.removeEventListener("scroll", scrollListener)
    }, [])


    return (
        <div className="Watch-container">
            <Header blackHeader={blackHeader} />
            {movie && <Trailer movie={movie}/>}
            {movie && <Description movie={movie} />}
            <WatchMovieRow />
        </div>
    )
}