import React from 'react'
import Navbar from './Components/Navbar'
import Page1 from './Components/Page1'
import Page_2 from './Components/Page_2'
import Page3 from './Components/Page3'
import Eyes from './Components/Eyes'
import Card from './Components/Card'
import Card2 from './Components/Card2'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll'
import './App.css'

//locomotive scroll effect is pending...

const App = () => {

    const scroll = new LocomotiveScroll

  // const scrollRef = useRef(null);

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //   });

  //   return () => {
  //     if (scroll) scroll.destroy();
  //   };
  // }, []);

  return (

    <>
    <div id="main" className='text-2xl w-full min-h-screen bg-zinc-800 text-white'>Ochi
    <Navbar/>
    <Page1/>
    <Page_2/>
    <Page3/>
   <Eyes/>
   <Card/>
   <Card2/>
   <Footer/>
   <locomotive-scroll/>
   
   

  
    
   
  
    
    </div>
    </>
  )
}

export default App