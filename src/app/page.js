"use client"
import { Divider, Typography } from "@mui/material";
import ServiceCard from "./components/ServiceCards";
import Hero from "./components/Hero";
import { motion } from 'framer-motion';

import {

  FaArrowRight,
  FaOilCan, FaDraftingCompass, 
} from "react-icons/fa";
import Link from "next/link";

import { FaFire, FaCogs, FaToolbox, FaWarehouse } from "react-icons/fa";

const services = [
  {
    title: "Business Strategy",
    category: "Service",
    description:
      "Reliable oilfield solutions focused on safety, efficiency, and innovation.",
    label: "Oil and Gas Services",
    slug: "oil-gas-services",
    color: "#00008B",
    underline: "bg-rose-600",
    icon: FaFire,
  },
  {
    title: "Digital Transformation",
    category: "Consulting",
    description:
      "Integrated engineering, procurement, and construction for complete project delivery.",
    label: "EPC and Engineering",
    slug: "epc-and-engineering",
    color: "#00008B",
    underline: "bg-sky-600",
    icon: FaCogs,
  },
  {
    title: "Market Intelligence",
    category: "Analytics",
    description:
      "Efficient sourcing and delivery of merchandise across multiple sectors.",
    label: "⁠General Contracting",
    slug: "general-contracting",
    color: "#00008B",
    underline: "bg-sky-600",
    icon: FaToolbox,
  },
  {
    title: "Brand Identity",
    category: "Marketing",
    description:
      "Flexible asset leasing that boosts efficiency and reduces capital costs.",
    label: "Leasing",
    slug: "leasing",
    color: "#00008B",
    underline: "bg-sky-600",
    icon: FaWarehouse,
  },
];





export default function Home() {
  return (
    <div className="space-y-8 ">
      <Hero />

      <Divider className="" />

      <div className="m-auto py-8 w-[90%] ">
        <Typography  className="!mb-3 !font-bold !text-2xl md:!text-3xl !leading-6 md:!leading-7">
          What we do
        </Typography>
        <Typography variant="body1" className="!mb-15 !text-sm md:!text-base">
          Trusted advisor supporting investors and business leaders through
          transactions and growth initiatives
        </Typography>

        <div className="m-auto w-full sm:w-[30%]">
        <div className="grid grid-cols-1 sm:grid-cols-5 grid-rows-4 sm:grid-rows-3 gap-y-4 sm:gap-y-2 sm:gap-x-4 place-items-center">
  {/* Top Left */}
  <div className="sm:col-start-1 sm:row-start-1 row-start-1">
    <ServiceCard {...services[0]} />
  </div>

  {/* Top Right */}
  <div className="sm:col-start-5 sm:row-start-1 row-start-2">
    <ServiceCard {...services[1]} />
  </div>

  {/* Bottom Left */}
  <div className="sm:col-start-1 sm:row-start-3 row-start-3">
    <ServiceCard {...services[2]} />
  </div>

  {/* Bottom Right */}
  <div className="sm:col-start-5 sm:row-start-3 row-start-4">
    <ServiceCard {...services[3]} />
  </div>
</div>


     
        </div>

        
      </div>
      {/* <Divider className="py-8" /> */}

      <div className=" relative bg-cover py-25 text-center rounded-lg text-black"> {/* Increased padding and margin */}
        {/* Dark Overlay */}
        <div ></div>

        {/* Animated Content */}
        <motion.div 
          className="relative w-[90%] m-auto z-1 !text-left "
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography variant="h4" fontWeight="bold" className="text-black !text-xl md:!text-3xl !mb-6">
            Equipped to meet your requirements..
            </Typography>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography variant="body1" className="!text-black !text-sm md:!text-base !mx-auto !mb-6  !leading-6 md:!leading-7"> {/* Increased mb */}
            We are committed to providing industry-leading products and solutions tailored to specific business needs. Our expert team excels in identifying market trends, developing effective solutions, and delivering high-performance systems.
            </Typography>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Typography variant="body1" className="!text-black !text-sm md:!text-base !mx-auto !leading-6 md:!leading-7">
              At FMCC, we believe that every business challenge is unique and requires a tailored approach.
              By collaborating closely with our clients, we combine industrial expertise with technical innovation
              to create solutions that drive success.
            </Typography>

            <Link href="/about" className="inline-block mt-6 group hover:text-[#00008B] hover:underline">
            <div className="flex gap-2 text-sm md:text-base items-center"> <Typography> Learn More</Typography>
            <FaArrowRight className="text-xl   group-hover:translate-x-2 transition-transform duration-300" />
            </div>
            
  </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
