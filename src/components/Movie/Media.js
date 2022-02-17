import {React, useEffect, useState} from 'react';
import API from "../../API";
import { IMAGE_BASE_URL } from '../../config';
import { MovieMediaGrid, MovieMediaThumb } from './Movie.styles';

const MovieMedia = ({movieId}) => {
    const [apiMedia, setApiMedia] = useState({ backdrops: [], id: 0, logos: [], posters: [] });
    // const [allMedia, setAllMedia] = useState([]);


    const fetchMedia = async(id = 0) => {
        if (id === 0) return
        const apiImages = await API.fetchMovieImages(id)
        setApiMedia(apiImages);
    }

    const allMediaImages = () => [...apiMedia.backdrops, ...apiMedia.posters, ...apiMedia.logos];

    const MediaGrid = () => {
        if (allMediaImages.length === 0) {
            return <></>
        }
        <>
            <h3>Media</h3>
            <MovieMediaGrid>
                {allMediaImages.map( (m, i) => 
                    <MovieMediaThumb src={IMAGE_BASE_URL + m.file_path} key={i} />
                )}
            </MovieMediaGrid>
        </>
    }

    useEffect(() => {
        fetchMedia(movieId);
    }, [movieId])

    return (
        <MediaGrid/>
    )
}

export default MovieMedia