import React from "react";
import styled from "styled-components";
import { repos } from "../lib/helpers";
import RepoCard from "./RepoCard";

const ReposList = () => {
  return (
    <Background>
      <h2>Top 10 most popular repos</h2>

      <div className="list">
        {repos.map((repo, index) => (
          <RepoCard repo={repo} key={index} />
        ))}
      </div>
    </Background>
  );
};

const Background = styled.div`
  .list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
  }

  h2 {
    margin-bottom: 1rem;
  }
`;

export default ReposList;
