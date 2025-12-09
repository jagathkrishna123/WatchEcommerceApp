// import React from 'react'
// import Title from '../components/Title'
// import { TRENDING_PRODUCTS } from '../constants/assets'

// const TrendingWatches = () => {
//   return (
//     <div className='flex flex-col max-w-[1440px] w-full mx-auto pt-6 pb-10'>
//     <Title title="Shop on Trend" subTitle="We have every style at your affordable budget" align="left"/>
//     <div className="w-full flex justify-center py-10">
//       <div className="max-w-[1300px] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">

//         {TRENDING_PRODUCTS.map((item) => (
//           <div
//             key={item.id}
//             className="relative bg-white rounded-3xl shadow-[0px_4px_12px_rgba(0,0,0,0.1)] p-6 overflow-hidden h-[420px]"
//           >
//             {/* Blob background */}
//             {item.bgShape && (
//               <img
//                 src={item.bgShape}
//                 alt=""
//                 className="absolute top-0 left-0 w-[70%] opacity-100 pointer-events-none select-none"
//               />
//             )}

//             {/* Title */}
//             <h2 className="text-[20px] font-semibold mb-2 relative z-20">
//               {item.title}
//             </h2>

//             {/* Product Image */}
//             <img
//               src={item.image}
//               alt={item.title}
//               className="w-[200px] mx-auto relative z-20 mt-2"
//             />

//             {/* FEATURES (Card 1) */}
//             {item.features && (
//               <ul className="relative z-20 mt-4 space-y-3 text-[14px] text-gray-700">
//                 {item.features.map((feat, i) => (
//                   <li key={i} className="flex items-center gap-3">
//                     <span className="text-xl">•</span>
//                     {feat}
//                   </li>
//                 ))}
//               </ul>
//             )}

//             {/* ICONS (Card 3) */}
//             {item.icons && (
//               <div className="relative z-20 mt-4 space-y-4">
//                 {item.icons.map((ic, i) => (
//                   <div key={i} className="flex items-center gap-4">
//                     <div className="w-12 h-12 bg-[#E0F3F4] rounded-xl flex items-center justify-center">
//                       <img src={ic.icon} alt={ic.label} className="w-6 h-6" />
//                     </div>
//                     <p className="text-[14px] text-gray-700">{ic.label}</p>
//                   </div>
//                 ))}
//               </div>
//             )}

//           </div>
//         ))}

//       </div>
//     </div>

//     </div>
//   )
// }

// export default TrendingWatches

import React from "react";
import Title from "./Title";
import { assets, watchFeatures, WATCHFEATURES2 } from "../constants/assets";

const TrendingWatches = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto pt-10">
      <Title title="Shop on Trend" subTitle="We have every style at your affordable budget" align="left" />

      <div className="bg-white rounded-xl max-w-[1296px] min-h-[524px] mx-auto w-full mt-10 flex flex-col lg:flex-row gap-8 p-10 items-center justify-center">
        {/* Card 1 */}
        <div className="w-[344px] h-[428px] bg-white rounded-[21px] shadow-xl p-4 relative">
          <img src={assets.blob1} alt="" className="absolute top-0 left-0 w-[100%] opacity-100 pointer-events-none select-none rounded-[21px]" />
          <p className="font-dmsans relative z-[2] text-center font-medium text-[18px]">HUAWEI Watch 3 Pror</p>
          <img src={assets.watch1} alt="" className="relative z-[20] mx-auto mt-4" />
          {watchFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="flex items-center gap-3 my-4">
                <img src={item.icon} alt="" />
                <p className="text-[16px] font-dmsans text-[15px]">{item.title}</p>
              </div>
            );
          })}
        </div>

        {/* Card 2 */}
        {/* <div className="w-[380px] h-[476px] bg-white rounded-[21px] shadow-lg p-4 relative">
          <img src={assets.blob2} alt="" className="absolute top-0 left-0 w-[100%] opacity-100 pointer-events-none select-none rounded-[21px]"/>
          <p className="font-dmsans relative z-[2] text-center font-medium text-[20px]">HUAWEI Watch 3 Pror</p>
          <img src={assets.watch2} alt="" className="relative z-[20] block mx-auto mt-12 pl-4"/>
        </div> */}

        <div className="w-[380px] h-[476px] bg-white rounded-[21px] shadow-xl p-4 relative">
          <img src={assets.blob2} alt="" className="absolute top-0 left-0 w-[100%] opacity-100 pointer-events-none select-none rounded-[21px]" />

          <p className="font-dmsans relative z-[2] text-center font-medium text-[20px]">HUAWEI Watch 3 Pro</p>

          {/* <img src={assets.watch2} alt="" className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 z-[20]" /> */}
          <img src={assets.watch2} alt="" className="absolute left-[52%] top-[60%] -translate-x-1/2 -translate-y-1/2 z-[20]" />
        </div>

        {/* Card 3 */}
        {/* <div className="w-[344px] h-[428px] bg-white rounded-[21px] shadow-lg p-4 relative">
          <img src={assets.blob3} alt="" className="absolute bottom-0 right-0 w-[80%] opacity-100 pointer-events-none select-none rounded-[21px]" />
          <p className="font-dmsans relative z-[2] text-center font-medium text-[18px]">HUAWEI Watch 3 Pror</p>
          <img src={assets.watch3} alt="" className="relative z-[20] mx-auto mt-4" />
        </div> */}

        <div className="w-[344px] h-[428px] bg-white rounded-[21px] shadow-xl p-4 px-3 relative">
          <img src={assets.blob3} alt="" className="absolute bottom-0 right-0 w-[80%] opacity-100 pointer-events-none select-none rounded-[21px]" />

          <p className="font-dmsans relative z-[2] text-center font-medium text-[18px]">HUAWEI Watch 3 Pro</p>

          {/* CONTENT */}
          <div className="flex items-center relative z-[20] mt-4">
            <div className="flex flex-col space-y-3 shrink-0">
              {WATCHFEATURES2.map((item, index) => (
                <div key={index} className="flex items-center gap-1 bg-[#E0E3E6] rounded-lg px-0 py-1" style={{ width: item.width }}>
                  <div className="bg-[#005C53] w-8 h-8 rounded-lg flex items-center justify-center">
                    <img src={item.image} alt="" className="w-4" />
                  </div>
                  <p className="text-[14px]">{item.title}</p>
                </div>
              ))}
            </div>

            <img src={assets.watch3} alt="" className="ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingWatches;
