import { useState } from "react";
import styled from "styled-components";
import { repos } from "../lib/helpers";
import RepoCard from "./RepoCard";
import SearchBar from "./SearchBar";

const ReposList = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => setSearch(e.target.value);

  return (
    <Background>
      <div className="search-container">
        <SearchBar search={search} handleChange={handleSearchChange} />
      </div>

      <div className="list">
        {repos.map((repo, index) => (
          <RepoCard repo={repo} key={index} />
        ))}
      </div>
    </Background>
  );
};

const Background = styled.div`
  .search-container {
    text-align: center;
  }

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
