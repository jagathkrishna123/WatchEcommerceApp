

import React, { useState } from "react";
import likedicon from "../assets/likedicon.svg";
import { assets, RECENTSEARCHS } from "../constants/assets";
import Title from "./Title";


const RecentSearch = () => {
  const [liked, setLiked] = useState(Array(RECENTSEARCHS.length).fill(false));

  const handleLike = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  return (
    <div className="flex flex-col max-w-7xl mx-auto w-full px-4 pt-6 pb-10 mb-10">
      <Title title="Recent Searched" subTitle="234 New item added" align="left" />
      <div className="flex gap-5 overflow-x-auto scrollbar-hide pt-6 pb-4">
        {RECENTSEARCHS.map((item, index) => (
          <div key={index}  className=" min-w-[230px] md:min-w-[260px] relative flex flex-col items-center bg-white  rounded-2xl  border border-[#A3C4C1]  p-4 md:p-3  shadow-xl hover:shadow-lg transition">
            <img
              src={liked[index] ? likedicon : assets.likeiconn}
              alt="like"
              className="w-[22px] absolute top-3 right-3 cursor-pointer"
              onClick={() => handleLike(index)}
            />

            {/* PRODUCT IMAGE */}
            <div className="w-full h-[160px] md:h-[260px] flex items-center justify-center">
              <img src={item.image} alt="" className="w-full h-full object-contain" />
            </div>

            {/* DETAILS */}
            <p className="font-medium text-[14px] md:text-[16px] font-dmsans text-[#010F17] mt-3 text-center">
              {item.productName}
            </p>

            <p className="text-[#757C81] font-normal text-[11px] md:text-[13px] font-dmsans text-center">
              {item.brand}
            </p>

            <p className="text-[16px] md:text-[18px] font-bold text-[#003F38] font-dmsans mt-3">
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSearch;
