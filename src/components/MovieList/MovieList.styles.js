import styled from "styled-components";


export const MoviesList = styled.div`
  width: 100%;
  ${'' /* padding: 0 60px; */}
  margin-bottom: 100px;
`;

export const ListTitle = styled.h2`
  margin-bottom: 10px;
  margin-top: 0;
`;

export const MovieGrid = styled.div`
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

      a{
        font-size: 1.8rem;
      }
    }
  }
`;
