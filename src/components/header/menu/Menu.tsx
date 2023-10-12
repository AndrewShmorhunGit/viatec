import { MenuContainer } from "components/header/containers/MenuContainer";
import { ThemeButton } from "../buttons/ThemeButton";
import { Time } from "../clocks/Time";

export function Menu() {
  return (
    <MenuContainer>
      <ThemeButton />
      <Time />
    </MenuContainer>
  );
}
