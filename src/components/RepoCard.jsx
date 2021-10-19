import { Octokit } from "@octokit/core";
import { useState, useEffect } from "react";

const octokit = new Octokit({ auth: process.env.GITHUB_API_KEY });

const RepoCard = ({ repo }) => {
  const [repoInfo] = useState(repo.split("/").slice(1));

  useEffect(() => {
    console.log(repoInfo);

    const fetchData = async () => {
      const res = await octokit
        .request(`GET /repos/{owner}/{repo}`, {
          owner: repoInfo[0],
          repo: repoInfo[1],
        })
        .then((res) => res.data);

      console.log(res);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>This is a repo card</h2>
    </div>
  );
};

export default RepoCard;
