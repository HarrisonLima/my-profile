import cv from "../../assets/cv-harrison-fabiano-de-lima.pdf";
import cv_en from "../../assets/cv-harrison-fabiano-de-lima-en.pdf";

const Footer = () => {
  return (
    <footer className="footer section__footer">
      <ul className="footer__list">
        <li>
          <a href={cv} className="link--url" target="_blank">
            Currículo (pt-br)
          </a>
        </li>
        <li>
          <a href={cv_en} className="link--url" target="_blank">
            Currículo (en)
          </a>
        </li>
        <li>
          <a href="#perfil" className="link--url">
            Perfil
          </a>
        </li>
        <li>
          <a href="#projetos" className="link--url">
            Projetos
          </a>
        </li>
        <li>
          <a href="#skills" className="link--url">
            Skills
          </a>
        </li>
      </ul>
      <h2 className="heading--secondary"></h2>
      <div className="footer__copy">
        &copy; 2024{" "}
        <a href="#perfil">
          <b>Harrison Lima.</b>
        </a>{" "}
        Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
