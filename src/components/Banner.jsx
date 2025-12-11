import React from "react";
import banner from "../assets/banner.svg";

const Banner = () => {
  return (
    <div className="w-full flex justify-center ">
      {/* Max width wrapper */}
      <div className="relative w-full max-w-7xl px-4">
        {/* Banner Image */}
        <img src={banner} alt="banner" className="w-full h-auto object-cover rounded-[8px]" />

        {/* Text on top */}
        <div className="absolute inset-0 flex flex-row items-center  text-white justify-end px-18">
          <div className="max-w-xl w-full text-right md:text-left">
            {" "}
            <h1 className="text-[13px] md:text-[48px] font-semibold drop-shadow-xl font-dmsans">Elevate Every Moment with Hamas Watches!</h1>
            <p className="text-[#DBF227] font-dmsans font-bold text-[11px] md:text-[24px] underline decoration-1 underline-offset-4">30% Off on Your First Order</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
