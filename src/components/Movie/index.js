import React, {useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import API from '../../API'
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../../config'
import { MovieBackdrop, MovieContainer, MainInfo, PosterSection, Poster, OverviewSection } from './Movie.styles';

const Movie = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState({})

    const fetchMovie = async (movieId) => {
        const movieFetch = await API.fetchMovie(movieId)
        setMovie(movieFetch)
    }

    useEffect(()=>{
        fetchMovie(id)
    }, [id])

    return (
        <>
            <MovieBackdrop backgroundImage={IMAGE_BASE_URL+BACKDROP_SIZE+movie.backdrop_path} />
            <MovieContainer>
                <MainInfo>
                    <PosterSection>
                        <Poster src={IMAGE_BASE_URL+POSTER_SIZE+movie.poster_path} />
                    </PosterSection>
                    <OverviewSection>
                        <h1>{movie.title}</h1>
                        <p>{movie.overview}</p>
                    </OverviewSection>
                </MainInfo>
            </MovieContainer>
        </>
    )
}
export default Movie