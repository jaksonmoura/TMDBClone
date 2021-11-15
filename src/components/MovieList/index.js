import React from 'react'
import {MoviesList, ListHeader, ListTitle, MovieGrid} from './MovieList.styles'
import MovieThumb from '../MovieThumb'

const MovieList = ({listTitle, fetchTrending, trending = false , movies = []}) => {

    const ListHead = () =>{
        return(
            <ListHeader>
                <ListTitle>{listTitle}</ListTitle>
                <ul>
                    <li><a onClick={() => fetchTrending()} href="#movies">Movies</a></li>
                    <li><a onClick={() => fetchTrending(false)} href="#tv">TV</a></li>
                </ul>
            </ListHeader>
        )
    }

    return (
        <MoviesList>
            {trending ? <ListHead/> : <ListTitle>{listTitle}</ListTitle>}
            <MovieGrid>
                {movies.map(movie => <MovieThumb key={movie.id} {...movie} /> )}
            </MovieGrid>
        </MoviesList>
    )
}

export default MovieList