import { useEffect, useState } from "react";
import { Octokit } from "@octokit/core";
import styled from "styled-components";
import { repos } from "../lib/helpers";
import RepoCard from "./RepoCard";
import SearchBar from "./SearchBar";

const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_API_KEY });

const ReposList = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [reposData, setReposData] = useState([]);
  const handleSearchChange = (e) => setSearch(e.target.value);

  // Update the results every time a user searches for something
  useEffect(() => {
    const fetchReposData = async () => {
      await Promise.all(
        repos.map(async (repo) => {
          const repoName = repo.split("/").slice(1)[1];
          const repoOwner = repo.split("/").slice(1)[0];

          await octokit
            .request(`GET /repos/{owner}/{repo}`, {
              owner: repoOwner,
              repo: repoName,
            })
            .then((res) => {
              setReposData((prevState) => [
                ...prevState,
                {
                  info: {
                    name: repoName,
                    author: repoOwner,
                  },
                  data: res.data,
                },
              ]);

              setFilteredData((prevState) => [
                ...prevState,
                {
                  info: {
                    name: repoName,
                    author: repoOwner,
                  },
                  data: res.data,
                },
              ]);
            });
        })
      );
    };

    fetchReposData();
  }, []);

  useEffect(() => {
    if (filteredData.length > 0) {
      setFilteredData(() => {
        const filteredRes = reposData.filter((repo) => {
          const cleanSearch = search.toLowerCase();

          if (
            repo.info.name.toLowerCase().includes(cleanSearch) ||
            repo.info.author.toLowerCase().includes(cleanSearch)
          )
            return repo;
        });

        return filteredRes;
      });
    }
  }, [search]);

  return (
    <Background>
      <div className="search-container">
        <SearchBar search={search} handleChange={handleSearchChange} />
      </div>

      <div className="list">
        {filteredData.map((repo, index) => (
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
