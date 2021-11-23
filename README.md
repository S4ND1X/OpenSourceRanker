<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url] [![MIT License][license-shield]][license-url]

[![Netlify Status](https://api.netlify.com/api/v1/badges/0e2ee222-c140-423f-91cb-8aab53de95b2/deploy-status)](https://app.netlify.com/sites/opensourceranker/deploys)

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/S4ND1X/OpenSourceRanker">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Open Source Ranker</h3>

  <p align="center">
    Website for ranking open source projects
    <br />
    <a href="https://github.com/S4ND1X/OpenSourceRanker"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://opensourceranker.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/S4ND1X/OpenSourceRanker/issues">Report Bug</a>
    ·
    <a href="https://github.com/S4ND1X/OpenSourceRanker/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

* Shows open source repositories with a rating from A to Z (best to worst) based on how easy it is to contribute.
* Gives detailed information about repositories such as number of open issues, forks, stars, author, etc. 

[![Main][product-screenshot]](https://opensourceranker.netlify.app/)

[![Repo Info][product-screenshot2]](https://opensourceranker.netlify.app/)

<p align="right">(<a href="#top">back to top</a>)</p>


### Built With

* [React.js](https://reactjs.org/)
* [Chart.js](https://chartjs.org/)
* [React Toastify](https://www.npmjs.com/package/react-toastify)
* [Octokit.js](https://octokit.github.io/rest.js/v18)
* [IsGithubUrl](https://github.com/alferov/is-github-url)
* [Styled Components](https://styled-components.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
To get a local copy up and running follow these simple steps.

### Prerequisites

To start you need to do the following installations
* Node JS
  ```sh
  sudo apt install nodejs
  ```

* npm
  ```sh
  npm install npm@latest -g
  ```
<p align="right">(<a href="#top">back to top</a>)</p>

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/S4ND1X/OpenSourceRanker.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your Github Developer Token in a new `.env` file
   ```js
   REACT_APP_GITHUB_API_KEY= 'ENTER YOUR TOKEN';
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Jorge Sanchez- [@S4ND1X](https://github.com/S4ND1X) 

Sebastián Crossa - [@sebastiancrossa](https://github.com/sebastiancrossa)

Marlene Harms - [@marleneharms](https://github.com/marleneharms)


Project Link: [https://github.com/S4ND1X/OpenSourceRanker](https://github.com/S4ND1X/OpenSourceRanker)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/S4ND1X/OpenSourceRanker.svg?style=for-the-badge
[contributors-url]: https://github.com/S4ND1X/OpenSourceRanker/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/S4ND1X/OpenSourceRanker.svg?style=for-the-badge
[forks-url]: https://github.com/S4ND1X/OpenSourceRanker/network/members
[stars-shield]: https://img.shields.io/github/stars/S4ND1X/OpenSourceRanker.svg?style=for-the-badge
[stars-url]: https://github.com/S4ND1X/OpenSourceRanker/stargazers
[issues-shield]: https://img.shields.io/github/issues/S4ND1X/OpenSourceRanker.svg?style=for-the-badge
[issues-url]: https://github.com/S4ND1X/OpenSourceRanker/issues
[license-shield]: https://img.shields.io/github/license/S4ND1X/OpenSourceRanker.svg?style=for-the-badge
[license-url]: https://github.com/S4ND1X/OpenSourceRanker/blob/master/LICENSE.txt
[product-screenshot]: images/main.png
[product-screenshot2]: images/repoinfo.png
