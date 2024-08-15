import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Default from "../pages/Default";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Rotas;
