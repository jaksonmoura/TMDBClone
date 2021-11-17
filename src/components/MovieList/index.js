import React from 'react'
import {MoviesWrapper, ListHeader, ListTitle, Movies} from './MovieList.styles'
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
        <MoviesWrapper>
            {trending ? <ListHead/> : <ListTitle>{listTitle}</ListTitle>}
            <Movies>
                {movies
                    .sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
                    .map(movie => <MovieThumb key={movie.id} {...movie} /> )
                }
            </Movies>
        </MoviesWrapper>
    )
}

export default MovieList