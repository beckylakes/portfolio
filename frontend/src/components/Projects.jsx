import { useState } from "react";
import PortfolioCard from "./PortfolioCard";
import ncnews from "../images/backend.png";
import fenews from "../images/frontend.png";
import leap from "../images/leap.png";
import portfolio from "../images/portfolio.png";
import eventure from "../images/eventure.png";

const Projects = () => {
    const [portfolioList] = useState([
        {
          name: "Northcoders News API ",
          type: "Back-End",
          img_url: ncnews,
          githubLink1: "https://github.com/beckylakes/be-nc-news",
          liveDemoLink: "https://nc-news-zzyy.onrender.com/api",
          description:
            "The Northcoders News API is a RESTful backend service that allows users to access/interact with data concerning articles, comments, topics, and more!",
        },
        {
          name: "Northcoders News Frontend",
          type: "Front-End",
          img_url: fenews,
          githubLink1: "https://github.com/beckylakes/fe-nc-news",
          liveDemoLink: "https://65f4790db1626700929c9ac6--becky-front-end-project.netlify.app/",
          description:
            "A Reddit-like message board web-app, built mobile-first with React.js (JavaScript), HTML5 and CSS. It provides users with the ability to interact with the back-end News API via a user-friendly interface.",
        },
        {
          name: "LEAP",
          type: "Full-Stack",
          img_url: leap,
          githubLink1: "https://github.com/jamie-appleyard/leap-backend",
          githubLink2: "https://github.com/swlho/leap-fe",
          liveDemoLink: "https://leap-lilac.vercel.app/",
          description:
            "Built as a Progressive Web App (PWA). An AI-powered learning platform to help you leap before you learn. Get up to speed with any topic in one big LEAP.",
        },
        {
          name: "Eventure",
          type: "Full-Stack",
          img_url: eventure,
          githubLink1: "https://github.com/beckylakes/lp-events-platform",
          liveDemoLink: "https://eventure-lp.netlify.app/home",
          description:
            "Eventure is an events platform created to allow music lovers to discover global or local events, and also provides a platform for event organisers to share their events with the community. Built using Authorization/Authentication Routing.",
        },
        {
          name: "Portfolio Website",
          type: "Front-End",
          img_url: portfolio,
          githubLink1: "https://github.com/beckylakes/portfolio",
          description:
            "My first attempt at a single-page web application design using React.js. With clarity of design in mind, chose to follow a minimalist approach and adopted a warm tone colour palette to enhance viewability (softer on the eyes).",
        },
      ]);
    
      return (
        <div id="work">
          <h1>My Projects.</h1>
          <ul className="portfolio-list">
            {portfolioList.map((portfolioItem) => {
              return (
                <PortfolioCard
                  key={portfolioItem.name}
                  portfolioItem={portfolioItem}
                />
              );
            })}
          </ul>
        </div>
      );
    };
export default Projects;
