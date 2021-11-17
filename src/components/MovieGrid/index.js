import React from 'react'
import {MoviesWrapper, ListHeader, ListTitle, Movies} from './MovieGrid.styles'
import MovieThumb from '../MovieThumb'
import Pagination from '../Pagination'

const MovieGrid = ({listTitle, fetchTrending, totalPages = 1, trending = false , movies = []}) => {

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
                    .map(movie => <MovieThumb key={movie.id} {...movie} fullWidth={true} /> )
                }
            </Movies>
            <Pagination totalPages={totalPages} />
        </MoviesWrapper>

    )
}

export default MovieGrid