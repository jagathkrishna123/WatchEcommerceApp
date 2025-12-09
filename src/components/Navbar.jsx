// import React from "react";
// import { IoSearch } from "react-icons/io5";
// import { FiPhoneCall } from "react-icons/fi";
// import { MdEmail } from "react-icons/md";
// import { assets } from "../constants/assets";

// // Import your real assets
// // import Logo from "../assets/logo.png";
// // import UserIcon from "../assets/user.svg";
// // import HeartIcon from "../assets/heart.svg";
// // import CartIcon from "../assets/cart.svg";
// // import StoreIcon from "../assets/store.svg";

// const Navbar = () => {
//   return (
//     <header className="w-full">
//       {/* ----------- TOP BAR ----------- */}
//       <div className="w-full bg-[#00423D] text-white text-sm">
//         <div className="max-w-[1440px] mx-auto flex justify-between items-center py-2 px-4">
//           {/* Left */}
//           <div className="flex items-center gap-6">
//             <span className="flex items-center gap-2">
//               <FiPhoneCall className="text-[15px]" />
//               1800 257 8600
//             </span>

//             <span className="flex items-center gap-2">
//               <MdEmail className="text-[16px]" />
//               info@goldDiamonds.com
//             </span>
//           </div>

//           {/* Right */}
//           <span>IST (Mon - Sat) 10:00 AM to 6:00 PM</span>
//         </div>
//       </div>

//       {/* ----------- MAIN NAVBAR ----------- */}
//       <nav className="w-full bg-[#035E52] text-white py-1 shadow-md relative">
//         <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-6 px-4 bg-amber-600">
//           {/* Logo */}
          
//           <div className=" flex items-center">
//             <img
//               src={assets.logo}
//               alt="logo"
//               className="w-[150px] h-full object-contain absolute"
//             />
//           </div>

//           {/* Search Box */}
//           <div className="flex items-center w-full max-w-[600px] bg-white rounded-md px-3 py-2">
//             <IoSearch className="text-gray-600 text-lg mr-2" />
//             <input
//               type="text"
//               placeholder="Search Here"
//               className="w-full outline-none text-gray-700 text-sm"
//             />
//           </div>

//           {/* Right Icons */}
//           <div className="flex items-center gap-5 ml-auto">
//             <img src={assets.bellicon} alt="" />
//             <img src={assets.profileicon} alt="" />
//             <img src={assets.likeicon} alt="" />
//             <img src={assets.carticon} alt="" />
//             <img src={assets.likeicon} alt="" />
//             <div className="flex items-center gap-1 cursor-pointer">
//               <span>Our Stores</span>
//               <img src={assets.storeicon} alt="" />
//             </div>
//           </div>
//         </div>

//         {/* ----------- CATEGORY MENU ----------- */}
//         <div className="max-w-[1600px] mx-auto mt-3 px-4 flex items-center justify-center">
//           <ul className="flex items-center gap-8 text-sm tracking-wide uppercase">
//             {[
//               "OFFERS",
//               "LAXURY",
//               "LATEST",
//               "SMART WATCHES",
//               "SPORTS",
//               "CLASSIC",
//             ].map((item) => (
//               <li
//                 key={item}
//                 className={`cursor-pointer ${
//                   item === "OFFERS" ? "border-b border-white pb-1" : ""
//                 }`}
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { Search, Phone, Mail, Bell, User, Heart, ShoppingCart, Store, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    "OFFERS",
    "LUXURY",
    "LATEST",
    "SMART WATCHES",
    "SPORTS",
    "CLASSIC",
  ];

  return (
    <>
      <header className="w-full">
        {/* ----------- TOP BAR ----------- */}
        <div className="w-full bg-[#00423D] h-[75px] md:h-auto text-white text-sm font-dmsans text-[14px]">
          <div className="max-w-[1440px] mx-auto flex justify-between items-center py-2 px-4">
            {/* Left */}
            <div className="flex items-center gap-6 justify-between">
              <img src={Logo} alt="" className="w-[60px] -top-2 md:hidden"/>
              <span className="flex items-center gap-2 text-[11px] md:text-[14px]">
                <Phone className="w-4 h-4" />
                1800 257 8600
              </span>
              <span className="flex items-center gap-2 text-[11px] md:text-[14px]">
                <Mail className="w-4 h-4" />
                info@goldDiamonds.com
              </span>
            </div>
            {/* Right */}
            <span className="hidden md:block">IST (Mon - Sat) 10:00 AM to 6:00 PM</span>
          </div>
        </div>

        {/* ----------- MAIN NAVBAR ----------- */}
        <nav className="w-full bg-[#005C53] text-white shadow-md relative hidden md:block ">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-6 px-4 py-2 relative">
            {/* Menu Button (Mobile) */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-white p-2"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            {/* <div className="flex items-center flex-shrink-0">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-[#C9A961]"></div>
                  <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-[#8B7355]"></div>
                </div>
                <span className="text-[#C9A961] font-semibold text-xl tracking-wider mt-1">
                  AL NIBRAS
                </span>
              </div>
            </div> */}
            <div>
              <img src={Logo} alt="" className="absolute w-[160px] -top-2"/>
            </div>

            {/* Search Box */}
            <div className="hidden md:flex items-center flex-1 max-w-[800px] bg-white rounded-md px-3 py-2.5 mx-4">
              <Search className="text-gray-500 w-5 h-5 mr-2"/>
              <input
                type="text"
                placeholder="Search Hereeeeeeeeeeeee"
                className="w-full outline-none text-gray-700 text-sm placeholder:text-gray-400"
              />
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button className="hidden lg:block p-1.5 hover:opacity-80 transition">
                <Bell className="w-5 h-5" />
              </button>
              <button className="hidden lg:block p-1.5 hover:opacity-80 transition">
                <User className="w-5 h-5" />
              </button>
              <button className="hidden sm:block p-1.5 hover:opacity-80 transition">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-1.5 hover:opacity-80 transition relative">
                <ShoppingCart className="w-5 h-5" />
              </button>
              <button className="hidden lg:flex items-center gap-2 hover:opacity-80 transition">
                <span className="text-sm whitespace-nowrap font-dmsans">Our Stores</span>
                <Store className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* ----------- CATEGORY MENU ----------- */}
          <div className="hidden lg:block w-full">
            <div className="max-w-[1440px] mx-auto px-4">
              <ul className="flex items-center justify-center gap-8 tracking-wide uppercase py-1">
                {menuItems.map((item, index) => (
                  <li
                    key={item}
                    className={`cursor-pointer text-sm hover:opacity-80 transition font-dmsans pb-1 ${
                      index === 0 ? "border-b-2 border-white" : ""
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        {/* Mobile Search Bar */}
        {/* <div className="md:hidden bg-[#035E52] px-4 pb-3">
          <div className="flex items-center bg-white rounded-md px-3 py-2">
            <Search className="text-gray-500 w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Search Here"
              className="w-full outline-none text-gray-700 text-sm placeholder:text-gray-400"
            />
          </div>
        </div> */}
      </header>

      {/* ----------- SIDEBAR ----------- */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      >
        <div
          className={`fixed left-0 top-0 h-full w-[280px] bg-white shadow-xl transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 bg-[#035E52] text-white">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1">
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-[#C9A961]"></div>
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-[#8B7355]"></div>
              </div>
              <span className="text-[#C9A961] font-semibold text-lg tracking-wider mt-1">
                AL NIBRAS
              </span>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 hover:bg-[#047368] rounded transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Sidebar Menu */}
          <nav className="p-4">
            <ul className="space-y-1">
              {menuItems.map((item, index) => (
                <li key={item}>
                  <a
                    href="#"
                    className={`block px-4 py-3 rounded-md text-gray-700 hover:bg-[#035E52] hover:text-white transition ${
                      index === 0 ? "bg-[#035E52] text-white" : ""
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:text-[#035E52] transition"
              >
                <User className="w-5 h-5" />
                <span>My Account</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:text-[#035E52] transition"
              >
                <Heart className="w-5 h-5" />
                <span>Wishlist</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:text-[#035E52] transition"
              >
                <Store className="w-5 h-5" />
                <span>Our Stores</span>
              </a>
            </div>

            {/* Contact Info */}
            <div className="mt-6 pt-6 border-t border-gray-200 space-y-3 text-sm">
              <div className="flex items-center gap-3 px-4 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>1800 257 8600</span>
              </div>
              <div className="flex items-center gap-3 px-4 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>info@goldDiamonds.com</span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;