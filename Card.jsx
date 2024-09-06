import { motion, useAnimation } from 'framer-motion';
import React, { useState } from 'react'
import { GoDotFill } from "react-icons/go";

function Card() {

const [transitionState, setTransitionState] = useState(false);

const cards=[useAnimation(), useAnimation()];

const handleHover=(index)=>{
    cards[index].start({y:"0"});

}
const handleHoverend=(index)=>{
    cards[index].start({y:"100%"});

}
const handlehoveron=(index)=>{
    cards[index].start({y:"100%"});

}



  return (
 

    <div className='w-full   px-10 pb-8 '>
        <h1 className='text-6xl'>Featured Projects</h1>
        <div className='line border-t-[1px] bg-zinc-700 mt-20'></div>

        <div className='cards flex justify-center  gap-5 w-full '>
        
            <motion.div onMouseEnter transition={{}}
            onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverend(0)}className='cardcontainer w-1/2 h-[70vh] mt-8 rounded-lg mb-10'>
            <h1 className='pb-5 text-base inline-flex gap-0 leading-none'> <GoDotFill />FYDE</h1>
            <div className='card w-full h-full bg-cover rounded-xl relative'
            style={{backgroundImage:"url(https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png)"}}> 
            <h1 className= 'absolute flex overflow-hidden right-0 top-1/2  translate-x-1/2 -translate-y-1/2 text-[#CDEA68] font-semibold   text-7xl leading-none tracking-tighter z-[9] '>{"FYDE".split("").map((item,index)=>
            <motion.span initial={{y:"100%"}} 
            animate={cards[0]} 
            transition={{ease:[0.22, 1, 0.36, 1],delay:index*.05}}
            className='inline-block'
             >{item}</motion.span>)}</h1>
            </div>
            </motion.div>


            <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverend(1)}className='cardcontainer w-1/2 h-[70vh] mt-8 rounded-lg mb-10'>
            <h1 className='pb-5 text-base inline-flex gap-0 leading-none'> <GoDotFill /> VISE</h1>
            
            <div className='card w-full h-full bg-cover rounded-xl relative'style={{backgroundImage:"url(https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg)"}}> 
            <h1 className= 'absolute flex overflow-hidden right-full top-1/2  translate-x-1/3 -translate-y-1/2 text-[#CDEA68] font-semibold   text-7xl leading-none tracking-tighter z-[9] '>{"VISE".split("").map((item,index)=>
            <motion.span initial={{y:"100%"}} 
            animate={cards[1]} 
            transition={{ease:[0.22, 1, 0.36, 1],delay:index*.05}}
            className='inline-block'
             >{item}</motion.span>)}</h1>
            </div>
            </motion.div>
            
        </div>
        </div>
  )
}

export default Card

