import { Portal } from "components";
import { StyledNotification, Message } from "./styles";
import { PortalAnswer } from "../Portal/Portal";

interface NotificationProps {
  value: string;
  toggleIsOpenNotification: () => void;
}

export const Notification = ({ value, toggleIsOpenNotification }: NotificationProps) => {
  setTimeout(() => {
    toggleIsOpenNotification();
  }, 2000);

  return (
    <Portal target={PortalAnswer.REWIEWS}>
      <StyledNotification
        animate={{ y: 0 }}
        initial={{ y: 2500 }}
        exit={{ y: -2500 }}
        transition={{ duration: 1 }}
      >
        <Message>{value}</Message>
      </StyledNotification>
    </Portal>
  );
};
