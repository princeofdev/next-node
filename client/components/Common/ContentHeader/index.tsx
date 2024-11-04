import BreadcrumbSeperator from "@mui/icons-material/NavigateNext";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { PropsWithChildren } from "react";

import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";

type BreadcrumbLink = {
  href: string;
  text: string;
};

type Props = PropsWithChildren<{
  primaryTitle: string;
  secondaryTitle?: string;
  breadcrumbs?: BreadcrumbLink[];
}>;

export default function ContentHeader({
  primaryTitle,
  secondaryTitle,
  breadcrumbs,
  children,
}: Props) {
  return (
    <Box className="w-full border-b bg-white">
      <Container className="items-center justify-between py-4">
        <FlexBox className="flex-col">
          <Breadcrumbs
            className="mb-1"
            separator={<BreadcrumbSeperator fontSize="small" />}
          >
            {breadcrumbs?.map(({ href, text }, key) => (
              <Link
                className="block text-sm text-slate-500 hover:text-body"
                key={key}
                href={href}
              >
                {text}
              </Link>
            ))}
            <Typography className="text-sm text-slate-400">
              {secondaryTitle || primaryTitle}
            </Typography>
          </Breadcrumbs>
          <Typography className="text-3xl text-heading font-bold" variant="h5">
            {primaryTitle}
          </Typography>
        </FlexBox>
        {children}
      </Container>
    </Box>
  );
}
