import { Outlet } from "react-router-dom";
import cv from "../../assets/cv-harrison-fabiano-de-lima.pdf";

const Default = () => {
  return (
    <>
      <header className="header">
        <a href={cv} className="header__button" target="_blank">
          <button className="button">Currículo</button>
        </a>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};

export default Default;
