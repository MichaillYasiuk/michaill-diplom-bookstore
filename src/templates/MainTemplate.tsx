import { Footer } from "components/organisms/Footer/Footer";
import { Header } from "components/organisms/Header/Header";
import { Outlet } from "react-router-dom";
import { Container } from "ui/container";

export const MainTemplate = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};
