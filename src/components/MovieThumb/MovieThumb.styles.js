import styled from "styled-components";

export const Thumb = styled.a`
  display:inline-flex;
  flex-direction: column;
  width: 100%;
  scroll-snap-align: start;
  color: var(--textColor);
  position: relative;

  img{
    height: auto;
    transition: opacity 1s ease-in-out;
    opacity: 1;
    display: block;
  }

  &.loading{
    img{
      display: none;
      opacity: 0;
    }
    
  }


  &:visited{
    color: var(--textColor);
  }

  &:hover{
      img{
          outline: 4px solid black;
          ${'' /* box-shadow: 0 10px 25px rgba(5,12,44, .4); */}
      }
  }
`;

export const ThumbImg = styled.img`
  width: ${props => props.fullWidth ? "100%" : "clamp(140px, 30vw, 190px)"};
  background-size: cover;
  border-radius: var(--defaultRadius);
  margin-bottom: 4px;
`;

export const Title = styled.h3`
  margin: 0;
`;

export const ReleaseDate = styled.span`
  font-size: 1.3rem;
  color: var(--textColor);
`;