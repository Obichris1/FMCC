import { Button, Typography, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import {
 
  FaArrowRight
} from "react-icons/fa";

export default function AboutBanner() {
  return (
    <div className="space-y-24">
      <Box className=" rounded-md w-full  mx-auto flex flex-col md:flex-row !gap-16 items-center">
        {/* Left Section */}
        <div className="flex-1 ">
          <Typography  className="!font-bold !mb-4 !text-lg md:!text-2xl">
            Our Mission
          </Typography>
          <Typography variant="body1" className="!text-sm md:!text-base !leading-7">
          To provide innovative, reliable, and value-driven solutions by combining deep industry expertise with a commitment to excellence, sustainability, and client success.
          </Typography>

          <Link
            href="/services/oil-gas-services"
            className="inline-block mt-6 group hover:text-[#00008B] hover:underline"
          >
            <div className="flex gap-2 items-center">
              {" "}
              <Typography className="!text-sm md:!text-base"> Explore Services</Typography>
              <FaArrowRight className="!text-sm  md:!text-base group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </Link>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/Preview2.png"
            alt=""
            width={600}
            height={400}
            className="rounded-md object-cover w-full h-auto"
          />
        </div>
      </Box>
    </div>
  );
}
