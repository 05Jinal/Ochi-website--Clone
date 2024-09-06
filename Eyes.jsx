import React, { useEffect, useState } from 'react'

function Eyes() {
    const [rotate, setrotate] = useState(0);
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
        let mouseX=e.clientX;
        let mouseY=e.clientY;

        let deltaX=mouseX-window.innerWidth/2;
        let deltaY=mouseY-window.innerHeight/2;
         
        var angle=Math.atan2(deltaY,deltaX)* (180/Math.PI)
        setrotate(angle-180);

        })
    })
  return (
    
 <div className='eyes w-full h-screen mb-10  overflow-hidden cursor-pointer '>
    <div className='relative w-full h-full bg-cover  bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
    <div className='absolute flex gap-9 top-1/2 left-1/2 -translate-x-[30%] -translate-y-[20%] w-1/2 h-80 bg-'>

    <div className=' flex items-center justify-center w-[28vh] h-[28vh] rounded-full bg-white'>
    <div className=' flex items-center justify-center relative w-2/3 h-2/3 rounded-full  bg-zinc-900'>
    <h1 className='font-mono font-extralight text-zinc-300 uppercase '> play</h1>
  
    <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute flex  top-1/2 left-1/2 w-full h-5 -translate-x-[50%] -translate-y-[50%]  rotate-[0deg] '>
            <div className='w-5 h-5 rounded-full  bg-white'> </div>
    </div>
   
    </div>
    </div>
    <div className=' flex items-center justify-center w-[28vh] h-[28vh] rounded-full  bg-white'>
    <div className='  flex items-center justify-center relative w-2/3 h-2/3 rounded-full  bg-zinc-900'>
    <h1 className='font-mono font-extralight text-zinc-300 uppercase '> play</h1>
    <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 w-full h-5 -translate-x-[50%] -translate-y-[50%]  rotate-[0deg] '>
            <div className='w-5 h-5 rounded-full  bg-white'> </div>
    </div>
    </div>
    </div>
  
    </div>
    </div>
    </div>

  )
}

export default Eyes