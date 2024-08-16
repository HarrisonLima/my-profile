import IProject from "../../interfaces/IProject";

const Popup = ({
  data,
  closePopup,
}: {
  data: IProject;
  closePopup: () => void;
}) => {
  return (
    <div
      className={`popup-box ${data.id !== "" ? "popup-box--visible" : ""}`}
      onClick={closePopup}
    >
      {data.id !== "" && (
        <div className="popup" onClick={(e) => e.stopPropagation()}>
          <h1 className="heading--primary heading--primary--simple-bar">
            {data.nome}
          </h1>
          <div className="popup__content">
            <div className="popup__content__container">
              <h2 className="heading--secondary">Sobre o projeto</h2>
              <p className="text popup__content__about">{data.descricao}</p>
            </div>
            <div className="popup__content__container">
              <h2 className="heading--secondary">Tecnologias</h2>
              <ul className="list">
                {data.tecnologias.map((tecnologia: string, index) => {
                  return (
                    <li className="list__item" key={index}>
                      {tecnologia}
                    </li>
                  );
                })}
              </ul>
            </div>
            {data.aplicacao !== "" && (
              <div className="popup__content__container">
                <h2 className="heading--secondary">Aplicação</h2>
                <a href={data.aplicacao} className="link--url" target="_blank">
                  {data.aplicacao}
                </a>
              </div>
            )}
            {data.prototipo !== "" && (
              <div className="popup__content__container">
                <h2 className="heading--secondary">Design</h2>
                <a href={data.prototipo} className="link--url" target="_blank">{data.prototipo}</a>
              </div>
            )}
            {data.repositorio !== "" && (
              <div className="popup__content__container">
                <h2 className="heading--secondary">Repositório</h2>
                <a href={data.repositorio} className="link--url" target="_blank">
                  {data.repositorio}
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
