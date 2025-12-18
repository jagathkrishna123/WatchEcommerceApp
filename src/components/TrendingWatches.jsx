import React from "react";
import Title from "./Title";
import { assets, watchFeatures, WATCHFEATURES2 } from "../constants/assets";
import { motion } from "framer-motion";

const TrendingWatches = () => {
  return (
    <div className="flex flex-col h-full max-w-7xl mx-auto pt-10 px-4 sm:px-6 lg:px-0">
      
      <Title title="Shop on Trend" subTitle="We have every style at your affordable budget" align="left" />

      <div className="bg-white rounded-xl max-w-[1296px] min-h-[524px] mx-auto w-full mt-10 flex flex-col lg:flex-row gap-8 p-3 md:p-10 items-center justify-center">
        {/* Card 1..................................................................... */}
        <motion.div
           initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} transition={{type: "spring", stiffness: 120, damping: 20, mass: 0.9, delay: 0.2,}} viewport={{ once: true }}
         className="max-w-[344px] w-full max-h-[428px] h-full bg-white rounded-[21px] shadow-xl p-4 relative">
          <img src={assets.blob1} alt="" className="absolute top-0 left-0 w-[100%] opacity-100 pointer-events-none select-none rounded-[21px]" />
          <p className="font-dmsans relative z-[2] text-center font-medium text-[18px]">HUAWEI Watch 3 Pror</p>
          <img src={assets.watch1} alt="" className="relative z-[20] mx-auto mt-4 transition-transform duration-500 ease-out hover:scale-110" />
          {watchFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="flex items-center gap-3 my-4">
                <img src={item.icon} alt="" />
                <p className="text-[16px] font-dmsans text-[15px]">{item.title}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Card 2................................... */}
        <motion.div initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} transition={{type: "spring", stiffness: 120, damping: 20, mass: 0.9, delay: 0.2,}} viewport={{ once: true }}
         className="max-w-[380px] w-full h-[476px] bg-white rounded-[21px] shadow-xl p-4 relative">
          <img src={assets.blob2} alt="" className="absolute top-0 left-0 w-[100%] opacity-100 pointer-events-none select-none rounded-[21px]" />
          <p className="font-dmsans relative z-[2] text-center font-medium text-[20px]">HUAWEI Watch 3 Pro</p>
          <img src={assets.watch2} alt="" className="absolute left-[52%] top-[60%] -translate-x-1/2 -translate-y-1/2 z-[20] transition-transform duration-500 ease-out hover:scale-110" />
        </motion.div>

        {/* Card 3.................................... */}
        <motion.div
           initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} transition={{type: "spring", stiffness: 120, damping: 20, mass: 0.9, delay: 0.3,}}viewport={{ once: true }}
         className="max-w-[344px] w-full h-[428px] bg-white rounded-[21px] shadow-xl p-4 px-3 relative overflow-hidden">
          <img src={assets.blob3} alt="" className="absolute bottom-0 right-0 w-[80%] pointer-events-none select-none rounded-[21px]" />
          <p className="font-dmsans relative z-[2] text-center font-medium text-[18px]">HUAWEI Watch 3 Pro</p>
          <div className="relative z-[20] mt-6 flex items-center h-[calc(100%-48px)]">
            <div className="flex flex-col gap-4 pr-[120px]">
              {WATCHFEATURES2.map((item, index) => (
                <div key={index} className="flex items-center" style={{ width: item.width }}>
                  <div className="bg-[#005C53] w-[50px] h-[50px] aspect-square shrink-0  flex items-center justify-center z-10 rounded-md">
                    <img src={item.image} alt="" className="w-[28px]  md:w-[30px]" />
                  </div>
                  <div className="-ml-4 bg-[#E0E3E6] h-[36px] flex items-center px-5 rounded-r-lg w-full">
                    <p className="text-[14px] font-dmsans text-[#1E1E1E]">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <img src={assets.watch3} alt="" className=" absolute right-0 top-1/2 -translate-y-1/2 w-[250px] object-contain z-30 transition-transform duration-500 ease-out hover:scale-110" />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default TrendingWatches;
