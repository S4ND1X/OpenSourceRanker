import { useParams } from "react-router";
import { octokit } from "../lib/octokit";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { Container } from "../styles";
import { useEffect, useState } from "react";
import { rankRepo } from "../lib/helpers";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";

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
      });
    };

    fetchRepoData();
  }, [url]);

  return (
    <>
      <Navbar />
      <Container>
        <Background>
          <h1>Score page for:</h1>
          <a href={url}>{url}</a>
          <div className="info">
            <div className="header">
              <div className="titleInfo">
                <h1>{repo.name}</h1>
                <p>"{repo.description}"</p>
                <h3>by {repo.owner}</h3>

                <a href={url}>
                  <img
                    src={repo.image}
                    alt={repo.owner}
                    className="ownerImage"
                  />
                </a>
              </div>
              <h2 style={{ color: repoProperties.color }} className="rank">
                {repoProperties.rank}
              </h2>
            </div>

            <div className="graphs">
              <Bar
                data={{
                  labels: ["Repository Stats"],
                  datasets: [
                    {
                      label: "Open Issues",
                      data: [repo.open_issues_count],
                      backgroundColor: ["rgba(255, 99, 132, 0.2)"],
                      borderColor: ["rgba(255, 99, 132, 1)"],
                      borderWidth: 1,
                    },
                    {
                      label: "Stars",
                      data: [repo.stargazers_count],
                      backgroundColor: ["rgba(54, 162, 235, 0.2)"],
                      borderColor: ["rgba(54, 162, 235, 1)"],
                      borderWidth: 1,
                    },
                    {
                      label: "Forks",
                      data: [repo.forks_count],
                      backgroundColor: ["rgba(75, 192, 192, 0.2)"],
                      borderColor: ["rgba(75, 192, 192, 1)"],
                      borderWidth: 1,
                    },
                  ],
                }}
              />
            </div>

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

  a {
    text-decoration: none;
    outline: none;
    color: inherit;
  }

  /**
    Layout for whole repo info
    contains header, graphs, and repo info
   */
  .info {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    flex-wrap: wrap;
    width: 100%; /* Make it full width */
  }

  /**
    Layout for header content
    Title, description, owner image, rank
   */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: center;
  }

  /**
    Layout for title and description
   */
  .titleInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    padding: 1rem;
    width: 50%;
  }

  .ownerImage {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    padding: 1rem;
  }

  /**
    Layout for rank character
   */
  .rank {
    align-self: center;
    justify-self: flex-end;
    font-size: 14rem;
    width: 50%;
    padding: 1rem;
  }

  /**
  Layout for graphs
 */
  .graphs {
    width: 100%;
  }

  /** 
  Layout for repo info
   */
  .repoInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
    padding: 1rem;
    width: 100%; /* Make it full width */
  }
`;

export default RepoScore;
