import { useParams } from "react-router";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { Container } from "../styles";
import { Octokit } from "@octokit/core";
import { useEffect } from "react";

const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_API_KEY });

const RepoScore = () => {
  const { url: encodedUrl } = useParams();
  const url = decodeURIComponent(encodedUrl);

  useEffect(() => {
    const fetchRepoData = async () => {
      // Get the repo owner and name from the url
      const repoOwner = url.split("/").slice(1)[3];
      const repoName = url.split("/").slice(1)[4];
      console.log(process.env.REACT_APP_GITHUB_API_KEY);

      await octokit
        .request(`GET /repos/{owner}/{repo}`, {
          owner: repoOwner,
          repo: repoName,
        })
        .then((res) => {
          console.log(res);
        });
    };
    fetchRepoData();
  }, [url]);

  return (
    <>
      <Navbar />
      <Container>
        <h1>Repo score page for:</h1>
        <p>{url}</p>
        
      </Container>
      <Footer />
    </>
  );
};

export default RepoScore;
