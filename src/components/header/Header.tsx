import { HeaderContainer } from "components/header/containers/HeaderContainer";
import { MainLogo } from "./logo/MainLogo";
import { Menu } from "./menu/Menu";

export function Header() {
  return (
    <HeaderContainer>
      <MainLogo props={undefined} />
      <Menu />
    </HeaderContainer>
  );
}
