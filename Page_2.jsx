import { motion } from 'framer-motion'
import LocomotiveScroll from 'locomotive-scroll'
import React from 'react'

function Page_2() {


const scroll = new LocomotiveScroll();
const target = document.querySelector('[data-scroll-container]');

scroll.scrollTo(target);

  return (
   
   
    <div data-scroll data-scroll-speed="-2" data-scroll-container className='w-full  bg-[#004D43] px-10 py-20 '>
    <span className='  text border-t-2  border-b-2 border-zinc-400 flex align-top  pr-20 overflow-hidden whitespace-nowrap   '>

        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='text-[27vw] align-block align-top leading-none font-["Alfa Slab One"] font-semibold uppercase  ' >we are ochi</motion.h1>

        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='text-[27vw] align-block align-top leading-none font-["Alfa Slab One"] font-semibold uppercase ' >we are ochi</motion.h1>

        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='text-[27vw] align-block align-top leading-none font-["Alfa Slab One"] font-semibold uppercase' >we are ochi</motion.h1>
        </span>
</div>

   
  )
}

export default Page_2