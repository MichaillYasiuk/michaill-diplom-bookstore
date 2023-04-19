import { Like, StyledButtonLike } from "./styles";

interface ButtonLikeProps {
  isFavorites: boolean;
  disabled?: boolean;
}

export const ButtonLike = ({ isFavorites, disabled }: ButtonLikeProps) => {
  return (
    <StyledButtonLike $isFavorites={isFavorites} disabled={disabled}>
      <Like $isFavorites={isFavorites} />
    </StyledButtonLike>
  );
};
