import React, {useEffect, useState } from 'react'
import API from '../../API'

const Movie = (movieId) => {
    const [movieDetails, setMovieDetails] = useState({})

    const fetchMovie = async (movieId) => {
        const movie = await API.fetchMovie(movieId)
        setMovieDetails(movie)
    }

    useEffect(()=>{
        fetchMovie(movieId)
    })

    return (
        <pre>
            {movieDetails}
        </pre>
    )
}

export default Movie