import styled from "styled-components";

export const MovieBackdrop = styled.div`
    width: 100%;
    height: 500px;
    border-radius: var(--defaultRadius);
    overflow: hidden;
    background-image: url(${props => props.backgroundImage ? props.backgroundImage : ""});
    background-size: cover;
    background-position: center center;
    position: relative;
    z-index: 1;

    &:before{
        content: "";
        width: 100%;
        height: 60%;
        background: linear-gradient(180deg, transparent, rgba(0,0,0, .5));
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1;
    }
`

export const MovieContainer = styled.div`
  width: clamp(300px, 100%, 1100px);
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

export const MainInfo = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  gap: 16px;
`;

export const PosterSection = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-top: -100%;
`;

export const Poster = styled.img`
  width: 100%;
  border-radius: var(--defaultRadius);
  outline: 5px solid white;
`;

export const OverviewSection = styled.div`
  width: 100%;

`;