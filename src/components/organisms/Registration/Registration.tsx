import { Outlet } from "react-router-dom";
import { ROUTE } from "routes";
import { Button, ButtonWrapper, StyledRegistration } from "./styles";
import { RegistrationLink } from "components";

export const Registration = () => {
  return (
    <StyledRegistration>
      <ButtonWrapper>
        <RegistrationLink to={ROUTE.SIGN_IN}>
          <Button>Sign in</Button>
        </RegistrationLink>

        <RegistrationLink to={ROUTE.SIGN_UP}>
          <Button>Sign up</Button>
        </RegistrationLink>
      </ButtonWrapper>

      <Outlet />
    </StyledRegistration>
  );
};
