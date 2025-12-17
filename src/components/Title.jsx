import { motion } from "framer-motion";
import React from "react";

const Title = ({ title, subTitle, align }) => {
  return (
    <div
      className={`flex flex-col justify-center
     items-center text-center ${align === "left" && "md:items-start md:text-left"}`}
    >
      <motion.h1 initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} className="font-semibold text-[34px] md:text-[38px] font-bodoni text-[#00211E]">
        {title}
      </motion.h1>
      <motion.p initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} className="text-sm md:text-[15px] text-[#005C53] mt-2 max-w-156 font-dmsans">
        {subTitle}
      </motion.p>
    </div>
  );
};

export default Title;
