import { useParams } from "react-router";
import { octokit } from "../lib/octokit";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { Container } from "../styles";
import { useEffect, useState } from "react";
import { rankRepo } from "../lib/helpers";
import styled from "styled-components";

const RepoScore = () => {
  const { url: encodedUrl } = useParams();
  const url = decodeURIComponent(encodedUrl);
  const [repo, setRepo] = useState({});
  const [repoProperties, setRepoProperties] = useState({
    rank: "N/A",
    color: "#fffff",
  });

  useEffect(() => {
    const fetchRepoData = async () => {
      // Get the repo owner and name from the url
      const repoOwner = url.split("/").slice(1)[2];
      const repoName = url.split("/").slice(1)[3];

      const { data } = await octokit.request("GET /repos/{owner}/{repo}", {
        owner: repoOwner,
        repo: repoName,
      });

      const { rank, color } = rankRepo({ data: data });
      setRepoProperties({ rank, color });
      setRepo({
        name: data.name,
        description: data.description,
        owner: data.owner.login,
        image: data.owner.avatar_url,
        license: data.license,
        has_issues: data.has_issues,
        allow_forking: data.allow_forking,
        has_wiki: data.has_wiki,
        open_issues_count: data.open_issues_count,
        stargazers_count: data.stargazers_count,
        forks_count: data.forks_count,
        license: data.license,
      });

      console.log(repo);
      console.log(data);
    };

    fetchRepoData();
  }, [url]);

  return (
    <>
      <Navbar />
      <Container>
        <Background>
          <h1>Repo score page for:</h1>
          <p>{url}</p>
          <div className="info">
            <h1>{repo.name}</h1>
            <h2 style={{ color: repoProperties.color }}>
              {repoProperties.rank}
            </h2>
            {repo.data && <p>"{repo.description}"</p>}
            <h3>by {repo.owner}</h3>

            <img src={repo.image} alt={repo.owner} className="ownerImage" />
            <div className="repoInfo">
              <p>
                <strong>License:</strong>{" "}
                {repo.license ? repo.license.name : "N/A"}
              </p>
              <p>
                <strong>Has issues:</strong> {repo.has_issues ? "Yes" : "No"}
              </p>
              <p>
                <strong>Allow forking:</strong>{" "}
                {repo.allow_forking ? "Yes" : "No"}
              </p>
              <p>
                <strong>Has wiki:</strong> {repo.has_wiki ? "Yes" : "No"}
              </p>
              <p>
                <strong>Open issues:</strong> {repo.open_issues_count}
              </p>
              <p>
                <strong>Stars:</strong> {repo.stargazers_count}
              </p>
              <p>
                <strong>Forks:</strong> {repo.forks_count}
              </p>
            </div>
          </div>
        </Background>
      </Container>
      <Footer />
    </>
  );
};

const Background = styled.div`
  background-color: #fafafa;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .ownerImage {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 20px;
  }

  /** Repo info card */
  .repoInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
  }
`;

export default RepoScore;
