import { motion } from 'framer-motion'
import React from 'react'

function Marqee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className='w-full py-20 rounded-t-[2vw] bg-[#004D43]'>
        <div className='text border-t-[1px] border-b-[1px]  uppercase pt-10 pb-10 border-zinc-200  flex whitespace-nowrap overflow-hidden'>
            <motion.h1 initial={{x: 0}} animate={{x:"-100%"}} transition= {{ease:"linear",repeat:Infinity,duration:8}} className='text-[15vw] pr-10 tracking-[-1.5vh] leading-none  font-["Founders Grotesk"] font-bold'>We are ochi</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x:"-100%"}} transition= {{ease:"linear",repeat:Infinity,duration:8}} className='text-[15vw] pr-10  tracking-[-1.5vh] leading-none ["Founders Grotesk"] font-bold'>We are ochi</motion.h1>
          
        </div>
        
    </div>
  )
}

export default Marqee