import { Footer, Header } from "components";
import { Outlet } from "react-router-dom";
import { Container } from "ui";
import { StyledMainTemplate } from "./styles";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </StyledMainTemplate>
  );
};
