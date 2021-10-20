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
  // "/MLH-Fellowship/pyre-check",
  // "/suryapratapsinghsuryavanshi/solverjs",
  // "/utkarsh1504/DSA-Java/",
  // "/vinitshahdeo/Quotter/",
  // "/vinitshahdeo/SimpleBio",
  // "/vinitshahdeo/HBD/",
  // "/vinitshahdeo/Hashtagify",
  // "/vinitshahdeo/online-debate-system",
  // "/vinitshahdeo/MiniYouTube",
  // "/vinitshahdeo/TwitterSentimentAnalysis",
  // "/vinitshahdeo/ProgressiveNewsApp",
  // "/vinitshahdeo/Map-of-India/",
  // "/vinitshahdeo/myFaculty/",
  // "/vinitshahdeo/water-monitoring-system/",
  // "/vinitshahdeo/Recruitment-Portal/",
  // "/vinitshahdeo/covid19api/",
  // "/thisisamank/resizrr/",
  // "/bacloud14/Classified-ads-48/",
  // "/rishipurwar1/coding-space",
  // "/dry-python/classes",
  // "/felixfaisal/attack-on-web",
  // "/felixfaisal/formica",
  // "/prafulla-codes/express-autodocs",
  // "/prafulla-codes/express-autodocs",
  // "/vinitshahdeo/inspirational-quotes",
  // "/vinitshahdeo/jobtweets/",
  // "/vinitshahdeo/Email-Signature-Template",
  // "/vinitshahdeo/Hackathon-Timer",
  // "/vinitshahdeo/Cookie-Manager/",
  // "/suryapratapsinghsuryavanshi/NASA-Media-Search",
  // "/Rishabh-malhotraa/caucus/",
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

  if (score <= 49) {
    return { rank: "F", color: "#CC5956" };
  } else if (score >= 50 && score <= 59) {
    return { rank: "D", color: "#D4A57B" };
  } else if (score >= 60 && score <= 69) {
    return { rank: "C", color: "#BDB078" };
  } else if (score >= 70 && score <= 79) {
    return { rank: "B", color: "#ADD47B" };
  } else if (score >= 80 && score <= 100) {
    return { rank: "A", color: "#6BC791" };
  }
};

export const sort = (arr, type = "asc") => {
  const sortedArr = arr.sort((a, b) => {
    const rankedRepoA = rankRepo(a).rank.toLowerCase().charCodeAt(0);
    const rankedRepoB = rankRepo(b).rank.toLowerCase().charCodeAt(0);

    if (type === "asc") {
      if (rankedRepoA > rankedRepoB) return 1;
      else return -1;
    } else {
      if (rankedRepoA < rankedRepoB) return 1;
      else return -1;
    }
  });

  return sortedArr;
};
