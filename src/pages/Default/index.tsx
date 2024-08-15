import { Outlet } from "react-router-dom";

const Default = () => {
  return (
    <main className="main">
      <Outlet />
    </main>
  );
};

export default Default;
