import React, { useState, useEffect } from 'react'
import API from '../../API'
import { SimilarMoviesList, SimilarMoviesListWrapper } from './Movie.styles'
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

    if (similar.length === 0) return (<></>)
    return (
        <SimilarMoviesList>
            <h3>Similar movies</h3>
            <SimilarMoviesListWrapper>
                <ul>
                    {similar.sort( s => s.release_date ).filter( (s, i) => i < 4).map(s => 
                        <SimilarMovieThumb movie={s} key={s.id} />
                    )}  
                </ul>
            </SimilarMoviesListWrapper>
        </SimilarMoviesList>
    )
}

export default SimilarMovies