import styled from "styled-components";
import { Color, Media, S1 } from "ui";

const StyledSubscription = styled.div`
  display: grid;
  padding: 56px 64px;
  height: 288px;
  width: 1120px;
  background: ${Color.PURPLE};

  ${Media.LG} {
    padding: 40px;
  }

  ${Media.MD} {
    padding: 24px;
  }
`;

const Text = styled.p`
  color: ${Color.SECONDARY};

  ${Media.MD} {
  }
`;

const Form = styled.form`
  ${Media.MD} {
  }
`;

const Input = styled.input`
  width: 75%;
  padding: 16px 24px;
  border: none;
  outline: none;
  color: ${Color.SECONDARY};
  background: ${Color.WHITE};

  ${Media.LG} {
    width: 70%;
  }

  ${Media.MD} {
    width: 100%;
  }
`;

const ButtonForm = styled.button`
  width: 25%;
  color: ${Color.WHITE};
  background: ${Color.PRIMARY};
  border: none;
  padding: 16px 40px;
  ${S1}
  cursor: pointer;

  :hover,
  :active {
    background: ${Color.PRIMARYLIGHT};
  }

  :disabled {
    background: ${Color.SECONDARY};
  }

  ${Media.LG} {
    width: 30%;
  }

  ${Media.MD} {
    width: 100%;
  }
`;

export { StyledSubscription, Form, ButtonForm, Text, Input };
