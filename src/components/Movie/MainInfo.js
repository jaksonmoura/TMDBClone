import React, {useEffect} from 'react'
import { IMAGE_BASE_URL } from "../../config";
import {
    MainInfoWrapper,
    PosterSection,
    Poster,
    OverviewSection,
    OverviewMovieData,
    UserActions,
  } from "./Movie.styles";

const MainInfo = ({movie}) => {

    const setProgress = (percent) => {
        const circle = document.querySelector(".progress-ring__circle");
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    }

    useEffect(() => {
        setProgress(movie.vote_average * 10);
    }, [movie.vote_average]);

    return(
        <MainInfoWrapper>
          <PosterSection>
            <Poster
              alt=""
              src={IMAGE_BASE_URL + "w300" + movie.poster_path}
            />
            <UserActions>
              <ul>
                <li>
                  <button aria-label="Favorite">
                    <i className="material-icons">favorite_border</i>
                  </button>
                </li>
                <li>
                  <button aria-label="Favorite">
                    <i className="material-icons">star_border</i>
                  </button>
                </li>
                <li>
                  <button aria-label="Favorite">
                    <i className="material-icons">bookmark_border</i>
                  </button>
                </li>
                <li>
                  <button aria-label="Favorite">
                    <i className="material-icons">list</i>
                  </button>
                </li>
              </ul>
              <div className="other-actions">
                <div className="score">
                  <svg className="progress-ring" width="64" height="64">
                    <circle
                      className="progress-ring__circle"
                      strokeWidth="6"
                      fill="transparent"
                      r="28"
                      cx="32"
                      cy="32"
                    />
                  </svg>
                  <span className="score-num">
                    {movie.vote_average > 0 ? movie.vote_average : "NR"}
                  </span>
                </div>
                <a className="share-btn" href="#share">
                  <i className="material-icons">share</i> Share
                </a>
              </div>
            </UserActions>
          </PosterSection>
          <OverviewSection>
            <h1>{movie.title}</h1>

            <OverviewMovieData>
              <span>
                { new Date(movie.release_date).toLocaleDateString("en-US") }
              </span>
              <span>{movie.runtime}m</span>
              <ul>
                {movie.genres.map((genre) => (
                    <li key={genre.id} >{genre.name}</li>
                  ))}
              </ul>
            </OverviewMovieData>
            <p>{movie.overview}</p>
          </OverviewSection>
        </MainInfoWrapper>
    )
}

export default MainInfo