import React, { useEffect, useState } from 'react'
import API from '../API'
import {BACKDROP_SIZE, IMAGE_BASE_URL} from '../config'
import {randomNumber} from '../helper'
import Header from './Header'
import HeroMovie from './HeroMovie'
import MovieList from './MovieList'

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

const Home = () => {
    const [nowPlaying, setNowPlaying] = useState(initialState)
    const [upcomingMovies, setUpcomingMovies] = useState(initialState)
    const [trending, setTrending] = useState(initialState)
    const [heroMovie, setHeroMovie] = useState({
        title: "",
        overview: "",
        backdrop: "",
        id: 0
    })

    const fetchHomeNowPlaying = async () => {
        const nowP = await API.fetchNowPlaying()
        let rand = randomNumber(0, 19)
        setHeroMovie({
            id: nowP.results[rand].id,
            title: nowP.results[rand].original_title,
            overview: nowP.results[rand].overview,
            backdrop: IMAGE_BASE_URL+BACKDROP_SIZE+nowP.results[rand].backdrop_path
        })
        setNowPlaying(nowP)
    }

    const fetchUpcomingMovies = async () => {
        const latest = await API.fetchUpcomingMovies()
        setUpcomingMovies(latest)
    }

    const fetchTrending = async (movie = true) => {
        const trends = await API.fetchTrending(movie)
        setTrending(trends)
    }


    useEffect(() => {
        fetchHomeNowPlaying()
        fetchTrending()
        fetchUpcomingMovies()
    }, [])


    return(
        <>
            <Header/>
            <HeroMovie { ...heroMovie }/>
            <MovieList listTitle="Now Playing" movies={nowPlaying.results} />
            <MovieList listTitle="Trending" movies={trending.results} />
            <MovieList listTitle="Upcoming Movies" movies={upcomingMovies.results} />
        </>
    )
}


export default Home