import styled from "styled-components";

export const HeroWrapper = styled.a`
    overflow: hidden;
    width: 100%;
    height: 500px;
    background-color: #fff;
    background-size: cover;
    border-radius: var(--defaultRadius);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;
    background-image: url(${props => props.backgroundImage || ""});
    text-shadow: 0 2px 5px rgba(0,0,0, .3);
    margin-bottom: 100px;

    @media screen and (max-width: 600px){
      height: 50vh;
    }

    &:before{
        content: "";
        width: 100%;
        height: 60%;
        background: linear-gradient(180deg, transparent, rgba(0,0,0, .8));
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1;
    }
`

export const HeroTitle = styled.h1`
  color: #fff;
  margin-bottom: 0;
  z-index: 2;
  @media screen and (max-width: 600px){
    font-size: 3.5rem;
  }
`;

export const HeroOverview = styled.p`
  color: #fff;
  z-index: 2;
  @media screen and (max-width: 600px){
    display: none;
  }
`;