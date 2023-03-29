import { SecondaryTitle } from "components/atoms/SecondaryTitle/SecondaryTitle";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import { useToggle } from "store/hooks/useToggle";
import { StyledSubscription, ButtonForm } from "./styles";

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
      <p>Be the first to know about new IT books, upcoming releases, exclusive offers and more.</p>

      <Form action="#" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Your email" {...register("name")} />
        <ButtonForm type="submit">Subscribe</ButtonForm>
      </Form>
      {isOpenNotification && <p>error</p>}
    </StyledSubscription>
  );
};
