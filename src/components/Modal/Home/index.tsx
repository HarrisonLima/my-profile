import Profile from "../../Profile";
import Projects from "../../Projects";
import Skills from "../../Skills";

const ModalHome = () => {
  return (
    <>
      <section className="section__profile">
        <Profile />
      </section>
      <section className="section section__skills">
        <h3 className="heading--primary heading--primary--simple-bar">Skills</h3>
        <Skills />
      </section>
      <section className="section">
        <h3 className="heading--primary heading--primary--simple-bar">Projetos</h3>
        <Projects />
      </section>
    </>
  );
};

export default ModalHome;
