import React, { useState, useEffect } from 'react'
import API from '../../API'
import { SimilarMoviesList } from './Movie.styles'

const SimilarMovies = ({movieId = 0}) => {
    const [similar, setSimilar] = useState([{}])

    const fetchSimilar = async (id = 0) => {
        let similarData = await API.fetchMovieSimilar(id);
        setSimilar(similarData.results)
        console.log(similarData.results)
    }

    useEffect(() => {
        fetchSimilar(movieId);
    }, [movieId])

    return (
        <SimilarMoviesList>
            <h3>Similar movies</h3>
            <ul>
                {/* {similar.map(s =>)} */}
            </ul>
        </SimilarMoviesList>
    )
}

export default SimilarMovies