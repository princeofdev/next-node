import AppBar from "@mui/material/AppBar";
import { usePathname } from "next/navigation";
import { useState } from "react";

import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";
import { useIsAuthenticated } from "@/store/hooks/auth";

import AccountMenu from "./AccountMenu";
import AuthBar from "./AuthBar";
import Logo from "./Logo";
import PrimaryNavBar from "./PrimaryNavBar";
import SecondaryNavBar from "./SecondaryNavBar";
import ToggleMenu from "./ToggleMenu";

export default function Header() {
  const pathname = usePathname();
  const isAuthenticated = useIsAuthenticated();

  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <AppBar
      className="mx-auto py-3 flex items-center justify-center bg-gray-900"
      component="header"
      position="relative"
    >
      <Container className="items-center justify-center">
        <FlexBox className="items-center justify-center">
          <Logo />
          {isAuthenticated && <PrimaryNavBar />}
        </FlexBox>

      </Container>
    </AppBar>
  );
}
