import js from "./assets/js-svgrepo-com.svg";
import html from "./assets/html-5-logo-svgrepo-com.svg";
import css from "./assets/css-svgrepo-com.svg";
import sass from "./assets/sass-svgrepo-com.svg";
import figma from "./assets/figma-svgrepo-com.svg";
import git from "./assets/git-svgrepo-com.svg";
import github from "./assets/github-svgrepo-com.svg";
import gitlab from "./assets/gitlab-svgrepo-com.svg";
import postman from "./assets/postman-icon-svgrepo-com.svg";
import postgresql from "./assets/postgresql-svgrepo-com.svg";
import react from "./assets/react-svgrepo-com.svg";
import typescript from "./assets/typescript-icon-svgrepo-com.svg";
import node from "./assets/node-js-svgrepo-com.svg";
import vite from "./assets/vite-svgrepo-com.svg";
import modules from "./skills.json";

interface ISkill {
  id: string;
  nome: string;
}
const Skills = () => {
  const cover = (id: string) => {
    switch (id) {
      case "js":
        return js;
      case "html":
        return html;
      case "css":
        return css;
      case "sass":
        return sass;
      case "figma":
        return figma;
      case "git":
        return git;
      case "github":
        return github;
      case "gitlab":
        return gitlab;
      case "postman":
        return postman;
      case "postgresql":
        return postgresql;
      case "react":
        return react;
      case "typescript":
        return typescript;
      case "node":
        return node;
      case "vite":
        return vite;
      default:
        return undefined;
    }
  };

  return (
    <div className="skill-box">
      {modules.map((brand: ISkill, index) => {
        return (
          <div className="skill__card" key={index}>
            <img
              src={cover(brand.id)}
              alt={`${brand.nome} logo`}
              className="skill__card__picture"
            />
            <figcaption className="skill__card__caption">
              {brand.nome}
            </figcaption>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
