import styled from "styled-components";

export const Thumb = styled.a`
  display:inline-flex;
  flex-direction: column;
  width: 100%;
  scroll-snap-align: start;
  color: var(--textColor);

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
  width: ${props => props.fullWidth ? "100%" : "clamp(95px, 190px, 220px)"};
  background-size: cover;
  border-radius: var(--defaultRadius);
  margin-bottom: 4px;
  @media screen and (max-width: 600px){
    max-width: 150px;
  }
`;

export const Title = styled.h3`
  margin: 0;
`;

export const ReleaseDate = styled.span`
  font-size: 1.3rem;
  color: var(--textColor);
`;