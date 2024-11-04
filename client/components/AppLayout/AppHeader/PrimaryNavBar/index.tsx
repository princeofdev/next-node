import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import FlexBox from "@/components/Common/FlexBox";

export const navLinks = [
  {
    href: "/practice",
    text: "Practice",
  },
  {
    href: "/compete",
    text: "Compete",
  },
];

export default function PrimaryNavBar() {
  const pathname = usePathname();

  return (
    <FlexBox className="hidden tablet:flex items-center h-fit ms-8 px-4 border-s border-gray-500">
      {navLinks.map(({ href, text }) => (
        <Link
          key={href}
          className={clsx(
            "relative text-gray-400 hover:text-white px-6 before:absolute before:-top-4 before:left-0 before:-bottom-4 before:right-0",
            pathname.startsWith(href) &&
              "after:absolute after:-bottom-5 after:left-0 after:w-full after:h-1 after:bg-primary after:brightness-150 text-white",
          )}
          href={href}
        >
          {text}
        </Link>
      ))}
    </FlexBox>
  );
}
