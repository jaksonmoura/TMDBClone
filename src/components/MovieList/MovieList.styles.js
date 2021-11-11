import styled from "styled-components";


export const MoviesList = styled.div`
  width: 100%;
  ${'' /* padding: 0 60px; */}
`;

export const ListTitle = styled.h2`
  margin-bottom: 10px;
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

