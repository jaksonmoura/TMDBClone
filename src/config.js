const API_KEY = process.env.REACT_APP_API_KEY

const API_URL = 'https://api.themoviedb.org/3/'

const SEARCH_BASE_URL = API_URL+ `search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&query=`
const NOW_PLAYING_BASE_URL = API_URL+ `movie/now_playing?api_key=${API_KEY}&language=en-US`
const POPULAR_BASE_URL = API_URL+ `movie/popular?api_key=${API_KEY}&language=en-US`
const LATEST_BASE_URL = API_URL+ `movie/latest?api_key=${API_KEY}&language=en-US`
const UPCOMING_BASE_URL = API_URL+ `movie/upcoming?api_key=${API_KEY}&language=en-US`
const TRENDING_MOVIES_URL = API_URL+ `trending/movie/day?api_key=${API_KEY}&language=en-US`
const TRENDING_TV_URL = API_URL+ `trending/tv/day?api_key=${API_KEY}&language=en-US`


const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

const BACKDROP_SIZE =  "w1280"
const LOGO_SIZE = "w185"
const POSTER_SIZE = "w200"
const PROFILE_SIZE = "w185"


export {
    API_URL,
    SEARCH_BASE_URL,
    NOW_PLAYING_BASE_URL,
    POPULAR_BASE_URL,
    LATEST_BASE_URL,
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    LOGO_SIZE,
    POSTER_SIZE,
    PROFILE_SIZE,
    UPCOMING_BASE_URL,
    TRENDING_MOVIES_URL,
    TRENDING_TV_URL
}
