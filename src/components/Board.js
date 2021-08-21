import React from "react";
import styled from "styled-components";
import Box from './Box';

const Container = styled.div`
  width: 800px;
  height: 800px;
  border: 1px solid blue;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;

const Board = () => {
  return(
    <Container>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </Container>
  )
}

export default Board;