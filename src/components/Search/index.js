import React, {useState, useEffect} from 'react'
import useQuery from '../../useQuery'
import API from '../../API'
import MovieList from '../MovieList'


// https://v5.reactrouter.com/web/example/query-parameters

const Search = () => {
    const q = useQuery().get("q")
    const [search, setSearch] = useState({})
    const [totalResults, setTotalResults] = useState(0)

    const queryTitles = async (query = "", page = 1) =>{
        let searchResults = await API.fetchMovies(page, query)
        setSearch(searchResults)
        console.log(searchResults)
        setTotalResults(searchResults.total_results)
    }
    
    useEffect(() => {
        queryTitles(q)
    }, [q])

    const resultsList = () => (
        totalResults > 0 ? 
        <MovieList listTitle={`${search.total_results} titles found for "${q}"`} movies={search.results} />
        :
        <p>{`${search.total_results} titles found for "${q}"`}</p>
    )
    
    return (
        <>
            {resultsList()}
        </>
    )
}

export default Search