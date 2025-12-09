import React from "react";
import Heroimg from "../assets/heroimg.png";
import Bannerimg from "../assets/mainbanner.svg";
import { CUSTOMERSUPPORTDATA } from "../constants/assets";

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-cover bg-center py-2 md:py-12 flex flex-col relative overflow-hidden" style={{ backgroundImage: `url(${Heroimg})` }}>
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      {/* Hero content at the top-left */}
      <div className="max-w-[1440px] w-full mx-auto p-2 pl-6 z-10">
        <div className="max-w-2xl md:w-full">
          <p className="text-[38px] xs:text-[45px]  sm:text-[52px] lg:text-[56px] xl:text-[60px] font-unlock text-[#FFFFFF] leading-none md:leading-normal">Discover the Future of Watch E-Commerce: Unleash Your Style!</p>
          <p className="hidden md:block text-[14px] md:text-[16px] font-dmsans font-light max-w-md text-[#F1F1F1] ">Explore the next generation of watch shopping with our cutting-edge e-commerce platform, featuring extraordinary craftsmanship and one-of-a-kind styles.</p>
          <p className="md:hidden text-[14px] md:text-[16px] font-dmsans font-light max-w-md text-[#F1F1F1] ">Discover the future of watch shopping with our innovative e-commerce platform, showcasing unique styles and exceptional craftsmanship.</p>
        </div>
      </div>
      {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%]  md:-translate-y-[47%] z-20 w-[780px]  xl:w-[1300px]">
  <img src={Bannerimg} alt="watch" className="w-full h-auto drop-shadow-2xl" />
</div> */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[38%] md:-translate-y-[47%] z-20 w-[760px] sm:w-[780px] md:w-[900px] lg:w-[1100px] xl:w-[1300px]">
        <img src={Bannerimg} alt="watch" className="w-full h-auto drop-shadow-2xl" />
      </div>

      {/* Blue div stays at bottom */}
      <div className="backdrop-blur-xs md:backdrop-blur-md h-[200px] absolute w-full bottom-0 flex items-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-6 justify-items-center  mx-auto px-3 md:px-0">
          {CUSTOMERSUPPORTDATA.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-2 md:p-4 rounded-xl">
              <div className="bg-[#005C53] w-[32px] h-[32px] md:w-16 md:h-16 flex items-center justify-center rounded-full mb-1 md:mb-2">
                <img src={item.image} alt={item.title} className="w-[16px] md:w-[32px]" />
              </div>
              <p className="font-dmsans font-medium text-white text-[12px] md:text-[20px]">{item.title}</p>
              <p className="font-dmsans font-normal text-[#A5B2BA] text-[8px] md:text-[16px]">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
