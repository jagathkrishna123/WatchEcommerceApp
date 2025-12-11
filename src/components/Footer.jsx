// import React from 'react'
// import { assets } from '../constants/assets'

// const Footer = () => {
//   return (
//     <div className='w-full h-[364px] bg-[#A3C4C1] mt-10'>
//         <img src={assets.logo} alt="" />

//     </div>
//   )
// }

// export default Footer

import React from "react";
import { assets } from "../constants/assets";
import { Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full bg-[#A3C4C1] mt-10 py-12 px-6 md:px-20">
      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row justify-between gap-10 font-dmsans text-[#003F38]">
        {/* Logo */}
        <div>
          <img src={assets.logo} alt="logo" className="h-14 object-contain" />
        </div>

        {/* Company */}
        <div>
          <h3 className="font-medium  text-[17px]">Company</h3>
          <ul className="mt-3 space-y-2">
            <li>Products</li>
            <li>About</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-medium text-[17px]">Legal</h3>
          <ul className="mt-3 space-y-2">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-medium text-[17px]">Link Up with Friends!</h3>
          <ul className="mt-3 space-y-2">
            <li className="flex gap-2 items-center">
              <img src={assets.instalogo} alt="" /> Instagram
            </li>
            <li className="flex gap-2 items-center">
              <img src={assets.youtube} alt="" /> YouTube
            </li>
            <li className="flex gap-2 items-center">
              <img src={assets.linkedinlogo} alt="" /> LinkedIn
            </li>
          </ul>
        </div>

        {/* Right section */}
        <div className="flex flex-col gap-4">
          <h3 className="font-medium font-dmsans text-[17px]">Questions? Comments? Concerns?</h3>
          <div className="flex justify-end">
            <button className="bg-[#0C483F] text-white px-2 py-2 rounded-md w-[100px]">Help</button>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <p className="text-center mt-10 text-[#003F38] font-dmsans text-[16px]">© 2025 Gold E Commerce All rights reserved.</p>
    </div>
  );
};

export default Footer;
