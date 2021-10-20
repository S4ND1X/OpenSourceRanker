import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Background>
      <a href="./">
        <h2>Open Source Ranker</h2>
      </a>
    </Background>
  );
};

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 1rem;
  padding: 1rem;

  h2 {
    margin: 0;
    font-size: 1.2rem;
  }

  /* Medium screen devices (768px and above) */
  @media only screen and (min-width: 768px) {
    h2 {
      font-size: 1.4rem;
    }
  }

  /* Extra big screen devices (1200px and above) */
  @media only screen and (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 1rem;
    padding: 1rem;

    h2 {
      font-size: 1.5rem;
    }
  }
`;

export default Navbar;
