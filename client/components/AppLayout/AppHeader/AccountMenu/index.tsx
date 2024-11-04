import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Link from "next/link";
import { useRef, useState } from "react";

import { useProfile } from "@/api/requests/user";
import Avatar from "@/components/Common/Avatar";

export const navLinks = [
  {
    text: "Profile",
    href: "/profile",
  },
  {
    text: "Leaderboard",
    href: "/leaderboard",
  },
  {
    text: "Network",
    href: "/network",
  },
  {
    text: "Settings",
    href: "/settings",
  },
  {
    text: "Sign out",
    href: "/logout",
  },
];

export default function AccountMenu() {
  const icon = useRef<HTMLButtonElement>(null);

  const [open, setOpen] = useState<boolean>(false);

  const { data: me } = useProfile();

  if (!me) {
    return <></>;
  }

  const close = () => setOpen(false);
  const toggle = () => setOpen((prev) => !prev);

  return (
    <ClickAwayListener onClickAway={close}>
      <Box className="relative hidden tablet:flex z-10">
        <Button className="w-10 h-10 p-0" ref={icon} onClick={toggle}>
          <Avatar />
        </Button>
        <Popper
          className="mt-3.5"
          open={open}
          anchorEl={icon?.current}
          placement="bottom-end"
          disablePortal
        >
          <Paper className="relative before:absolute before:right-1 before:w-8 before:h-8 before:bg-white before:rotate-45">
            <MenuList className="flex flex-col px-2 py-1">
              <Link
                className="w-44 py-2 bg-link text-white text-center hover:font-bold mb-1"
                href="/hackos"
                onClick={close}
              >
                Hackos: {me.hackos}
              </Link>
              {navLinks.map(({ href, text }) => (
                <Link
                  key={href}
                  className="w-full py-2 hover:font-semibold border-b last-of-type:border-b-0"
                  href={href}
                  onClick={close}
                >
                  {text}
                </Link>
              ))}
            </MenuList>
          </Paper>
        </Popper>
      </Box>
    </ClickAwayListener>
  );
}
