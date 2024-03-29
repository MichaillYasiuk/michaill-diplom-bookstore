import { useToggle } from "store";
import { Button, StyleTabBar } from "./styles";

interface TabBarProps {
  value1: string;
  value2: string;
  setTab: Function;
}

export const TabBar = ({ value1, value2, setTab }: TabBarProps) => {
  const [isActiveDescription, toggleIsActiveDescription] = useToggle(true);
  const [isActiveAuthors, toggleIsActiveAuthors] = useToggle();

  const handleDescriptionTab = () => {
    setTab("description");
    toggleIsActiveAuthors();
    toggleIsActiveDescription();
  };

  const handleAuthorsTab = () => {
    setTab("authors");
    toggleIsActiveDescription();
    toggleIsActiveAuthors();
  };

  return (
    <StyleTabBar>
      <Button
        type="button"
        onClick={handleDescriptionTab}
        $isActiveDescription={isActiveDescription}
      >
        {value1}
      </Button>
      <Button type="button" onClick={handleAuthorsTab} $isActiveAuthors={isActiveAuthors}>
        {value2}
      </Button>
    </StyleTabBar>
  );
};
