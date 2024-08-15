import Profile from "../../Profile";
import Projects from "../../Projects";
import Skills from "../../Skills";

const ModalHome = () => {
  return (
    <>
      <section className="section__profile">
        <Profile />
      </section>
      <section className="section__skills">
        <h3 className="heading--tertiary">Skills</h3>
        <Skills />
      </section>
      <section>
        <h3 className="heading--tertiary">Projects</h3>
        <Projects />
      </section>
    </>
  );
};

export default ModalHome;
