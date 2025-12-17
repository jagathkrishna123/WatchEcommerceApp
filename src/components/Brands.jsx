import React from "react";
import Title from "./Title";
import { BRANDDATA } from "../constants/assets";

const Brands = () => {
  return (
    <div className="flex flex-col max-w-7xl w-full mx-auto pt-6 px-4 pb-10">
      <Title title="Shop By Brands" subTitle="234 New item added" align="left" />
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 bg-slate-100/80 p-6 md:p-10 rounded-xl mt-6">
        {BRANDDATA.map((item, index) => (
          <img key={index} src={item.image} alt="" className="w-[70px] sm:w-[80px] md:w-[90px] xl:w-58 object-contain mx-auto" />
        ))}
      </div>
    </div>
  );
};

export default Brands;
