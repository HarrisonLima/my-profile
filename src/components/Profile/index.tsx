import {
  faBehanceSquare,
  faFigma,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../../assets/profile.jpg";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__content">
        <header className="profile__content__header">
          <img
            src={profile}
            alt="Profile"
            className="profile__content__header__picture"
          />
          <div className="profile__content__header__title-box">
            <h1 className="heading--primary heading--primary--double-bars">
              Harrison Lima
            </h1>
            <h2 className="heading--secondary">Software Developer</h2>
          </div>
        </header>
        <p className="text profile__content__bio">
          Sou Tecnólogo em Análise e Desenvolvimento de Sistemas pela UMFG, com
          21 anos. Tenho experiência com Figma, Node.js, JavaScript, React e
          TypeScript, focando no aprimoramento contínuo dessas habilidades.
        </p>
        <div className="profile__content__social-medias">
          <a
            href="https://www.linkedin.com/in/harrison-fabiano-de-lima/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="profile__content__social-medias__icon"
            />
          </a>
          <a href="https://www.behance.net/harrisonfabianolima" target="_blank">
            <FontAwesomeIcon
              icon={faBehanceSquare}
              className="profile__content__social-medias__icon"
            />
          </a>
          <a href="https://www.figma.com/@harrisonlima" target="_blank">
            <FontAwesomeIcon
              icon={faFigma}
              className="profile__content__social-medias__icon"
            />
          </a>
          <a href="mailto:harrisonlima92@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="profile__content__social-medias__icon"
            />
          </a>
          <a href="https://github.com/HarrisonLima" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className="profile__content__social-medias__icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
