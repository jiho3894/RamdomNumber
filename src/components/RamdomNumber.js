import React from "react";
import styled from "styled-components";
import Board from './Board';
import { useState } from "react";

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

let array = [];
for(let i = 1; i<=25; i++) {
  array.push(i);
}

const handleClick = (num) => {
  
}

const RamdomNumber = () => {
  const [numbers, setNumbers] = useState(array);
  const [gameStart, setGameStart] = useState(false);
  const [current, setCurrent] = useState(1);
  const [timeDelay, setTimeDelay] = useState(0);

  return (
    <Body>
      <h1>랜덤숫자 맞추기</h1>
      <Container>
        <Board numbers={numbers}></Board>
      </Container>
    </Body>
  )
}

export default RamdomNumber;