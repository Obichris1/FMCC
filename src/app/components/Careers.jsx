"use client"

import React from "react";
import AboutBanner from "./AboutBanner";
import { Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};
const slideInFromBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };
  

const Careers = () => {
  return (
    <div className="font-sans">
      {/* Header Section */}
      <motion.div
        className="relative h-[40vh] bg-cover bg-center text-white flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/careers.webp')" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromBottom}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div className="relative z-10 p-4" variants={slideInFromBottom}>
        <Typography className="!text-2xl md:!text-3xl !font-bold !mb-1">FMCC careers</Typography>
        <Typography className="!text-sm md:!text-xl"></Typography>
        </motion.div>
      </motion.div>


      {/* Content Section */}
      <div className="max-w-3xl mx-auto mt-12 px-4 mb-60  ">
        <motion.h2
          className="text-xl md:text-2xl  font-bold mb-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Coming Soon....
        </motion.h2>

        <motion.p
          className="text-sm md:text-base text-gray-700 leading-7"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Subscribe to our news letter for updates.
        </motion.p>
      </div>

         

   
    </div>
  );
};

export default Careers;
