import styled from "styled-components";
var sideMax = 270;


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
  z-index: 0;

  img{
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 800px){
    display: none;
  }

  &:after{
      content: "";
      width: 50%;
      height: 100%;
      background: linear-gradient(270deg, transparent 0%, #ccc 50%, transparent 100%);
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -1;
      animation: loadingImg 3s;
      animation-iteration-count: infinite;
  }

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

export const Title = styled.h1`
  display: ${(props => props.mobile ? "none" : "block")};

  @media screen and (max-width: 800px){
    display: ${(props => !props.mobile ? "none" : "block")};
    text-align: center;
  }
`;

export const MovieContainer = styled.div`
  width: clamp(300px, 100%, 1100px);
  margin: 0 auto 50px auto;
  position: relative;
  z-index: 2;
`;

export const MainInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, ${sideMax}px) minmax(auto, 75%);
  gap: 1.6rem;

  @media screen and (max-width: 800px){
    grid-template-columns: 1fr;
  }
`;

export const PosterSection = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-top: -100%;

  @media screen and (max-width: 800px){
    margin-top: 0;
    align-items: center;

    ul{
      max-width: 270px;
    }
  }

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

      &.nr{
        stroke: #ccc;
      }
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
  height: 100%;
  max-height: 405px;
  border-radius: var(--defaultRadius);
  outline: 5px solid white;
  margin-bottom: 1rem;
  max-width: ${sideMax}px;
  align-self: center;const [imgLoaded, setImgLoaded] = useState(false)

  @media screen and (max-width: 600px){
    max-width: 200px;
  }
`;

export const OverviewSection = styled.div`
  width: 100%;
  @media screen and (max-width: 800px){
    display: flex;
    flex-direction: column;
    h1{
      text-align: center;
    }
  }
`;

export const OverviewMovieData = styled.div`
  display: inline-flex;
  gap: 0 30px;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 800px){
    justify-content: center;


    ul{
      justify-content: center;
      gap: 4px 16px !important;
    }
  }

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

      @media screen and (max-width: 800px) {
        display: none;
      }
    }
  }

  ul {
    display: inline-flex;
    gap: 16px;
    flex-wrap: wrap;
    align-items: center;
    flex-wrap: wrap;
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
  width: 100%;

  @media screen and (max-width: 800px){
    padding-bottom: 1rem;
    margin-bottom: 0;
    border-bottom: 1px solid var(--lightGrey);
  }

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
      width: auto;

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
  grid-template-columns: ${sideMax}px calc(100% - 286px);
  gap: 1.6rem;

  h3{
    margin-bottom: 2rem;
    display: inline-flex;
    align-items: center;
    width: 100%;
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: 100%;
    grid-template-rows: auto;
  }
`;

export const SideInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem; 
`;

export const InfoList = styled.ul`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media screen and (max-width: 800px) {
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media screen and (max-width: 992px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
  }

  li{
    display: flex;
    flex-direction: column;

    p{
      margin: 0;
    }
  }

  label{
    font-weight: 600;
  }
`;

export const SimilarMoviesList = styled.div`
  width: 100%;
  overflow: hidden;
  
  ul{
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (max-width: 992px) {
      flex-direction: row;
      width: 100%;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      gap: 20px;
      scroll-padding: 4px;

      li{
        width: 210px;
        display: flex !important;
        flex-direction: column;

      }
    }

    li{
      display: grid;
      grid-template-columns: 45% 55%;
      max-width: 270px;
      gap: 6px;
      border-radius: var(--defaultRadius);

      &:hover{
        background: var(--lightGrey);
      }

      &>a{
          display: contents;
      }

      .similar-data{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: .4rem;

        a{
          color: var(--textColor);
          font-weight: 600;

          span{
            font-weight: 400;
          }
        }
      }

      .score {
        width: 40px;
        height: 40px;
        display: inline-flex;
        position: relative;

        .progress-ring__circle {
          transition: 0.5s stroke-dashoffset;
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
          font-size: 1.6rem;
          font-weight: 500;
          top: calc(50% - 1.1rem);
        }
      }

      img{
        width: 100%;
        border-radius: var(--defaultRadius);
      }
    }
  }
  
`;

export const SimilarMoviesListWrapper = styled.div`
  width: 100%;
  @media screen and (max-width: 992px){
    overflow-y: hidden;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-padding: 4px;
    ul{
      width: fit-content;
      flex-direction: row;

      li{
        width: 140px;

        .similar-data{
          flex-direction: column-reverse;
          position: relative;

          a{
            padding-top: 14px;
          }
        }

        .score{
          position: absolute;
          background: #fff;
          top: -26px;
          left: 4px;
          z-index: 5;
          border-radius: 50%;
          padding-bottom: 2px;
          ${'' /* outline: 2px solid #fff; */}
          
        }
      }
    }
  }
`;

export const TabbedSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  width: 100%;

  .aspect-ration-trailer{
    aspect-ratio: 16 / 9;

  }

  iframe{
    width: 100%;
    height: 100%;
  }
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

export const MovieMediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(1fr, 200px));
  gap: 1rem;
`;

export const MovieMediaThumb = styled.a`
  width: 100%;
  height: 100px;
  border-radius: 6px;
  overflow: hidden;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;