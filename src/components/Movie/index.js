import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../API";
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../../config";
import {
  MovieBackdrop,
  MovieContainer,
  MainInfo,
  PosterSection,
  Poster,
  OverviewSection,
  OverviewMovieData,
  UserActions,
} from "./Movie.styles";

const movieObject = {
  adult: false,
  backdrop_path: "",
  belongs_to_collection: {
    id: 0,
    name: "",
    poster_path: "",
    backdrop_path: "",
  },
  budget: 0,
  genres: [
    {
      id: 0,
      name: "",
    },
  ],
  homepage: "",
  id: 0,
  imdb_id: "",
  original_language: "en",
  original_title: "",
  overview: "n.",
  popularity: 0.0,
  poster_path: "",
  production_companies: [
    {
      id: 0,
      logo_path: "",
      name: "",
      origin_country: "",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "",
      name: "",
    },
  ],
  release_date: "",
  revenue: 0,
  runtime: 0,
  spoken_languages: [
    {
      english_name: "",
      iso_639_1: "",
      name: "",
    },
  ],
  status: "",
  tagline: "",
  title: "",
  video: false,
  vote_average: 0,
  vote_count: 0,
};

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(movieObject);

  function setProgress(percent) {
    const circle = document.querySelector(".progress-ring__circle");
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
  }

  const fetchMovie = async (movieId) => {
    const movieFetch = await API.fetchMovie(movieId);
    setMovie({ ...movieFetch });
    console.log({ ...movieFetch });
  };

  useEffect(() => {
    fetchMovie(id);
    setProgress(movie.vote_average * 10);
  }, [id, movie.vote_average]);

  return (
    <>
      <MovieBackdrop
        backgroundImage={IMAGE_BASE_URL + BACKDROP_SIZE + movie.backdrop_path}
      />
      <MovieContainer>
        <MainInfo>
          <PosterSection>
            <Poster
              alt=""
              src={IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path}
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
                  <svg class="progress-ring" width="64" height="64">
                    <circle
                      class="progress-ring__circle"
                      stroke-width="6"
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
                <a className="share-btn" href="#">
                  <i className="material-icons">share</i> Share
                </a>
              </div>
            </UserActions>
          </PosterSection>
          <OverviewSection>
            <h1>{movie.title}</h1>

            <OverviewMovieData>
              <span>
                {new Date(movie.release_date).toLocaleDateString("en-US")}
              </span>
              <span>{movie.runtime}m</span>
              <ul>
                {movie.genres.map((genre) => (
                  <li>{genre.name}</li>
                ))}
              </ul>
            </OverviewMovieData>
            <p>{movie.overview}</p>
          </OverviewSection>
        </MainInfo>
      </MovieContainer>
    </>
  );
};
export default Movie;
