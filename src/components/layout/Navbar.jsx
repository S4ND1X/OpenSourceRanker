import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Background>
      <h2>Open Source Ranker</h2>
    </Background>
  );
};

const Background = styled.div`
  margin-bottom: 1rem;
  padding: 0.5rem;

  h2 {
    margin: 0;
    font-size: 1.2rem;
  }
`;

export default Navbar;
