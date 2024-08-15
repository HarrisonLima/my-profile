import modules from "./projects.json";
import calculadora from "./assets/cover-calculadora.svg";
import gopizza from "./assets/cover-cardapio-digital-gopizza.svg";
import natours from "./assets/cover-natours.svg";
import notasRitmo from "./assets/cover-notas-ritmo.svg";
import taskhub from "./assets/cover-taskhub.svg";

const Projects = () => {
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

  return (
    <div className="project-box">
      {modules.map(
        (
          project: {
            id: string;
            nome: string;
            descricao: string;
            tecnologias: string[];
            prototipo: string;
            aplicacao: string;
          },
          index
        ) => {
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
                <ul>
                  {project.tecnologias.map((tecnologia: string, index) => {
                    return <li key={index}>{tecnologia}</li>;
                  })}
                </ul>
                <span className="project__content__link">
                  <p className="link">Learn more</p>
                </span>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Projects;
