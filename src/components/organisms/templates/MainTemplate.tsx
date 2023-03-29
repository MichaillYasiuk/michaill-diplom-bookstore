import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Nav } from "../Nav/Nav";

export const MainTemplate = () => {
  return (
    <div>
      <Nav />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
