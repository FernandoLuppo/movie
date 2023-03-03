//  Hooks
import { useEffect, useState } from "react"
import { Api } from "../../shared/services"
//  Components
import { CoverMovie, MovieRow } from "./components"
import { Header } from "../../shared/components"
//  Types
import { IList, IRandomMovie } from "../../shared/types"
//  Style
import "./home.css"

export const Home = () => {

    const [ list, setList ] = useState<IList[] | null>(null)
    const [ coverMovie, setCoverMovie ] = useState<IRandomMovie | null>(null)
    const [ blackHeader, setBlackHeader ] = useState(false)

    useEffect(() => {
        const loadMovies = async () => {
            await Api().get("/movies")
            .then(res => {
                setList(res.data)
                let response:IList[] = res.data
                let topRated = response.filter(i => i.slug === "topRated" )

                if (topRated){
                    let randomChosen = Math.floor(Math.random() * (topRated[0]?.items.length - 1))
                    let item = topRated[0].items[randomChosen]
                    let chose = {item}
                    setCoverMovie(chose)
                }
            })
            .catch(error => console.log(error))
        }
        loadMovies()
    }, [])

    useEffect(() => {
        const scrollListener = () => {
            if(window.scrollY > 10) setBlackHeader(true)
            else setBlackHeader(false)
        }
        window.addEventListener("scroll", scrollListener)
        return () => window.removeEventListener("scroll", scrollListener)
    }, [])

    return (
        <div className="Home-container">
            <Header blackHeader={blackHeader} />
            
            {coverMovie && <CoverMovie item={coverMovie.item} />}

            <section>
                {list?.map((item, key) => {
                    return <MovieRow items={item.items} title={item.title} key={key} />
                })}
            </section>

            <footer>
                <p>Esse site foi feito com propósito estudantil<br />utilizando a API do TMDB (The Movie Database)</p>
                <a href="https://www.themoviedb.org">themoviedb.org</a>
            </footer>
            
        </div>
    )
}