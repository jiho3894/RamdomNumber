import React from "react";
import styled from "styled-components";

const Box = ({num, handleClick}) =>{
  return <Container onClick={() => handleClick(num)}>{num !==0 ? num : null}</Container>;
}

const Container = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 600;
`;

export default Box;