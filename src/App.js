import React from "react";
import styled from "styled-components";
import RamdomNumber from "./components/RamdomNumber";

const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () =>{
  return (
    <Body>
      <RamdomNumber></RamdomNumber>
    </Body>
    
  );
}

export default App;
