import { motion } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";




const Page1 = () => {
  

  return (
    
    <div  className='w-full h-screen bg-zinc-900 pt-1 px-1' data-scroll-section>
         <div className="text-structure mt-52 px-6  ">
            {["We Create","Eye Opening","Presentations"].map((item,index)=>{
                return <div className='masker '>
                    <div className='w-fit flex pl-10 overflow-hidden  '>
                        {index===1 &&(
                            <motion.div initial={{width:0}} animate={{width:"18vh"}} transition={{ease:[0.76,0,0.24,1]}} className='w-[9vw] h-[5.7vw] mt-2 top-[1vw] bg-zinc-700 rounded-lg'></motion.div>
                        )}
                   
                    <h1 className='uppercase text-[12vh] font-semibold h-full -mb-[1vh] leading-[6vw] tracking-tighter '>{item}</h1>

                </div> </div>
            })}
            <div className='border-t-[2px]  border-zinc-700 mt-32 flex justify-between items-center py-5 px-20'>
            {["For public and private limited","From the first pitch to ipo"].map((item,index)=>(
            <p className='text-md text-lg  font-light tracking-tighter leading-none'>{item}</p>
        ))}
        
        <div className='px-5 py-1 border-[1px] border-zinc-400 font-light text-sm rounded-full pb-3 m-35 flex justify-between items-center'>Start the project
         
         
         </div>
       

            </div>
         </div>

    </div>
    
  )
}

export default Page1