import {
  faBehanceSquare,
  faDiscord,
  faFigma,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
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
            <h1 className="heading--primary heading--primary--double-bars">Harrison Lima</h1>
            <h2 className="heading--secondary">Software Developer</h2>
          </div>
        </header>
        <p className="text profile__content__bio">
          I hold a degree in Systems Analysis and Development from UMFG and am
          21 years old. I have experience with Figma, Node.js, JavaScript,
          React, and TypeScript, focusing on the continuous improvement of these
          skills.
        </p>
        <footer className="profile__content__footer">
          <div className="profile__content__social-medias">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="profile__content__social-medias__icon"
            />
            <FontAwesomeIcon
              icon={faBehanceSquare}
              className="profile__content__social-medias__icon"
            />
            <FontAwesomeIcon
              icon={faFigma}
              className="profile__content__social-medias__icon"
            />
            <FontAwesomeIcon
              icon={faDiscord}
              className="profile__content__social-medias__icon"
            />
            <FontAwesomeIcon
              icon={faGithub}
              className="profile__content__social-medias__icon"
              onClick={() => console.log("no")}
            />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Profile;
