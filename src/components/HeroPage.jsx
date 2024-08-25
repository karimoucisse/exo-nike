import React from 'react'
// mt-[40px] mx-auto max-w-[90rem] px-4 sm:px-6
const HeroPage = ({img, title}) => {
  return (
	<div class="relative h-[500px] w-full">
    <div class="bg-black h-full w-full left-0 right-0 absolute z-10 opacity-15">
    </div>
    <img src={img} alt="hero1" class="object-cover h-full w-full"/>
    <p class="px-[20px] absolute bottom-[10%] text-[#FAF9F8] font-semibold text-xl z-20">{title}</p>
  </div>
  )
}

export default HeroPage
