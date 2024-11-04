import Button, { ButtonProps } from "@mui/material/Button";
import Link from "next/link";

import FlexBox from "@/components/Common/FlexBox";

export const navLinks = [
  {
    text: "Sign In",
    href: "/auth/login",
    variant: "outlined" as ButtonProps["variant"],
    color: "secondary" as ButtonProps["color"],
  },
  {
    text: "Sign Up",
    href: "/auth/register",
    variant: "contained" as ButtonProps["variant"],
  },
];

export default function AuthBar() {
  return (
    <FlexBox className="hidden tablet:flex flex-1 justify-end">
      {navLinks.map(({ href, text, ...props }) => (
        <Link key={href} href={href}>
          <Button className="ms-2" {...props}>
            {text}
          </Button>
        </Link>
      ))}
    </FlexBox>
  );
}
