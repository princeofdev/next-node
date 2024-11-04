"use client";

import { Box, BoxProps, keyframes } from "@mui/material";

import FlexBox from "../FlexBox";

const typing = keyframes`
   0% { transform: translateY(0) }
  28% { transform: translateY(-4px) }
  44% { transform: translateY(0) }
`;

export default function TypingIndicator({ ref, ...props }: BoxProps) {
  return (
    <FlexBox {...props}>
      {[0, 100, 200].map((delay) => (
        <Box
          key={delay}
          className="relative w-1 h-1 ms-0.5 rounded-full bg-gray-500"
          sx={{
            animation: `${typing} 1.5s ${delay}ms infinite`,
          }}
        />
      ))}
    </FlexBox>
  );
}
