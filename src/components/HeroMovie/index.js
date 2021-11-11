import React from 'react'
import {HeroWrapper, HeroTitle, HeroOverview} from './HeroMovie.styles'

const HeroMovie = ({id, title, overview, backdrop}) =>{
    return(
        <section id="hero">
            <HeroWrapper href={`/movie/${id}`} backgroundImage={backdrop}>
                <HeroTitle>{title}</HeroTitle>
                <HeroOverview>{overview}</HeroOverview>
            </HeroWrapper>
        </section>
    )
}

export default HeroMovie