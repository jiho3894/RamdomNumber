import React from "react";
import styled from "styled-components";

function Box({num}) {
  return <Container>{num}</Container>;
}

const Container = styled.div`
  border: 1px solid red;
`;

export default Box;