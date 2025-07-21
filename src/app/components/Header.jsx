"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Button } from "@mui/material";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isservicesOpen, setIsservicesOpen] = useState(false);
  const pathname = usePathname();
  const isServicesActive = pathname.startsWith("/services");

  const services = [
    { label: "Oil and Gas Services", slug: "oil-gas-services" },
    { label: "EPC and Engineering", slug: "epc-and-engineering" },
    { label: "Leasing", slug: "leasing" },
    { label: "⁠General Contracting", slug: "general-contracting" },
  
  ];

  const activeLinkClass =
    "relative pb-1 text-[#fff] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#fff] ";

  return (
    <>
      {/* <header className="sticky top-0 z-50 py-4 bg-[#00264D] text-white shadow-md"> */}
      <header className="sticky top-0 z-50 py-4 bg-[#00264D] text-[#fff] shadow-md">
        <div className="w-[90%] m-auto flex justify-between items-center">
          {/* Logo & Hamburger */}
          <div className="flex items-center justify-between gap-8">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-2xl focus:outline-none"
              aria-label="Toggle menu"
            >
              <FiMenu />
            </button>
            <div className="relative w-[85px] h-[55px] sm:w-[100px] sm:h-[40px]">
  <Link href="/">
    <Image
      src="/fmcc light.png"
      alt="FMCC logo"
      fill
      className="object-contain"
      // sizes="(max-width: 640px) 110px, 150px"
    />
  </Link>
</div>

          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-sm lg:text-base font-bold relative ">
            <Link
              href="/"
              className={pathname === "/" ? activeLinkClass : "pb-1 relative hover:scale-105 transform  ease-in-out duration-300"}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={pathname === "/about" ? activeLinkClass : "pb-1 relative hover:scale-105 transform  ease-in-out duration-300"}
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
                    className="absolute left-1/2 top-10 -translate-x-1/2 w-[40vw] xl:w-[50vw] bg-[#00264D] text-white shadow-xl z-50 py-8 px-4 pr-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {services.map((item, index) => (
                      <Link
                        key={index}
                        href={`/services/${item.slug}`}
                        className="hover:text-[#00008B] !font-bold block text-center hover:scale-105 transform  ease-in-out duration-300"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/careers"
              className={pathname === "/careers" ? activeLinkClass : "pb-1 relative hover:scale-105 transform  ease-in-out duration-300"}
            >
              Careers
            </Link>

            <Link
              href="/contact"
              className={pathname === "/contact" ? activeLinkClass : "pb-1 relative hover:scale-105 transform  ease-in-out duration-300"}
            >
              Contact
            </Link>
          </nav>

          {/* Auth */}
          <Button
            variant="contained"
            className="!hidden sm:!flex gap-4 items-center !bg-[#000] text-sm lg:text-sm !py-2 capitalize"
          >
            <Link className="capitalize" href="#">
              Subscribe
            </Link>
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
            <div className="flex justify-end mb-4 mt-2">
              <FiX
                className="text-2xl cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              />
            </div>

            <nav className="flex flex-col gap-10 text-base sm:text-lg">
              {/* Services Mobile Dropdown */}

              <Link href="/" className="!text-sm py-3 border-b border-white/20  " onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex gap-2 items-center w-full text-left text-sm py-3 border-b border-white/20   font-medium"
                >
                  Services
                  <FaChevronDown
                    className={`transition-transform duration-300  ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`}
                    size={14}
                  />
                </button>

                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4 mt-8 mb-4 flex flex-col gap-8"
                    >
                      {services.map((item, index) => (
                        <Link
                          key={index}
                          href={`/services/${item.slug}`}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsMobileServicesOpen(false);
                          }}
                          className="!text-xs"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/about" className="!text-sm  py-3 border-b border-white/20  " onClick={() => setIsMobileMenuOpen(false)}>
                About Us
              </Link>
              
              <Link href="/careers" className="!text-sm  py-3 border-b border-white/20 " onClick={() => setIsMobileMenuOpen(false)}>
               Careers
              </Link>
              <Link href="/contact" className="!text-sm  py-3 border-b border-white/20 " onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>

              <div className=" py-3  flex flex-col gap-3">
                <Link href="#" className="!text-sm" onClick={() => setIsMobileMenuOpen(false)}>
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
