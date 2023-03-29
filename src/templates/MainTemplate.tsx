import { Footer } from "components/organisms/Footer/Footer";
import { Nav } from "components/organisms/Nav/Nav";
import { Outlet } from "react-router-dom";
import { Container } from "ui/container";

export const MainTemplate = () => {
  return (
    <Container>
      <Nav />
      <div className="flex-grow-1">
        <Outlet />
      </div>

      <Footer />
    </Container>
  );
};
