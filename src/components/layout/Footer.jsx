import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Background>
      <a href="https://github.com/S4ND1X/OpenSourceRanker">Github</a>
    </Background>
  );
};

const Background = styled.div`
  padding: 1rem;
  text-align: center;

  a {
    color: black;
    text-decoration: underline;
  }
`;

export default Footer;
