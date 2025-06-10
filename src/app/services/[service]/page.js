'use client';

import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';

const ServiceData = {
  'solar-power-installation': {
    title: 'Solar Power Installation',
    content:
      'Details about solar power installation services... We offer end-to-end solar solutions including consultation, design, installation, and maintenance of residential, commercial, and industrial solar energy systems. Our team ensures optimal placement and efficiency of panels, handles all electrical integration, and provides seamless grid-tie or off-grid configurations. Our solutions help reduce energy costs, increase sustainability, and provide reliable power even in remote areas. With our expert installation services, clients benefit from clean, renewable energy backed by quality workmanship and industry-leading warranties.',
  },
  'wind-energy-solutions': {
    title: 'Wind Energy Solutions',
    content:
      'Explore our wind energy services and solutions... Our wind power systems are designed to harness natural wind flow and convert it into efficient, sustainable energy. We manage every stage from site assessment, turbine selection, system design, installation, and post-deployment monitoring. Whether you’re powering a rural property or integrating wind energy into a hybrid grid, we provide scalable solutions. Our team uses the latest turbine technologies to ensure safety, performance, and minimal environmental impact.',
  },
  'energy-auditing': {
    title: 'Energy Auditing',
    content:
      'Professional energy audits for optimized savings... Our comprehensive energy audits help homeowners and businesses identify energy waste and improve efficiency. Through data analysis, onsite inspections, and utility bill evaluations, we provide actionable recommendations tailored to your unique setup. Whether it’s lighting retrofits, HVAC upgrades, or insulation improvements, we help you reduce operational costs and carbon footprints while qualifying for available energy incentives and rebates.',
  },
  'consulting-services': {
    title: 'Consulting Services',
    content:
      'Expert consulting to guide your energy strategy... Our energy consultants work closely with clients to develop custom strategies that align with environmental goals, compliance standards, and budget constraints. We advise on system design, financing options, regulatory requirements, and integration with existing infrastructure. Whether you’re planning a small-scale solar deployment or a multi-site energy management strategy, our guidance ensures efficiency, scalability, and long-term ROI.',
  },
  'smart-grid-solutions': {
    title: 'Smart Grid Solutions',
    content:
      'Modern smart grid technologies to boost efficiency... We provide advanced smart grid solutions to modernize and digitize energy distribution systems. Our services include smart metering, real-time monitoring, demand response systems, and automated grid management. These technologies improve reliability, reduce outages, and empower both utilities and consumers with better control over energy usage. Our smart grids also support integration with renewable energy sources and enhance the flexibility of power networks.',
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
          className="text-sm md:text-base text-gray-700 leading-7"
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
