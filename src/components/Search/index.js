import React, {useState, useEffect} from 'react'
import useQuery from '../../useQuery'
import API from '../../API'
import MovieGrid from '../MovieGrid'


// https://v5.reactrouter.com/web/example/query-parameters

const Search = () => {
    const q = useQuery().get("q")
    const currentPage = useQuery().get("page")
    const [search, setSearch] = useState({})
    const [totalResults, setTotalResults] = useState(0)

    const queryTitles = async (query = "", page = 1) =>{
        let searchResults = await API.fetchMovies(page, query)
        setSearch(searchResults)
        console.log(searchResults)
        setTotalResults(searchResults.total_results)
    }
    
    useEffect(() => {
        queryTitles(q, currentPage)
    }, [q, currentPage])

    const resultsList = () => {
        if (totalResults > 0 && search.results.length > 0) {
            return <MovieGrid listTitle={`${search.total_results} titles found for "${q}"`} totalPages={search["total_pages"]}  movies={search.results} />
        } else if (totalResults === 0) {
            return <p>{`No titles found for "${q}"`}</p>
        } else if (currentPage > search["total_pages"]){
            return <p>There are no titles that match your query</p>
        }        
    }
    
    return (
        <>
            {resultsList()}
        </>
    )
}

export default Search