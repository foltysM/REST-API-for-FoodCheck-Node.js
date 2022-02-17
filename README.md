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
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<div>
<h3 align="center">Node.js REST API for Foodcheck</h3>

  <p align="center">
    REST API for <a href="https://github.com/foltysM/foodCheck-Android-Java">Foodcheck</a> project. Provides connection to SQL database via HTTP GET requests. 
    <br />
    <a href="https://github.com/foltysM/REST-API-for-FoodCheck-Node.js"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/foltysM/REST-API-for-FoodCheck-Node.js">View Demo</a>
    ·
    <a href="https://github.com/foltysM/REST-API-for-FoodCheck-Node.js/issues">Report Bug</a>
    ·
    <a href="https://github.com/foltysM/REST-API-for-FoodCheck-Node.js/issues">Request Feature</a>
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
        <li><a href="#installation and usage">Installation and usage</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

API developed as a part of Engineering Thesis on Warsaw University of Technology. Its aim is to provide indirect access to SQL database for app users.

Two built-in endpoints are enough for designed use cases. Standard error codes are implemented into the software.

At the end, it was deployed to Heroku.



<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Node.js](https://nodejs.org/en/)
* [Joi](https://www.npmjs.com/package/joi)
* [compression](https://www.npmjs.com/package/compression)
* [helmet](https://www.npmjs.com/package/helmet)
* [mysql](https://www.npmjs.com/package/mysql)
* [express](https://www.npmjs.com/package/express)

<p align="right">(<a href="#top">back to top</a>)</p> 



<!-- GETTING STARTED -->
## Getting Started

This is how to run the software on your PC. </br >
To get a local copy up and running follow these simple example steps.


### Installation and usage

1. Clone the repo
   ```commandline
   git clone https://github.com/foltysM/REST-API-for-FoodCheck-Node.js
   ```
2. Install all necessary external dependencies, using package.json file.

3. Run program using 'npm start' command.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [x] API connects to SQL database using connection pool
- [x] Two working endpoints
- [x] Precise error handling


See the [open issues](https://github.com/foltysM/REST-API-for-FoodCheck-Node.js/issues) for a full list of proposed features (and known issues).

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



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>




<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#top">back to top</a>)</p>






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/foltysM/REST-API-for-FoodCheck-Node.js.svg?style=for-the-badge
[contributors-url]: https://github.com/foltysM/REST-API-for-FoodCheck-Node.js/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/foltysM/REST-API-for-FoodCheck-Node.js.svg?style=for-the-badge
[forks-url]: https://github.com/foltysM/REST-API-for-FoodCheck-Node.js/network/members
[stars-shield]: https://img.shields.io/github/stars/foltysM/REST-API-for-FoodCheck-Node.js.svg?style=for-the-badge
[stars-url]: https://github.com/foltysM/REST-API-for-FoodCheck-Node.js/stargazers
[issues-shield]: https://img.shields.io/github/issues/foltysM/REST-API-for-FoodCheck-Node.js.svg?style=for-the-badge
[issues-url]: https://github.com/foltysM/REST-API-for-FoodCheck-Node.js/issues
[license-shield]: https://img.shields.io/github/license/foltysM/REST-API-for-FoodCheck-Node.js.svg?style=for-the-badge
[license-url]: https://github.com/foltysM/REST-API-for-FoodCheck-Node.js/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/michalfoltys/
