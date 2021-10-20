import { useState, useEffect } from "react";
import styled from "styled-components";
import { rankRepo } from "../lib/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Solid heart
import { faHeart } from "@fortawesome/free-solid-svg-icons";
// Outline heart
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

const RepoCard = ({ repo }) => {
  const { rank, color } = rankRepo(repo);
  const [isLiked, setIsLiked] = useState();

  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("osranker-likes")).includes(
        repo.info.name
      )
    ) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [repo.info.name]);

  const handleLike = () => {
    const includesCurrRepo = JSON.parse(
      localStorage.getItem("osranker-likes")
    ).includes(repo.info.name);

    if (includesCurrRepo) {
      const currLikes = JSON.parse(localStorage.getItem("osranker-likes"));

      // removing the item  from the arr and setting the new value
      localStorage.setItem(
        "osranker-likes",
        JSON.stringify(currLikes.filter((el) => el !== repo.info.name))
      );
      setIsLiked(false);
    } else {
      const currLikes = JSON.parse(localStorage.getItem("osranker-likes"));
      currLikes.push(repo.info.name);

      // removing the item  from the arr and setting the new value
      localStorage.setItem("osranker-likes", JSON.stringify(currLikes));
      setIsLiked(true);
    }
  };

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

      {isLiked ? (
        <FontAwesomeIcon
          icon={faHeart}
          className="like"
          onClick={() => {
            handleLike();
          }}
        />
      ) : (
        <FontAwesomeIcon
          icon={farHeart}
          className="like"
          onClick={() => {
            handleLike();
          }}
        />
      )}
    </Background>
  );
};

const Background = styled.div`
  padding: 1rem 0.4rem;
  border-radius: 5px;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  /* box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px; */

  transition: all 0.2s ease-in-out;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .like {
    align-self: flex-end;
    color: #cc5956;
    cursor: pointer;
  }

  a {
    color: text;
    margin-bottom: 0.5rem;
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
    margin-bottom: 0.4rem;
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
