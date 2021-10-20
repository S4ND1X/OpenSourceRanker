export const repos = [
  "/maticzav/nookies",
  "/danielsneijers/react-flash-message",
  "/Bunlong/react-papaparse",
  "/dcampos/nvim-snippy",
  "/sebastiancrossa/root-visualizer",
  "/sebastiancrossa/tradedomainswithme",
  "/sebastiancrossa/visionapp",
  "/MLH-Fellowship/spotify-web-app",
  "/S4ND1X/AlgorithmicClubGDAFullstack",
  "/S4ND1X/RickAndMortyJS",
];

/* function to rank open source friendly repos
 * @param {json} repo - repo object
 * @return {object} - rank and color
 * Score is based on the following criteria:
 * - Has license +5
 * - Has README/Description +10
 * - Has issues +15
 * - Allow forking +10
 * - Has wiki +10
 * - Open issues > 0 +10
 * - Stars > 10 +20
 * - Forks > 10 +20
 * Total score is capped at 100
 */

export const rankRepo = (repo) => {
  let score = 0;
  score += repo.data.license ? 5 : 0;
  score += repo.data.description ? 10 : 0;
  score += repo.data.has_issues ? 15 : 0;
  score += repo.data.allow_forking ? 10 : 0;
  score += repo.data.has_wiki ? 10 : 0;
  score += repo.data.open_issues_count > 0 ? 10 : 0;
  score += repo.data.stargazers_count > 10 ? 20 : 0;
  score += repo.data.forks_count > 10 ? 20 : 0;

  if (score <= 59) {
    return { rank: "F", color: "#CC5956" };
  } else if (score >= 60 && score <= 69) {
    return { rank: "D", color: "#D4A57B" };
  } else if (score >= 70 && score <= 79) {
    return { rank: "C", color: "#BDB078" };
  } else if (score >= 80 && score <= 89) {
    return { rank: "B", color: "#ADD47B" };
  } else if (score >= 90 && score <= 100) {
    return { rank: "A", color: "#6BC791" };
  }
};
