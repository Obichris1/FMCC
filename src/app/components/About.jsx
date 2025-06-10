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
        style={{ backgroundImage: "url('/Preview1.png')" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromBottom}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div className="relative z-10 p-4" variants={slideInFromBottom}>
          <h2 className="text-2xl md:text-3xl font-bold mb-1">About Us</h2>
          <p className="text-sm md:text-xl">Laoreet sit amet cursus sit amet dictum sit amet justo.</p>
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
              We are proud to offer a wide range of solar energy services,
              including solar panel installation, maintenance, and repair.
              We believe that solar energy is the key to a more sustainable
              future, and we are dedicated to making it accessible to everyone.
            </Typography>
          </motion.div>

          <motion.div
            className="justify-end md:self-end max-w-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
             <Typography  className="!mb-4 !font-semibold !text-lg md:!text-2xl !mt-8">
              The Vision
            </Typography>
            <Typography className="!text-sm md:!text-base !leading-7 !mb-8">
              Our commitment to sustainability is at the heart of everything
              we do. We believe that solar energy is the key to a more
              sustainable future, and we are dedicated to making it accessible
              to everyone. That’s why we offer competitive pricing and
              financing options to help make solar energy more affordable for
              our clients.
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
