import React, { useState, useEffect } from 'react'
import API from '../../API'
import { SimilarMoviesList } from './Movie.styles'
import SimilarMovieThumb from './SimilarMovieThumb';

const SimilarMovies = ({movieId = 0}) => {
    const [similar, setSimilar] = useState([{}])

    const fetchSimilar = async (id = 0) => {
        if (id === 0) return
        let similarData = await API.fetchMovieSimilar(id);
        setSimilar(similarData.results)
    }

    useEffect(() => {
        fetchSimilar(movieId);
    }, [movieId])

    return (
        <SimilarMoviesList>
            <h3>Similar movies</h3>
            <ul>
                {similar.sort( s => s.release_date ).filter( (s, i) => i < 4).map(s => 
                    <SimilarMovieThumb movie={s} key={s.id} />
                )}
            </ul>
        </SimilarMoviesList>
    )
}

export default SimilarMovies