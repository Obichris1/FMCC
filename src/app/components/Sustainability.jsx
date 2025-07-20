"use client";

import { motion } from "framer-motion";
import { Typography } from "@mui/material";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const slideInFromBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function SustainabilityPage() {
  return (
    <main className="bg-white text-gray-800 mx-auto space-y-12 mb-8">
      {/* Header Section */}
      {/* <motion.div
        className="relative h-[60vh] bg-cover bg-center text-white flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/sustainability.jpg')" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromBottom}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div className="relative z-10 p-4" variants={slideInFromBottom}>
          <Typography className="!text-2xl md:!text-3xl !font-bold !mb-1">
            Sustainability at FMCC
          </Typography>
          <Typography className="!text-sm md:!text-xl">
            Laoreet sit amet cursus sit amet dictum sit amet justo.
          </Typography>
        </motion.div>
      </motion.div> */}

      <div className="w-[90%] m-auto">
        <motion.div {...fadeInUp}>
         
         
          <p className="mt-4 ">
            We are committed to advancing sustainable practices that support long-term value creation for our clients, stakeholders, communities, and the environment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-24 mt-12 mb-12 ">

        <motion.section {...fadeInUp} className="mt-10 ">
          <h2 className="text-base md:text-xl text-black font-bold mb-4">
            Environmental Stewardship
          </h2>
          <p className="mb-4">
            We are committed to minimizing the environmental impact of our operations by:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Implementing emissions reduction measures and adopting energy-efficient technologies in oil and gas activities</li>
            <li>Enhancing supply chain sustainability through optimized logistics and transport practices</li>
            <li>Promoting eco-conscious real estate development and resource-efficient infrastructure</li>
            <li>Upholding rigorous environmental compliance across all sectors of operation</li>
          </ul>
          <p className="mt-4">
            Our goal is to operate responsibly while supporting the global transition toward cleaner, more sustainable systems.
          </p>
        </motion.section>

        <motion.section {...fadeInUp} className="mt-10 ">
          <h2 className="text-base md:text-xl text-black font-bold mb-4">
            Social Responsibility
          </h2>
          <p className="mb-4">
            People are central to FMCC’s sustainability vision. We foster a culture of safety, integrity, and shared value through:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Industry-leading Health, Safety, and Environment (HSE) performance</li>
            <li>Ethical labor practices and a commitment to workforce diversity and inclusion</li>
            <li>Strategic engagement with host communities to ensure mutual growth</li>
            <li>Capacity-building initiatives that empower employees and stakeholders</li>
          </ul>
          <p className="mt-4">
            We strive to make a measurable, positive impact wherever we operate.
          </p>
        </motion.section>

        <motion.section {...fadeInUp} className="mt-10 ">
          <h2 className="text-base md:text-xl text-black font-bold mb-4">
            Economic Resilience
          </h2>
          <p className="mb-4">
            Our business model is designed to be future-focused and resilient. We drive economic sustainability through:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Consistent delivery of high-quality services across multiple industries</li>
            <li>Responsible procurement and long-term client partnerships</li>
            <li>Continuous innovation, efficiency, and operational excellence</li>
            <li>Alignment with global Environmental, Social, and Governance (ESG) standards</li>
          </ul>
          {/* <p className="mt-4">
            At FMCC, sustainability is more than a responsibility — it is a strategic advantage. We remain focused on delivering enduring value, maintaining accountability, and contributing to a more sustainable and inclusive future.
          </p> */}
        </motion.section>
      </div>
      </div>
    </main>
  );
}
