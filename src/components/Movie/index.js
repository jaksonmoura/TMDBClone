import React, {useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import API from '../../API'

const Movie = () => {
    const { id } = useParams()
    const [movieDetails, setMovieDetails] = useState({})

    const fetchMovie = async (movieId) => {
        const movie = await API.fetchMovie(movieId)
        setMovieDetails(movie)
        console.table(movie)
    }

    useEffect(()=>{
        fetchMovie(id)
    }, [id])

    return (
        <>
            <h1>{movieDetails.title}</h1>
        </>
    )
}
export default Movie