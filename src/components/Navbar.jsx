import React from "react";
import Logo from "../assets/logo.svg";
import { Search, Phone, Mail } from "lucide-react";
import { NAV_ACTIONS } from "../constants/assets";

const Navbar = () => {
  const menuItems = ["OFFERS", "LUXURY", "LATEST", "SMART WATCHES", "SPORTS", "CLASSIC"];

  return (
    <>
      <header className="w-full">
        {/* ----------- TOP BAR ----------- */}
        <div className="w-full bg-[#00423D] h-[75px] md:h-auto flex items-end text-white font-dmsans text-[14px]">
          <div className="max-w-[1440px] mx-auto flex justify-start md:justify-between items-center py-2 px-4 w-full">
            {/* Left................ */}
            <div className="flex items-center gap-1 justify-between w-full">
              <img src={Logo} alt="" className="w-[54px] md:w-[60px] md:hidden" />
              <span className="flex items-center gap-2 text-[12px] md:text-[14px]">
                <Phone className="w-3 h-3 md:w-4 md:h-4" />
                1800 257 8600
              </span>

              <span className="flex items-center gap-2 text-[12px] md:text-[14px]">
                <Mail className="w-3 h-3 md:w-4 md:h-4" />
                info@goldDiamonds.com
              </span>
            </div>

            {/* Right........... */}
            <span className="hidden md:block">IST (Mon - Sat) 10:00 AM to 6:00 PM</span>
          </div>
        </div>

        {/* ----------- MAIN NAVBAR ----------- */}
        <nav className="w-full bg-[#005C53] text-white shadow-md relative hidden md:block ">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-6 px-4 py-2 relative">
            <div className="w-[140px] relative">
              <img src={Logo} className="absolute -top-8" />
            </div>
            {/* Search....bar...............*/}
            <div className="hidden md:flex items-center flex-1 max-w-[800px] bg-white rounded-md px-3 py-2.5 mx-4 ml-3">
              <Search className="text-gray-500 w-5 h-5 mr-2" />
              <input type="text" placeholder="Search Here" className="w-full outline-none text-gray-700 text-sm placeholder:text-gray-400" />
            </div>
            {/*Icons........ */}
            <div className="flex items-center gap-4">
              {NAV_ACTIONS.map((item) => (
                <button key={item.id} className={`${item.wrapperClass} p-1.5 hover:opacity-80 transition ${item.relative ? "relative" : ""}`}>
                  {item.label && <span className="text-sm whitespace-nowrap font-dmsans">{item.label}</span>}
                  <img src={item.image} alt={item.alt} className="w-5 h-5 object-contain" />
                </button>
              ))}
            </div>
          </div>
          {/* ----------- CATEGORY MENU ----------- */}
          <div className="hidden lg:block w-full">
            <div className="max-w-[1440px] mx-auto px-4">
              <ul className="flex items-center justify-center gap-8 tracking-wide uppercase py-1">
                {menuItems.map((item, index) => (
                  <li key={item} className={`cursor-pointer text-sm hover:opacity-80 transition font-dmsans pb-1 ${index === 0 ? "border-b-2 border-white" : ""}`}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
