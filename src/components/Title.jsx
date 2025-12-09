import React from 'react'

const Title = ({title, subTitle, align}) => {
  return (
    <div className={`flex flex-col justify-center
     items-center text-center ${align === "left" && "md:items-start md:text-left"}`}>
        <h1 className='font-semibold text-[34px] md:text-[38px] font-bodoni text-[#00211E]'>{title}</h1>
        <p className='text-sm md:text-[15px] text-[#005C53] mt-2 max-w-156 font-dmsans'>{subTitle}</p>
    </div>
  )
}

export default Title

        //   <Title title="What Our Customer Says" subTitle="Discover why disxerning travelers choose stayVenture for their luxury accomodations around the world"/>
