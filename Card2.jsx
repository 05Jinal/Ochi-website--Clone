import React from 'react'

function Card2() {
  return (
    <div className=' w-full h-screen bg-zinc-200'>
        <div className='cardcontainer w-2/2 h-[55vh] flex gap-5'>
        <div className='card relative w-full h-full bg-[#004D43] mt-20 ml-12 rounded-xl flex items-center justify-center'>
        <img  className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" ></img>
        <button className=' size-22 w-1/8 absolute left-10 bottom-6 text-[#CDEA68] border-[2px] border-[#CDEA68] rounded-full pr-3 pl-3 font-semibold text-sm pt-1 pb-1'>@2019-2022</button></div>

        <div className='card relative w-1/2 h-full bg-[#212121] mt-20 ml-15 rounded-xl flex items-center justify-center'>
        <img  className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" ></img>
        <button className=' size-21 w-1/8 absolute left-10 bottom-6 text-zinc-300 border-[2px] border-zinc-400 rounded-full pr-3 pl-3 font-semibold text-sm pt-1 pb-1'>RATING 5.0 ON CLUTCH</button></div>

        <div className='card relative w-1/2 h-full bg-[#212121] mt-20 mr-12 rounded-xl flex items-center justify-center'> <img  className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" ></img>
        <button className=' size-21 w-1/8 absolute left-10 bottom-6 text-zinc-300 border-[2px] border-zinc-400 rounded-full pr-3 pl-3 font-semibold text-sm pt-1 pb-1'>BUSINESS BOOTCAMP ALUMNI</button></div>
        </div>
    
       
    </div>
  )
}

export default Card2


