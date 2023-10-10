import { HeaderContainer } from "components/containers/HeaderContainer";
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
