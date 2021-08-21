import React from "react";
import styled from "styled-components";
import Board from './Board';

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 800px;
  height: 800px;
  background-color: gray;
`;

const RamdomNumber = () => {
  return (
    <Body>
      <h1>랜덤숫자 맞추기</h1>
      <Container>
        <Board></Board>
      </Container>
    </Body>
  )
}

export default RamdomNumber;