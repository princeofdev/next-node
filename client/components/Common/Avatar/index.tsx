"use client";

import { useEffect, useRef, useState } from "react";

import { useProfile } from "@/api/requests/user";

import FlexBox from "../FlexBox";

type Props = {
  username?: string;
};

export default function Avatar({ username }: Props) {
  const { data: user } = useProfile(username);

  const textElem = useRef<SVGTextElement>(null);

  const [viewBox, setViewBox] = useState<string>();

  useEffect(() => {
    if (textElem.current) {
      const bBox = textElem.current.getBBox();
      setViewBox(`${bBox.x} ${bBox.y} ${bBox.width} ${bBox.height}`);
    }
  }, [user]);

  const altText =
    user && user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase();

  return (
    user && (
      <FlexBox className="justify-center w-full h-full bg-white text-heading rounded-full overflow-hidden font-bold">
        {user.avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={user.avatar} alt={altText} />
        ) : (
          <svg className="scale-75" viewBox={viewBox}>
            <text ref={textElem}>{altText}</text>
          </svg>
        )}
      </FlexBox>
    )
  );
}
