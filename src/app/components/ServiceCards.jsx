"use client";

import { useState } from "react";
import { Typography } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import {

  FaArrowRight
} from "react-icons/fa";

export default function ServiceCard({ title, description, color, icon: Icon }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-84 sm:w-48 sm:h-48 h-64 perspective"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={clsx(
          "relative w-full h-full transition-transform duration-700 transform-style-preserve-3d rounded-2xl",
          hovered ? "rotate-y-180" : ""
        )}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-white shadow-md rounded-2xl flex flex-col justify-center items-center p-6 z-10">
          {Icon && <Icon style={{ fontSize: "2.5rem", color }} className="mb-2" />}
          <div className="h-1 w-10 mb-3 rounded" style={{ backgroundColor: color }} />
          <Typography  className="text-[#00264D] font-semibold !text-center !text-sm">
            {title}
          </Typography>

          <Link href="/about" className="inline-block mt-6 group hover:text-[#00008B] hover:underline">
            <div className="flex gap-2 text-xs md:text-sm items-center"> <Typography className="!text-xs md:!text-xs "> Learn More</Typography>
            <FaArrowRight className="text-xs   group-hover:translate-x-2 transition-transform duration-300" />
            </div>
            
  </Link>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#00264D] text-white shadow-xl rounded-2xl flex flex-col justify-center items-center p-6">
          <Typography variant="body2" className="text-center leading-relaxed">
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
}
