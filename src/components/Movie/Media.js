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
        console.log("apiMedia");
        console.log(apiImages);
        setApiMedia(apiImages);
    }

    useEffect(() => {
        fetchMedia(movieId);
    }, [movieId])

    const MediaGrid = () => {
        let allMediaTemp = [...apiMedia.backdrops, ...apiMedia.posters, ...apiMedia.logos];
        if (allMediaTemp.length === 0) {
            return (<></>)
        } else {
            return (
            <>
                <h3>Media</h3>
                <MovieMediaGrid>
                    {allMediaTemp.map( (m, i) => 
                        <MovieMediaThumb src={IMAGE_BASE_URL + m.file_path} key={i} />
                    )}
                </MovieMediaGrid>
            </>
            )
        }
    }

    return (
        <MediaGrid/>
    )
}

export default MovieMedia