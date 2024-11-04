import NotificationsIcon from "@mui/icons-material/NotificationsRounded";
import Link from "next/link";

import { useProfile } from "@/api/requests/user";
import FlexBox from "@/components/Common/FlexBox";

const navLinks = [
  {
    href: "/notification",
    icon: <NotificationsIcon />,
  },
];

export default function SecondaryNavBar() {
  return (
    <FlexBox className="flex items-center me-4 border-e border-gray-500">
      {navLinks.map(({ href, icon }) => (
        <Link
          key={href}
          className="text-gray-200 hover:text-white me-4"
          href={href}
        >
          {icon}
        </Link>
      ))}
    </FlexBox>
  );
}
