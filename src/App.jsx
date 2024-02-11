import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Marquee from './components/Marqee'; // Renamed from Marqee
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import VideoPlayer from './components/Myvideo';

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      // Add your Locomotive Scroll configuration options here
    });
    
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div className='w-full min-h-screen bg-zinc-900 overflow-hidden text-white'>
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Contact />
      <Footer />
      {/* <VideoPlayer/> */}
    </div>
  );
}

export default App;
