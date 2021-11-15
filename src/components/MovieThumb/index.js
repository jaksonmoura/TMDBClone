import React from 'react'
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config'
import {Thumb, ThumbImg, Title, ReleaseDate} from './MovieThumb.styles'

const MovieThumb = ({id, poster_path, title, release_date}) =>{
    
    return(
        <Thumb href={`/movie/${id}`}>
            <ThumbImg src={IMAGE_BASE_URL+POSTER_SIZE+poster_path}/>
            <Title>{title}</Title>
            <ReleaseDate>{release_date}</ReleaseDate>
        </Thumb>
    )
}

export default MovieThumb