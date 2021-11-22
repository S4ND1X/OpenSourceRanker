import { useParams } from "react-router";
import { octokit } from "../lib/octokit";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { Container } from "../styles";
import { useEffect } from "react";

const RepoScore = () => {
  const { url: encodedUrl } = useParams();
  const url = decodeURIComponent(encodedUrl);

  useEffect(() => {
    const fetchRepoData = async () => {
      // Get the repo owner and name from the url
      const repoOwner = url.split("/").slice(1)[2];
      const repoName = url.split("/").slice(1)[3];

      const { data } = await octokit.request("GET /repos/{owner}/{repo}", {
        owner: repoOwner,
        repo: repoName,
      });

      console.log(data);
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
