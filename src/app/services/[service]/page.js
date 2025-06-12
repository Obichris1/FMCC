"use client";

import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";

const ServiceData = {
  "oil-gas-services": {
    title: "Oil and Gas Services",
    content:
      "We deliver high-quality solutions and field support across the oil and gas industry. With a commitment to safety, innovation, and operational excellence, we partner with our clients to enhance performance, reduce risk, and maximize value across the energy value chain. Our expertise spans the full lifecycle of oilfield operations, and we pride ourselves on a results-driven approach that aligns with the dynamic needs of the industry. Whether downstream, onshore or offshore, we provide the technical knowledge, workforce capability, and service reliability that energy operations demand. From planning to execution, our team works to ensure efficiency, compliance, and success in every project—driven by a shared dedication to safety and sustainability.",
  },
  "epc-and-engineering": {
    title: "EPC and Engineering",
    content:
      "We provide integrated Engineering, Procurement, and Construction (EPC) and engineering services across diverse sectors, offering clients complete, end-to-end project solutions. From concept development through to commissioning, we integrate multidisciplinary engineering expertise with efficient procurement and structured construction execution to bring complex projects to life—on time and within budget.Our engineering services include feasibility studies, detailed design, technical analysis, and performance improvement, while our EPC delivery ensures smooth coordination across all project stages. With a strong focus on safety, quality, and innovation, we help clients manage complexity and achieve dependable, sustainable results.Whether Greenfield developments, upgrades, or infrastructure expansions, we align each project with client objectives, regulatory standards, and industry best practices—providing trusted solutions from vision to realization.,",
  },
  leasing: {
    title: "Leasing",
    content:
      "Our leasing services are designed to support asset optimization and operational efficiency across industrial and commercial sectors. We provide flexible, scalable solutions that align with client project timelines and strategic objectives. Through a streamlined process and strong industry expertise, we ensure reliable access to critical assets while minimizing capital expenditure and maximizing productivity.",
  },
  "general-contracting": {
    title: "⁠General Contracting",
    content:
      " We offer comprehensive general contracting services focused on general merchandise, supporting clients with reliable sourcing, procurement, and delivery of goods across various sectors. Our solutions are designed to streamline supply chains, reduce overhead, and ensure timely fulfillment with consistent quality.By managing everything from vendor coordination and logistics to quality assurance, we provide a single point of contact for merchandise procurement and distribution. Whether for bulk supply, tailored product needs, or ongoing contract support, we help businesses operate more efficiently and meet their operational goals with confidence",
  },
  
};

export default function ServicePage() {
  const params = useParams();
  const { service } = params;

  const services = ServiceData[service];

  if (!services) return notFound();

  return (
    <div className="pb-6">
      {/* Banner Section */}
      <motion.div
        className="relative h-[35vh] bg-cover bg-center text-white flex items-center  justify-center"
        style={{ backgroundImage: "url('/energy.jpg')" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.h1
          className="relative z-10 text-2xl md:text-3xl font-bold text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {services.title}
        </motion.h1>
      </motion.div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto mt-12 px-4  ">
        <motion.h2
          className="text-xl md:text-2xl  font-semibold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {services.title}
        </motion.h2>

        <motion.p
          className="text-sm md:text-base leading-7"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {services.content}
        </motion.p>
      </div>
    </div>
  );
}
