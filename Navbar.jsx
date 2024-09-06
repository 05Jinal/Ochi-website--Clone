import React from 'react'

function Navbar() {
  return (
    <div  className='fixed top-0 z-[999] w-full px-20 py-8 font-["neue montreal"] flex justify-between ite'>
    <div className="logo"></div>
    <div className="Links flex gap-10">
      {["Services", "Our Work","About us","Career","Contact Us"].map((item,index)=>(<a key={index}
      className={`text-lg capitalize font-light ${index===4 &&"ml-32"}`}>{item}</a>
      ))}
    </div>

    </div>
  )
}

export default Navbar
// data-scroll dats-scroll-speed="-.8"