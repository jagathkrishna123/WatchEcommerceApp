import React from 'react'
import { assets } from '../constants/assets'

const DownloadAppBanner = () => {
  return (
    <div className='w-full flex flex-col mt-10 px-4'>
        <div className='max-w-7xl mx-auto w-full min-h-[400px] px-4 border border-[#00211E] rounded-[24px] bg-[#52908A] flex flex-col items-center justify-center gap-3'>
            <p className='text-center text-[32px] sm:text-[42px] md:text-[50px] font-semibold font-poppins text-[#F1F1F1]'>Download Our Mobile App</p>
            <p className='max-w-2xl w-full mx-auto font-medium text-[12px] md:text-[16px] font-poppins text-[#A5B2BA] text-center'>Get the top E-commerce app on your phone! We’ve got you covered with a super user-friendly experience and tons of events to check out. Dive in and explore!</p>
            <div className='flex flex-row gap-4 mt-8'>
                <img src={assets.playstore} alt="" className='w-[130px] md:w-full'/>
                <img src={assets.appstore} alt="" className='w-[130px] md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default DownloadAppBanner