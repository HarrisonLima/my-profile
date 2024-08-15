import js from "./assets/js-svgrepo-com.svg";
import html from "./assets/html-5-logo-svgrepo-com.svg";
import css from "./assets/css-svgrepo-com.svg";
import sass from "./assets/sass-svgrepo-com.svg";
import figma from "./assets/figma-svgrepo-com.svg";
import git from "./assets/git-svgrepo-com.svg";
import github from "./assets/github-142-svgrepo-com.svg";
import gitlab from "./assets/gitlab-svgrepo-com.svg";
import postman from "./assets/postman-icon-svgrepo-com.svg";
import postgresql from "./assets/postgresql-svgrepo-com.svg";
import react from "./assets/react-svgrepo-com.svg";
import typescript from "./assets/typescript-icon-svgrepo-com.svg";
import node from "./assets/node-js-svgrepo-com.svg";
import vite from "./assets/vite-svgrepo-com.svg";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__brand-box">
        <img src={js} alt="JS's logo" className="skills__brand" />
        <img src={html} alt="HTML's logo" className="skills__brand" />
        <img src={css} alt="CSS's logo" className="skills__brand" />
        <img src={sass} alt="SASS's logo" className="skills__brand" />
        <img src={figma} alt="Figma's logo" className="skills__brand" />
      </div>
      <div className="skills__brand-box">
        <img src={git} alt="Git's logo" className="skills__brand" />
        <img src={github} alt="Github's logo" className="skills__brand" />
        <img src={gitlab} alt="Gitlab's logo" className="skills__brand" />
        <img src={postman} alt="Postman's logo" className="skills__brand" />
        <img src={postgresql} alt="PostgreSQL's logo" className="skills__brand" />
      </div>
      <div className="skills__brand-box">
        <img src={react} alt="React's logo" className="skills__brand" />
        <img src={typescript} alt="Typescript's logo" className="skills__brand" />
        <img src={vite} alt="Vite's logo" className="skills__brand" />
        <img src={node} alt="Node.js's logo" className="skills__brand" />
      </div>
    </div>
  );
};

export default Skills;
