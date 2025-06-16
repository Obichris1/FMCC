"use client";

import { useState } from "react";
import { Typography } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import {

  FaArrowRight
} from "react-icons/fa";

export default function ServiceCard({ title, description, color, icon: Icon,label,slug}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-88 sm:w-48 sm:h-48 h-64 perspective"
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
          {Icon && <Icon style={{ fontSize: "3.5rem", color }} className="mb-5" />}
          {/* <div className="h-1 w-10 mb-3 flex  rounded" style={{ backgroundColor: color }} /> */}
          <Typography  className="text-[#00264D] font-bold !text-center !text-sm  ">
            {label}
          </Typography>

         
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#00264D] text-white shadow-xl rounded-2xl flex flex-col justify-center items-center p-6">
          <Typography variant="body2" className="text-center !mb-5  !leading-relaxed">
            {description}
          </Typography>

          <Link key={slug}
                        href={`/services/${slug}`}>
                      
            <div className="flex gap-2 text-xs md:text-sm items-center"> <Typography className="!text-xs md:!text-xs "> Explore Service</Typography>
            <FaArrowRight className="!text-xs  md:!text-sm group-hover:translate-x-2 transition-transform duration-300" />
            </div>
            
  </Link>
        </div>
      </div>
    </div>
  );
}
