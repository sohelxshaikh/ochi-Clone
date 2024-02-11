import React from 'react'
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Marqee from './components/Marqee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Contact from './components/Contact';
import Footer from './components/Footer';

import LocomotiveScroll from 'locomotive-scroll';




function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-zinc-900 overflow-hidden text-white'>
      <Navbar />
      <Landing />
      <Marqee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;