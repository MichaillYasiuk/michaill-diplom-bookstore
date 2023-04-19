import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import { StyledSubscription, ButtonForm, Input, Text } from "./styles";
import { useToggle } from "store";
import { SecondaryTitle } from "components";

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
        <ButtonForm type="submit">Subscribe</ButtonForm>
      </Form>
      {isOpenNotification && <p>error</p>}
    </StyledSubscription>
  );
};
