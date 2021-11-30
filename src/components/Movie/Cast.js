import React from 'react'
import { IMAGE_BASE_URL, PROFILE_SIZE } from "../../config";
import { CastSection } from './Movie.styles'

const Cast = ({cast}) => {
    return(
        <CastSection>
            <h3>Actors and Actresses</h3>
              <div className="cast-list-wrapper">
                <ul>
                    {cast.map( c => 
                      <li>
                        <img src={IMAGE_BASE_URL + PROFILE_SIZE + c.profile_path} alt="" />    
                        <span className="cast-name">{c.name}</span>
                        <span>{c.character}</span>
                      </li>
                    )}
                </ul>
              </div>
        </CastSection>
    )
}

export default Cast;