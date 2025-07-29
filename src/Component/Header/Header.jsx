import React from "react";
import { HeaderContainer, Logo } from "./Header.styles";

const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <Logo
          src="https://storagefiles.clo-set.com/public/connect/common/connect-desktop-header-bi.svg"
          alt="CLO-SET Logo"
          data-testid="clo-logo"
        />
      </HeaderContainer>
    </div>
  );
};

export default Header;
