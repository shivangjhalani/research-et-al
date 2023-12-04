"use client";

import React from "react";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(`sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-900`, {
        "border-b border-gray-600 bg-zinc-900 backdrop-blur-lg": scrolled,
        "border-b border-gray-600 bg-zinc-900": selectedLayout,
      })}
    >
      <div className="flex h-[47px] items-center justify-between px-4 bg-zinc-900">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex flex-row space-x-3 items-center justify-center md:hidden">
            <span className="h-7 w-7 bg-purple-800 rounded-lg" />
            <span className="font-bold text-xl flex ">PES University</span>
          </Link>
        </div>

        <div className="hidden md:block">
          <div className="h-8 w-16 rounded-full bg-purple-800 flex items-center justify-center text-center">
            <span className="font-semibold text-sm">et-AL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
