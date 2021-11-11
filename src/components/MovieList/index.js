import React from 'react'
import {MoviesList, ListTitle, MovieGrid} from './MovieList.styles'
import MovieThumb from '../MovieThumb'

const MovieList = ({listTitle, movies = []}) => {
    return (
        <MoviesList>
            <ListTitle>{listTitle}</ListTitle>
            <MovieGrid>
                {movies.map(movie => <MovieThumb key={movie.id} {...movie} /> )}
            </MovieGrid>
        </MoviesList>
    )
}

export default MovieList