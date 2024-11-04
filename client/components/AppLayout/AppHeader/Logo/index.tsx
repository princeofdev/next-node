import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import clsx from "clsx";
import Link from "next/link";
import SVG from "react-inlinesvg";

import { useIsAuthenticated } from "@/store/hooks/auth";

export default function Logo() {
  const isAuthenticated = useIsAuthenticated();

  return (
    <Link className="relative flex items-center" href="/">
      <Box className="absolute top-2 left-2 w-6 h-6 bg-white"></Box>
      <SVG className="relative w-10 h-10 me-1" src="/assets/logo/logo.svg" />
      <Typography
        className={clsx(
          "moblg:block text-white font-extrabold",
          isAuthenticated && "hidden",
        )}
        variant="h5"
      >
        MVP
      </Typography>
    </Link>
  );
}
