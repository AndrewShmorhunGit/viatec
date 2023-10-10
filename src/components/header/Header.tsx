import { HeaderContainer } from "components/containers/HeaderContainer";
import { ThemeButton } from "./buttons/ThemeButton";
import { Clocks } from "./clocks/Clocks";
import { MainLogo } from "./logo/MianLogo";

export function Header() {
  return (
    <HeaderContainer>
      <MainLogo props={undefined} />
      <ThemeButton props={undefined} />
      <Clocks props={undefined} />
    </HeaderContainer>
  );
}
