
import React, { useState } from "react";
import Title from "./Title";
import { assets, DEMANDEDITEMS } from "../constants/assets";
import likedicon from "../assets/likedicon.svg";

const DemandedItems = () => {
  const [liked, setLiked] = useState({});

  const handleLike = (index) => {
    setLiked((prev) => ({...prev,[index]: true,}));
  };

  return (
    <div className="flex flex-col max-w-7xl w-full mx-auto px-4 pt-6 pb-10 mb-10">
      <Title title="Top Demanded Items" subTitle="234 New item added" align="left" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 mt-6">
        {DEMANDEDITEMS.map((item, index) => (
          <div key={index} className=" relative flex flex-col items-center bg-white rounded-2xl border border-[#A3C4C1] p-4 md:p-3 shadow-xl hover:shadow-lg transition">
            <img src={liked[index] ? likedicon : assets.likeiconn} alt="like" className="w-[22px] absolute top-3 right-3 cursor-pointer z-10" onClick={() => handleLike(index)} />
            <div className="w-full h-[160px] md:h-[260px] flex items-center justify-center">
              <img src={item.image} alt="" className="w-full h-full object-contain transition-transform duration-500 ease-out hover:scale-105" />
            </div>
            <p className="font-medium text-[14px] md:text-[16px] font-dmsans text-[#010F17] mt-3 text-center">{item.productName}</p>

            <p className="text-[#757C81] font-normal text-[11px] md:text-[13px] font-dmsans text-center">{item.brand}</p>

            <p className="text-[16px] md:text-[18px] font-bold text-[#003F38] font-dmsans mt-3">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DemandedItems;
