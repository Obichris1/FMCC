"use client";
import React from "react";
import ContactForm from "../components/ContactForm";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineX,
} from "react-icons/ai";

const slideInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const slideInFromBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function page() {
  return (
    <div>
      {/* Hero Section */}
       {/* <Typography variant="h4" className="text-center !font-bold">Contact Us</Typography> */}
       

      {/* Main Content */}
      <motion.div
        className="py-16 w-[90%] m-auto  "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromBottom}
      >
        <div className=" mx-auto flex flex-col md:flex-row gap-12 items-center justify-center">
          {/* Left Content */}
          <motion.div
            className=" w-full md:w-[70%]   "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromLeft}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Get in touch with us
            </h3>
            <p className="font-bold  md:text-lg mb-2">Want to make enquiries or issue a complaint?</p>
           
            <div className=" text-xs md:text-sm flex flex-col gap-4 mt-10">
          {/* <Typography className="font-bold uppercase text-black mb-4">
            Contact Info
          </Typography> */}

          <span className="flex items-center gap-4 ">
            <AiOutlineMail className="text-lg" />
            <Link
              href="mailto:info@fmccng.com?subject=Inquiry&body=Hello, I want to make enquiries..."
              className="hover:text-primary font-bold  md:text-base"
            >
            info@fmccng.com
            </Link>
          </span>
          <span className="flex items-center gap-4 ">
            <AiOutlinePhone className="text-lg" />
            <Link href="tel:+2348129614462" className="hover:text-primary font-bold !text-lg  md:text-base">
              +971 54 322 3965
            </Link>
            ,
            <Link href="tel:+2349150831932" className="hover:text-primary font-bold md:text-base">
              +234 803 898 6372
            </Link>
          </span>
        </div>

        {/* SOCIAL MEDIA  */}
        <div className="flex  md:self-end  items-center gap-4 mt-12">
          <Link
            href=""
            target="_blank"
            className=" rounded-full text-[#E12F6C] !text-xl  md:!text-2xl hover:scale-75 transition"
          >
            <AiOutlineInstagram />
          </Link>

          <Link
            href=""
            target="_blank"
            className="  rounded-full text-[#00008B] !text-xl  md:!text-2xl hover:scale-75 transition"
          >
            <AiFillFacebook />
          </Link>

          <Link
            href=""
            target="_blank"
            className=" rounded-full text-[#000] !text-xl  md:!text-2xl hover:scale-75 transition"
          >
            <AiOutlineX />
          </Link>
        </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromRight}
          >
            <ContactForm />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
