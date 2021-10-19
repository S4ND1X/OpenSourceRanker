import React from "react";
import { repos } from "../lib/helpers";
import RepoCard from "./RepoCard";

const ReposList = () => {
  return (
    <div>
      <h2>Top 10 most popular repos</h2>

      {repos.map((repo) => (
        <RepoCard repo={repo} />
      ))}
    </div>
  );
};

export default ReposList;
