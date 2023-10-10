import { MenuContainer } from "components/containers/MenuContainer";
import { ThemeButton } from "../buttons/ThemeButton";
import { Clocks } from "../clocks/Clocks";

export function Menu() {
  return (
    <MenuContainer>
      <Clocks props={undefined} />
      <ThemeButton props={undefined} />
    </MenuContainer>
  );
}
