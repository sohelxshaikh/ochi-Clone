import React from 'react'
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Marqee from './components/Marqee';
import About from './components/About';

function App() {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar/>
      <Landing/>
      <Marqee/>
      <About/>
    </div>
  )
}

export default App;