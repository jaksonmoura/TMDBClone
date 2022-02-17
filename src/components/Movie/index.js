import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../API";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";
import {
  MovieBackdrop,
  MovieContainer,
  Details,
  SideInfo,
  InfoList,
  TabbedSection
} from "./Movie.styles";
import Cast from './Cast';
import Trailer from './Trailer'
import MainInfo from './MainInfo'
import SimilarMovies from "./SimilarMovies";
import MovieMedia from './Media';
import {Languages} from '../../langs'

const movieObject = {
  adult: false,
  backdrop_path: "",
  belongs_to_collection: {
    id: 0,
    name: "",
    poster_path: "",
    backdrop_path: "",
  },
  cast: [],
  crew: [],
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
  const [credits, setCredits] = useState({ cast: [], crew: [], id: 0 });

  const fetchMovie = async (movieId) => {
    let movieFetch = await API.fetchMovie(movieId);
    let creditsFetch = await API.fetchMovieCredits(movieId);
    setMovie({ ...movieFetch });
    setCredits({ ...creditsFetch });
  };

  useEffect(() => {
    fetchMovie(id);
  }, [id]);

  return (
    <>
      <MovieBackdrop>
        <img src={IMAGE_BASE_URL + BACKDROP_SIZE + movie.backdrop_path} alt="" />
      </MovieBackdrop>
      <MovieContainer>
        <MainInfo movie={movie} />
        <Details>
          <SideInfo>
            <InfoList>
              <li>
                <label>Status</label>
                <p>{movie.status}</p>
              </li>
              <li>
                <label>Original language</label>
                <p>{Languages[movie.original_language].name}</p>
              </li>
              <li>
                <label>Budget</label>
                <p>{new Intl.NumberFormat("en-US",  { style: 'currency', currency: 'USD' }).format(movie.budget)}</p>
              </li>
              <li>
                <label>Revenue</label>
                <p>{new Intl.NumberFormat("en-US",  { style: 'currency', currency: 'USD' }).format(movie.revenue)}</p>
              </li>
            </InfoList>
            <SimilarMovies movieId={movie.id} />
          </SideInfo>
          <TabbedSection>
            <Trailer movieId={movie.id} />
            <Cast cast={credits.cast} />
            <MovieMedia movieId={movie.id} />
          </TabbedSection>
        </Details>
      </MovieContainer>
    </>
  );
};
export default Movie;
