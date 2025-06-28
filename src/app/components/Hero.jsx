"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typography, Button } from "@mui/material";
import { MdArrowForward } from "react-icons/md"; // Make sure this is imported

const slides = [
  {
    image: "/epc.avif",
    title: "The State of Aviation 2025",
    subtitle:
      "Can the aviation Service soar to new heights, or will headwinds slow its progress?",
  },
  {
    image: "/contract.jpg",
    title: "AI Innovation in Energy",
    subtitle:
      "How artificial intelligence is reshaping aviation safety and efficiency.",
  },
  {
    image: "/energy.jpg",
    title: "Sustainable Skies Ahead",
    subtitle: "The push toward greener, cleaner air travel by 2030.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const { image, title, subtitle } = slides[current];

  return (
    <section
      className="relative min-h-[90vh] bg-cover bg-center transition-all duration-1000 ease-in-out flex items-center justify-start"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Left Side Mask Only */}
      <div className="absolute left-0 top-0 h-full w-full md:w-2/3 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-0" />

      {/* Slide Content */}
      <div className="relative z-10 container px-8 md:px-20 text-white max-w-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <Typography className=" !text-2xl md:!text-4xl !font-bold !leading-7 !mb-4">
              {title}
            </Typography>
            <Typography className="!text-sm md:!text-lg !mb-6">
              {subtitle}
            </Typography>
           
            <Button
              variant="contained"
            className="!text-white !text-xs md:!text-base !px-8 !py-3 !bg-[#00264D] font-bold hover:!shadow-2xl hover:!scale-105 flex items-center gap-2"
            >
              Explore
              <MdArrowForward className="text-white text-xl" />
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-[11rem] md:left-[24rem] lg:left-[44rem] flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 border border-white ${
              current === index ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
