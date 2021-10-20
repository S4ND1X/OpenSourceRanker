import React from "react";
import styled from "styled-components";
import SearchBar from "../SearchBar";

const Navbar = () => {
  return (
    <Background>
      <h2>Open Source Ranker</h2>
      <SearchBar />
    </Background>
  );
};

const Background = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1rem;
  padding: 1rem;

  h2 {
    margin: 0;
    font-size: 1.2rem;
  }
`;

export default Navbar;
