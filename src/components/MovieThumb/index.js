import React from 'react'
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config'
import {Thumb, ThumbImg, Title, ReleaseDate} from './MovieThumb.styles'

const MovieThumb = ({id, poster_path, title, release_date, fullWidth = false}) =>{
    
    return(
        <Thumb href={`/movie/${id}`}>
            <ThumbImg fullWidth={fullWidth} src={(poster_path ? IMAGE_BASE_URL+POSTER_SIZE+poster_path : "/noimg.jpg")}/>
            <Title>{title}</Title>
            <ReleaseDate>{ release_date ? new Date(release_date).toLocaleDateString("en-US") : "Not informed" }</ReleaseDate>
        </Thumb>
    )
}

export default MovieThumb