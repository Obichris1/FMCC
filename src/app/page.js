"use client";
import { Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Hero from "./components/Hero";

const services = [
  
  {
    title: "Market Intelligence",
    description:
      "Efficient sourcing and delivery of merchandise across multiple sectors.",
    label: "General Contracting",
    slug: "general-contracting",
    image: "/contract3.avif",
  },
  {
    title: "Digital Transformation",
    description:
      "Integrated engineering, procurement, and construction for project delivery.",
    label: "EPC and Engineering",
    slug: "epc-and-engineering",
    image: "/construction.avif",
  },
 
  {
    title: "Brand Identity",
    description:
      "Flexible asset leasing that boosts efficiency and reduces capital costs.",
    label: "Leasing",
    slug: "leasing",
    image: "/tractor1.avif",
  },

  {
    title: "Business Strategy",
    description:
      "Reliable oilfield solutions focused on safety, efficiency, and innovation.",
    label: "Oil and Gas Services",
    slug: "oil-gas-services",
    image: "/oil5.jpeg",
  },
];

export default function Home() {
  return (
    <div className="space-y-8 ">
      <Hero />

      <Divider className="" />
      <div className="w-[90%] m-auto space-y-10 py-10">
        <Typography className="!text-2xl md:!text-3xl !font-bold !mb-2">
          What we do
        </Typography>
        <Typography className="!text-sm md:!text-base  !mb-24">
          Trusted advisor supporting investors and business leaders through
          transactions and growth initiatives
        </Typography>

        <div className="space-y-32 grid md:grid-cols-2 ">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-12 "
        
            >
              {/* Image */}
              <div className="md:w-2/3 w-full rounded-xl overflow-hidden shadow-md">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={200}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="md:w-2/3 w-full flex flex-col gap-4 ">
                <Typography className="!text-xl md:!text-2xl !font-bold  ">
                  {service?.label}
                </Typography>
                <Typography className="!text-sm md:!text-base !font-medium ">
                  {service?.description}
                </Typography>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm font-medium inline-flex items-center gap-2 text-[#00008B] hover:underline group"
                >
                  {service.label}
                  <FaArrowRight className="text-base transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
