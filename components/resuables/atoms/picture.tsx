"use client";
/* eslint-disable jsx-a11y/alt-text */
import Image, { ImageProps } from "next/image";
import { FC, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface PictureProps {
  container: HTMLAttributes<HTMLDivElement>;
  image: ImageProps;
}
export const Picture: FC<PictureProps> = ({ container, image }) => (
  <div
    {...container}
    className={cn(
      "relative flex h-[50px] w-[50px] items-center justify-center",
      container.className
    )}
  >
    <Image
      {...image}
      fill
      className={cn(
        "h-full w-full object-contain object-center",
        image.className
      )}
    />
  </div>
);
