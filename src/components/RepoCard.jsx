import { Octokit } from "@octokit/core";
import { useState, useEffect } from "react";
import styled from "styled-components";

const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_API_KEY });

const RepoCard = ({ repo }) => {
  const [repoInfo, setRepoInfo] = useState({
    info: {
      name: repo.split("/").slice(1)[1],
      author: repo.split("/").slice(1)[0],
    },
    data: {},
  });

  console.log(repoInfo);

  useEffect(() => {
    const fetchData = async () => {
      await octokit
        .request(`GET /repos/{owner}/{repo}`, {
          owner: repoInfo.info.author,
          repo: repoInfo.info.name,
        })
        .then((res) =>
          setRepoInfo((prevState) => ({
            info: prevState.info,
            data: res.data,
          }))
        );

      await octokit.request("GET /rate_limit").then((res) => console.log(res));
    };

    fetchData();
  }, []);

  return (
    <Background>
      <a
        href={`https://github.com/${repoInfo.info.author}/${repoInfo.info.name}`}
      >
        <div className="info">
          <h2>{repoInfo.info.name}</h2>
          {repoInfo.data && <p>"{repoInfo.data.description}"</p>}
          <h3>by {repoInfo.info.author}</h3>
        </div>
      </a>
    </Background>
  );
};

const Background = styled.div`
  padding: 1rem 0.5rem;
  border-radius: 5px;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  transition: all 0.2s ease-in-out;

  a {
    color: text;
  }

  .info {
    text-align: center;
  }

  h2 {
    font-size: 1rem;
    margin: 0;
  }

  h3 {
    font-size: 0.9rem;
    font-weight: normal;
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 1rem;
    font-style: italic;
    color: #344455;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export default RepoCard;
