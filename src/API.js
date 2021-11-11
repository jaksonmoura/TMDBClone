import axios from 'axios'
import { API_URL,
    SEARCH_BASE_URL,
    NOW_PLAYING_BASE_URL,
    POPULAR_BASE_URL,
    LATEST_BASE_URL,
    UPCOMING_BASE_URL,
    TRENDING_MOVIES_URL,
    TRENDING_TV_URL
} from './config'
const API_KEY = process.env.REACT_APP_API_KEY

const API = {
    fetchMovies: async (page = 1, searchTerm = "") => {
        let fetchURL = ( searchTerm === "" ?
                        POPULAR_BASE_URL :
                        `${SEARCH_BASE_URL+searchTerm}&page=${page}`  )
        return await axios.get(fetchURL).then(response => (response.data))
    },
    fetchMovie: async (movieId) => {
        let fetchURL = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
        return await axios.get(fetchURL).then(response => (response.data))
    },
    fetchLatestMovies: async () => {
        let fetchURL = LATEST_BASE_URL
        return await axios.get(fetchURL).then(response => (response.data))
    },
    fetchUpcomingMovies: async (page = 1) => {
        let fetchURL = `${UPCOMING_BASE_URL}&page=${page}`
        return await axios.get(fetchURL).then(response => (response.data))
    },
    fetchNowPlaying: async (page = 1) => {
        let fetchURL = NOW_PLAYING_BASE_URL+`&page=${page}`
        return await axios.get(fetchURL).then(response => (response.data))
    },
    fetchTrending: async (movie = true) => {
        let fetchURL = ( movie ? TRENDING_MOVIES_URL : TRENDING_TV_URL )
        return await axios.get(fetchURL).then(response => (response.data))
    },



}

export default API