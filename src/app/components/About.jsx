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
  

const About = () => {
  return (
    <div className="font-sans">
      {/* Header Section */}
      <motion.div
        className="relative h-[90vh] bg-cover bg-center text-white flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/fmccB.png')" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromBottom}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div className="relative z-10 p-4" variants={slideInFromBottom}>
          <Typography className="!text-2xl md:!text-3xl !font-bold !mb-1">About Us</Typography>
          <Typography className="!text-sm md:!text-xl">Laoreet sit amet cursus sit amet dictum sit amet justo.</Typography>
        </motion.div>
      </motion.div>

      <Divider className="py-8"/>

      <div className="w-[90%] m-auto space-y-8">
        {/* Intro Section */}
        <div className="m-auto flex flex-col gap-8 mt-8 mb-4">
          <motion.div
            className="max-w-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn}
          >
           
            <Typography className=" !text-sm md:!text-base !leading-7 ">
            FMCC is an integrated solutions provider with a broad portfolio spanning engineering, energy services, logistics, civil infrastructure, industrial supply, leasing, and real estate. With deep technical expertise and a commitment to excellence, we serve clients across public and private sectors, delivering reliable, forward-driven outcomes from concept to completion.
            Rooted in quality, innovation, and safety, we enable businesses to operate efficiently, build sustainably, and grow with confidence in today’s complex markets.
            </Typography>
          </motion.div>

          <motion.div
            className="justify-end md:self-end max-w-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
             <Typography  className="!mb-4 !font-bold !text-lg md:!text-2xl !mt-8">
              The Vision
            </Typography>
            <Typography className="!text-sm md:!text-base !leading-7 !mb-8">
              Our commitment to sustainability is at the heart of everything
              we do. To lead with integrity and innovation, shaping a better future through impactful solutions and enduring partnerships
            </Typography>
          </motion.div>
        </div>

        {/* Video Banner Section */}
        <motion.div
          initial="hidden"
          className="mb-20 md:mt-20"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <AboutBanner />
        </motion.div>

        {/* Vision and Solutions Section */}
       
      </div>
    </div>
  );
};

export default About;
