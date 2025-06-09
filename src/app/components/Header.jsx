"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Button } from "@mui/material";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isservicesOpen, setIsservicesOpen] = useState(false);
  const pathname = usePathname();
  const isServicesActive = pathname.startsWith("/services");

  const services = [
    { label: "Solar Power Installation", slug: "solar-power-installation" },
    { label: "Wind Energy Solutions", slug: "wind-energy-solutions" },
    { label: "Energy Auditing", slug: "energy-auditing" },
    { label: "Consulting Services", slug: "consulting-services" },
    { label: "Smart Grid Solutions", slug: "smart-grid-solutions" },
  ];

  const activeLinkClass =
    "relative pb-1 text-[#00264D] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#00264D]";

  return (
    <>
      <header className="sticky top-0 z-50 py-4 bg-white text-black shadow-md">
        <div className="w-[90%] m-auto flex justify-between items-center  ">
        {/* Logo & Hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            <FiMenu />
          </button>
          <h1 className="font-serif text-lg sm:text-xl font-bold">FMCC Ltd</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm lg:text-xs relative">
          <Link
            href="/"
            className={pathname === "/" ? activeLinkClass : "pb-1 relative"}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={pathname === "/about" ? activeLinkClass : "pb-1 relative"}
          >
            About Us
          </Link>

          {/* services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsservicesOpen(true)}
            onMouseLeave={() => setIsservicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 pb-1 ${
                isServicesActive ? activeLinkClass : ""
              }`}
            >
              Services
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  isservicesOpen ? "rotate-180" : ""
                }`}
                size={12}
              />
            </button>

            

            <AnimatePresence>
              {isservicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute left-1/2 top-10 -translate-x-1/2 w-[40vw] bg-white text-black shadow-xl z-50 py-8 px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                  {services.map((item, index) => (
                    <Link
                      key={index}
                      href={`/services/${item.slug}`}
                      className="hover:text-[#00008B] font-medium"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          
          <Link
            href="/contact"
            className={pathname === "/contact" ? activeLinkClass : "pb-1 relative"}
          >
            Contact
          </Link>
        </nav>

        {/* Auth */}
        <Button variant="contained" className="hidden sm:flex gap-4 items-center !bg-[#00264D] text-sm lg:text-sm !py-2 capitalize">
          <Link className="capitalize" href="#">Subscribe</Link>
        </Button>

        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed top-10 left-0 w-full min-h-screen bg-[#00264D] text-white z-40 px-6 py-8 sm:px-10 sm:py-12 space-y-6"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg sm:text-xl font-bold">Menu</h2>
              <FiX
                className="text-2xl cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              />
            </div>

            <nav className="flex flex-col gap-5 text-base sm:text-lg">
              {services.map((item, index) => (
                <Link
                  key={index}
                  href={`/services/${item.slug}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                About Us
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>

              <div className="mt-6 border-t border-white/20 pt-4 flex flex-col gap-3">
                <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>
                  Sign In
                </Link>
                <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>
                  Subscribe
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
  