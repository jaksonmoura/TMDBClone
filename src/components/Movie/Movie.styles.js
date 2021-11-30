import styled from "styled-components";

export const MovieBackdrop = styled.div`
  width: 100%;
  height: 500px;
  border-radius: var(--defaultRadius);
  overflow: hidden;
  background-image: url(${(props) =>
    props.backgroundImage ? props.backgroundImage : ""});
  background-size: cover;
  background-position: center center;
  position: relative;
  z-index: 1;

  &:before {
    content: "";
    width: 100%;
    height: 60%;
    background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.5));
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
`;

export const MovieContainer = styled.div`
  width: clamp(300px, 100%, 1100px);
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

export const MainInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  gap: 16px;
`;

export const PosterSection = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-top: -100%;

  .score {
    width: 64px;
    height: 64px;
    display: inline-flex;
    position: relative;

    .progress-ring__circle {
      transition: 0.5s stroke-dashoffset;
      // axis compensation
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
      stroke: var(--mainColor);
      stroke-dashoffset: 175;
    }

    .score-num {
      width: 100%;
      height: 50%;
      align-self: center;
      position: absolute;
      text-align: center;
      font-size: 2rem;
      font-weight: 500;
      top: calc(50% - 1.5rem);
    }
  }

  .share-btn {
    border: 1px solid var(--lightGrey);
    border-radius: var(--defaultRadius);
    display: inline-flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
    color: var(--textColor);
    height: 44px;
    width: fit-content;
    padding: 0 10px;
    background: #fff;

    &:hover {
      background: var(--mainColor);
      color: #fff;
    }
  }
`;

export const Poster = styled.img`
  width: 100%;
  border-radius: var(--defaultRadius);
  outline: 5px solid white;
  margin-bottom: 1rem;
`;

export const OverviewSection = styled.div`
  width: 100%;
`;

export const OverviewMovieData = styled.div`
  display: inline-flex;
  gap: 30px;
  align-items: center;

  span {
    position: relative;

    &:after {
      content: "";
      width: 6px;
      height: 6px;
      background: #000;
      border-radius: 6px;
      position: absolute;
      right: -16px;
      top: calc(50% - 3px);
      ${"" /* display: inline-block; */}

      @media screen and (max-width: 600px) {
        display: none;
      }
    }
  }

  ul {
    display: inline-flex;
    gap: 16px;
    align-items: center;
    li {
      font-weight: 600;
    }
  }
`;

export const UserActions = styled.ul`
  display: inline-flex;
  flex-direction: column;
  margin-bottom: 1rem;
  gap: 1rem;

  .other-actions{
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
    gap: 1rem;

    li {
      width: calc(25% - 1rem);

      &.double-size {
        flex-grow: 1;
      }

      button {
        width: 44px;
        height: 44px;
        border-radius: 50%;

        &:hover {
          outline: 2px solid var(--mainColor);
        }
      }
    }
  }
`;


export const Details = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;

  h3{
    margin-bottom: 2rem;
    display: inline-flex;
    align-items: center;
    width: 100%;
  }
`;

export const SideInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  li{
    display: flex;
    flex-direction: column;
  }

  label{
    font-weight: 500;
  }
`;

export const SimilarMoviesList = styled.ul`
  
  ul{
    display: flex;
    flex-direction: column;
    li{
      display: grid;
      grid-template-columns: 45% 55%;
    }
  }
`;

export const TabbedSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

export const TrailerSection = styled.div`

`;

export const CastSection = styled.section`
  
  .cast-list-wrapper{
    width: 100%;
    overflow: hidden;
    overflow-x: scroll;
    display: flex;
    gap: 20px;
    scroll-snap-type: x mandatory;
    padding: 4px;
    scroll-padding: 4px;
  }
  
  ul{
    display: inline-flex;
    gap: 2rem;

    li{
      display: flex;
      flex-direction: column;
      overflow: hidden;
      width: 140px;

      img{
        border-radius: var(--defaultRadius);
      }

      span{
        font-weight: 300;
        &.cast-name{
          font-weight: 600;
        }

      }
    }
  }
`;