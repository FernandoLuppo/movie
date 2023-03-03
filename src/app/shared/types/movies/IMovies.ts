export interface IList {
    slug?: string
    title: string
    items: {
        title: string
        overview: string
        poster_path: string
        backdrop_path: string
        release_date: string
        vote_average: number
        id: number
    }[]
}

export interface IRandomMovie {
    item: {
        title: string
        overview: string
        poster_path: string
        backdrop_path: string
        release_date: string
        vote_average: number
        id: number
    }
}

export interface ISearchBar {
    title: string
    overview: string
    poster_path: string
    backdrop_path: string
    release_date: string
    vote_average: number
    id: number
}
