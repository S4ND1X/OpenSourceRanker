import { useEffect, useState } from "react";
import { Octokit } from "@octokit/core";
import styled from "styled-components";
import { repos, sort } from "../lib/helpers";
import RepoCard from "./RepoCard";
import SearchBar from "./SearchBar";

const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_API_KEY });

const ReposList = () => {
  const [search, setSearch] = useState("");
  const [localSearch, setLocalSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [reposData, setReposData] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [sortVals] = useState([
    {
      label: "Best to worst",
      value: "desc",
    },
    {
      label: "Worst to best",
      value: "asc",
    },
  ]);
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
        // eslint-disable-next-line
        const filteredRes = reposData.filter((repo) => {
          const cleanSearch = localSearch.toLowerCase().trim();

          if (
            repo.info.name.toLowerCase().includes(cleanSearch) ||
            repo.info.author.toLowerCase().includes(cleanSearch)
          )
            return repo;
        });

        return filteredRes;
      });
    }
  }, [localSearch, reposData, filteredData.length]);

  // Sort
  useEffect(() => {
    setFilteredData((prevState) => {
      return sort(prevState, selectedSort);
    });
  }, [selectedSort]);

  return (
    <Background>
      <div className="search-container">
        <SearchBar search={search} handleChange={handleSearchChange} />
        <label for="sort">Sort repos:</label>
        <select
          name="sort"
          id="sort"
          value={selectedSort}
          onChange={(e) => setSelectedSort(e.target.value)}
        >
          <option value="" selected disabled hidden>
            Choose here
          </option>
          {sortVals.map((sortItem) => (
            <option
              value={sortItem.value}
              // selected={sortItem.value === selectedSort && "selected"}
            >
              {sortItem.label}
            </option>
          ))}
        </select>
      </div>

      <input
        type="text"
        className="local-search"
        value={localSearch}
        placeholder="Filter through the list..."
        onChange={(e) => setLocalSearch(e.target.value)}
      />

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
    margin-bottom: 1rem;

    label {
      margin-right: 0.5rem;
    }
  }

  .list {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.8rem;
  }

  h2 {
    margin-bottom: 0.5rem;
  }

  .local-search {
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem;

    border: none;
    border-bottom: 2px solid black;
  }

  /* Small screen devices (600px and above) */
  @media only screen and (min-width: 600px) {
    .list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1.2rem;
    }

    h2 {
      margin-bottom: 0.6rem;
    }
  }

  /* Medium screen devices (768px and above) */
  @media only screen and (min-width: 768px) {
    .list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 1.5rem;
    }

    h2 {
      margin-bottom: 0.8rem;
    }
  }

  /* Extra big screen devices (1200px and above) */
  @media only screen and (min-width: 1200px) {
    .list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 2rem;
    }

    h2 {
      margin-bottom: 1rem;
    }
  }
`;

export default ReposList;
