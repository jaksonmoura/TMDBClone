import styled from "styled-components";


export const MoviesWrapper = styled.div`
  width: 100%;
  ${'' /* padding: 0 60px; */}
  margin-bottom: 100px;
`;

export const ListTitle = styled.h2`
  margin-bottom: 10px;
  margin-top: 0;
`;

export const Movies = styled.div`
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr))
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

      a{
        font-size: 1.8rem;
      }
    }
  }
`;
