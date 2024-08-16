import modules from "./projects.json";
import calculadora from "./assets/cover-calculadora.svg";
import gopizza from "./assets/cover-cardapio-digital-gopizza.svg";
import natours from "./assets/cover-natours.svg";
import notasRitmo from "./assets/cover-notas-ritmo.svg";
import taskhub from "./assets/cover-taskhub.svg";
import Popup from "./../Popup/index";
import IProject from "../../interfaces/IProject";
import { useState } from "react";

const Projects = () => {
  const initialProject = {
    id: "",
    nome: "",
    descricao: "",
    tecnologias: [""],
    prototipo: "",
    aplicacao: "",
    repositorio: "",
  };
  const [project, setProject] = useState<IProject>(initialProject);

  const cover = (project: string) => {
    switch (project) {
      case "calculadora":
        return calculadora;
      case "cardapio-digital-gopizza":
        return gopizza;
      case "natours":
        return natours;
      case "notas-ritmo":
        return notasRitmo;
      case "taskhub":
        return taskhub;
      default:
        return undefined;
    }
  };

  const closePopup = () => {
    setProject(initialProject);
  };

  return (
    <>
      <div className="project-box">
        {modules.map((project: IProject, index) => {
          return (
            <div key={index} className="project">
              <div className="project__content">
                <header className="project__content__header">
                  <img
                    src={cover(project.id)}
                    alt={`Project cover: ${project.nome}`}
                    className="project__content__cover"
                  />
                  <h2 className="heading--secondary project__content__title">
                    {project.nome}
                  </h2>
                </header>
                <ul className="list">
                  {project.tecnologias.map((tecnologia: string, index) => {
                    return (
                      <li key={index} className="list__item">
                        {tecnologia}
                      </li>
                    );
                  })}
                </ul>
                <span className="project__content__link">
                  <p className="link" onClick={() => setProject(project)}>
                    Learn more
                  </p>
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <Popup data={project} closePopup={closePopup} />
    </>
  );
};

export default Projects;
