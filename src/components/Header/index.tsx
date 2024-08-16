import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cv from "../../assets/cv-harrison-fabiano-de-lima.pdf";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <a href={cv} className="header__button" target="_blank">
        <button className="button">
          <FontAwesomeIcon icon={faFileAlt} />
        </button>
      </a>
    </header>
  );
};

export default Header;
