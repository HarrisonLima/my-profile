import { Outlet } from "react-router-dom";
import Header from "./../../components/Header/index";
import Footer from "../../components/Footer";

const Default = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Default;
