import styled from "styled-components";

import { rankRepo } from "../lib/helpers";

const RepoCard = ({ repo }) => {
  const { rank, color } = rankRepo(repo);
  return (
    <Background>
      <a href={`https://github.com/${repo.info.author}/${repo.info.name}`}>
        <div className="info">
          <h1>{repo.info.name}</h1>
          <h2 style={{ color: color }}>{rank}</h2>
          {repo.data && <p>"{repo.data.description}"</p>}
          <h3>by {repo.info.author}</h3>
        </div>
      </a>
    </Background>
  );
};

const Background = styled.div`
  padding: 1rem 0.5rem;
  border-radius: 5px;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  transition: all 0.2s ease-in-out;

  a {
    color: text;
  }

  .info {
    text-align: center;
  }

  h1 {
    font-size: 1rem;
    margin: 0 !important;
  }

  h2 {
    font-size: 1rem;
    margin: 0.3rem 0;
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
