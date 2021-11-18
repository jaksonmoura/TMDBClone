import styled from "styled-components";


export const MoviesWrapper = styled.div`
  width: 100%;
  margin-bottom: 100px;
  @media screen and (max-width: 600px){
    margin-bottom: 50px;
  }
`;

export const ListTitle = styled.h2`
  margin-bottom: 10px;
  margin-top: 0;
`;

export const Movies = styled.div`
  width: 100%;
  overflow: hidden;
  overflow-x: scroll;
  display: flex;
  gap: 20px;
  scroll-snap-type: x mandatory;
  padding: 4px;
  scroll-padding: 4px;
`;


export const ListHeader = styled.div`
  display: inline-flex;
  width: 100%;
  align-items: center;
  gap: 20px;

  ul{
    display: inline-flex;
    gap: 20px;
    align-items: center;
    margin-bottom: 10px;
    li{
      position: relative;

      &[aria-selected="true"]{

        a{
          font-weight: 600;
        }

        &:before{
          position: absolute;
          content: "";
          width: 100%;
          height: 4px;
          left: 0;
          bottom: -4px;
          background: var(--mainColor);
        }
      }
      a{
        color: #333;
        font-size: 1.8rem;
      }
    }
  }
`;
