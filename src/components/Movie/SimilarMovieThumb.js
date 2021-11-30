import React, { useEffect } from 'react'
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";


const SimilarMovieThumb = ({movie}) => {

    const setProgress = (percent) => {
        const circle = document.querySelector(`.progress-ring__circle.circle_${movie.id}`);
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    }

    useEffect(() => {
        setProgress(movie.vote_average * 10)
    })

    return (
        <li>
            <a href={`/movie/${movie.id || 0}/`}>
                <img src={IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path} alt="" />
            </a>
            <div className="similar-data">
                <a href={`/movie/${movie.id || 0}/`}>
                    {movie.title} <br />
                    <span>({new Date(movie.release_date).getFullYear()})</span>
                </a>
                <div className="score">
                  <svg className="progress-ring" width="40" height="40">
                    <circle
                      className={`progress-ring__circle circle_${movie.id}`}
                      strokeWidth="2"
                      fill="transparent"
                      r="18"
                      cx="19"
                      cy="19"
                    />
                  </svg>
                  <span className="score-num">
                    {movie.vote_average > 0 ? Math.round(movie.vote_average * 10) / 10 : "NR"}
                  </span>
                </div>
            </div>
        </li>
    )
}

export default SimilarMovieThumb