import React, { useEffect, useState } from 'react'
import API from '../../API'


const Trailer = ({movieId}) => {
    const [trailerURL, setTrailerURL] = useState()

    const fetchTrailer = async (id = 0) => {
        if (id === 0) return
        let url = await API.fetchMovieTrailers(id);
        setTrailerURL(url.results[0].key);
    }

    useEffect(() => {
        fetchTrailer(movieId);
    })

    return (
        <>
            <h3>Trailer</h3>
            <div className="aspect-ration-trailer">
                <iframe src={`https://www.youtube.com/embed/${trailerURL}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </>
    )
}

export default Trailer