import React, { useState } from "react";
import Heroimg from "../assets/heroimg.png";
import Bannerimg from "../assets/mainbanner.svg";
import { assets, CUSTOMERSUPPORTDATA, SIDEBARLINKS } from "../constants/assets";
import { X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    // <div
    //   className="w-full min-h-screen bg-cover bg-center py-2 md:py-12 flex flex-col relative overflow-hidden"
    //   style={{ backgroundImage: `url(${Heroimg})` }}>
    <div
      className="
   w-full
    h-auto
    min-h-[110svh]
    sm:min-h-[90svh]
    md:min-h-screen
    bg-cover bg-center
    py-2 md:py-8
    flex flex-col
    relative
    overflow-hidden
  "
      style={{ backgroundImage: `url(${Heroimg})` }}
    >
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* hamburger icon */}
      <div className="md:hidden max-w-[1440px] w-full mx-auto px-6 z-30 flex justify-end">
        <img src={assets.Hamburger} alt="Menu" className="w-6 h-6 cursor-pointer" onClick={() => setOpenSidebar(true)} />
      </div>
      <div className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${openSidebar ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setOpenSidebar(false)}></div>

      {/* ---------------- SIDEBAR ---------------- */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[280px] bg-[#00423D]
        transform transition-transform duration-300 ease-in-out
        ${openSidebar ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <X className="text-white w-6 h-6 cursor-pointer" onClick={() => setOpenSidebar(false)} />
        </div>

        {/* Sidebar Content */}
        <nav className="flex flex-col gap-6 px-6 mt-6 font-dmsans">
          {SIDEBARLINKS.map((link) => (
            <NavLink key={link.path} to={link.path} className={({ isActive }) => `text-lg transition ${isActive ? "text-[#00D1B2]" : "text-white hover:text-[#00D1B2]"}`}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* ---------------- HERO TEXT ---------------- */}
      <div className="max-w-[1440px] w-full mx-auto p-2 pl-6 z-10">
        <div className="flex flex-col gap-2 max-w-sm sm:max-w-md md:max-w-2xl md:w-full">
          <motion.p initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-[32px] min-[400px]:text-[42px] sm:text-[52px] lg:text-[56px] xl:text-[60px] font-unlock text-[#FFFFFF] leading-none md:leading-normal tracking-wide md:tracking-normal [word-spacing:4px] md:[word-spacing:0px]">
            Discover the Future of Watch <span>E-Commerce: Unleash Your Style!</span>
          </motion.p>

          <motion.p initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="hidden md:block text-[14px] md:text-[16px] font-dmsans font-light max-w-md text-[#F1F1F1]">
            Explore the next generation of watch shopping with our cutting-edge e-commerce platform, featuring extraordinary craftsmanship and one-of-a-kind styles.
          </motion.p>

          <p className="md:hidden text-[14px] font-dmsans font-light max-w-md text-[#F1F1F1]">Discover the future of watch shopping with our innovative e-commerce platform, showcasing unique styles and exceptional craftsmanship.</p>
        </div>
      </div>

      {/* ---------------- HERO WATCH IMAGE ---------------- */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.9, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 
        -translate-y-[32%] sm:-translate-y-[42%] md:-translate-y-[47%] 
        z-20 w-[760px] sm:w-[780px] md:w-[900px] lg:w-[1100px] xl:w-[1300px]"
      >
        <img src={Bannerimg} alt="watch" className="w-full h-auto drop-shadow-2xl" />
      </motion.div>

      {/* bottom section.................................... */}
      <div className="backdrop-blur-xs md:backdrop-blur-md h-[200px] absolute w-full bottom-0 flex items-center">
        <div
          className="grid grid-cols-2 max-w-4xl mx-auto md:grid-cols-4 
          gap-x-6 gap-y-6 justify-items-center w-full px-3 md:px-0"
        >
          {CUSTOMERSUPPORTDATA.map((item, index) => (
            <motion.div
              initial={{
                x: index < 2 ? -30 : 30,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              key={index}
              className="flex flex-col items-center text-center p-2 md:p-4 rounded-xl"
            >
              <div className="bg-[#005C53] w-[32px] h-[32px] md:w-16 md:h-16 flex items-center justify-center rounded-full mb-1 md:mb-2">
                <img src={item.image} alt={item.title} className="w-[16px] md:w-[32px]" />
              </div>

              <p className="font-dmsans font-medium text-white text-[12px] md:text-[20px]">{item.title}</p>

              <p className="font-dmsans font-normal text-[#A5B2BA] text-[8px] md:text-[16px]">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
