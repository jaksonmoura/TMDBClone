import React, {useState} from 'react'
import { IMAGE_BASE_URL, PROFILE_SIZE } from "../../config";
import { CastSection } from './Movie.styles'

const Cast = ({cast}) => {
    const [imgLoaded, setImgLoaded] = useState(false)
    if (cast.length === 0) return (<></>)
    return(
        <CastSection>
            <h3>Actors and Actresses</h3>
              <div className="cast-list-wrapper">
                <ul>
                    {cast.map( c => 
                      <li>
                        <div className={`loading-img-box ${(imgLoaded ? "" : "loading")}`}></div>
                        <img onLoad={() => setImgLoaded(true)} src={(c.profile_path ? IMAGE_BASE_URL + PROFILE_SIZE + c.profile_path : "/noprofile.jpg")} alt="" />    
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