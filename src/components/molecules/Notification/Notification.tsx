import { Portal } from "components";
import { PortalAnswer } from "../Portal/Portal";
import { StyledNotification, Message } from "./styles";

interface Props {
  value: string;
  toggleIsOpenNotification: () => void;
}

export const Notification = ({ value, toggleIsOpenNotification }: Props) => {
  setTimeout(() => {
    toggleIsOpenNotification();
  }, 3000);

  return (
    <Portal target={PortalAnswer.REWIEWS}>
      <StyledNotification
        animate={{ x: 0 }}
        initial={{ x: 2500 }}
        exit={{ x: 2500 }}
        transition={{ duration: 1 }}
      >
        <Message>{value}</Message>
      </StyledNotification>
    </Portal>
  );
};
