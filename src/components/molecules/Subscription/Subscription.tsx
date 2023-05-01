import { useForm } from "react-hook-form";
import { AnimatePresence } from "framer-motion";
import { SecondaryTitle, Notification } from "components";
import { ButtonForm, Form, StyledSubscription, Text, Input } from "./styles";
import { useToggle } from "store";

export const Subscription = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isOpenNotification, toggleIsOpenNotification] = useToggle();

  const onSubmit = (): void => {
    toggleIsOpenNotification();
    reset();
  };
  return (
    <StyledSubscription>
      <SecondaryTitle value="Subscribe to Newsletter" />
      <Text>
        Be the first to know about new IT books, upcoming releases, exclusive offers and more.
      </Text>

      <Form action="#" onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder="Your email" {...register("name")} />
        <ButtonForm type="submit" whileTap={{ scale: 1.05 }}>
          Subscribe
        </ButtonForm>
      </Form>
      <AnimatePresence>
        {isOpenNotification && (
          <Notification
            value="Subscription is issued!"
            toggleIsOpenNotification={toggleIsOpenNotification}
          />
        )}
      </AnimatePresence>
    </StyledSubscription>
  );
};
