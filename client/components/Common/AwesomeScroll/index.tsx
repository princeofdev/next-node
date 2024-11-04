"use client";

import { Box, BoxProps, styled } from "@mui/material";
import { debounce } from "lodash";
import { forwardRef, useEffect, useRef, useState } from "react";

const ScrollBox = styled(Box)<BoxProps<"div", { background?: string }>>(
  ({ background }) => ({
    "&::-webkit-scrollbar": {
      width: 4,
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: background || "#f1f1f1",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: background || "#888",
      borderRadius: 4,
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: background || "#555",
    },
  }),
);

export default forwardRef(function AwesomeScroll(props: BoxProps, ref) {
  const elem = useRef<HTMLDivElement>();

  const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    const show = () => setBgColor("");
    const hide = debounce(() => setBgColor("transparent"), 1000);

    elem.current?.addEventListener("scroll", show);
    elem.current?.addEventListener("scroll", hide);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      elem.current?.removeEventListener("scroll", show);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      elem.current?.removeEventListener("scroll", hide);
    };
  }, []);

  return (
    <ScrollBox
      ref={(node: HTMLDivElement) => {
        elem.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      }}
      background={bgColor}
      {...props}
    />
  );
});
