import { motion } from 'framer-motion'
import React from 'react'

function Landing() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.5" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-40 px-20  tracking-tighter'>
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return <div className='masker  flex items-center'>
            {index === 1 && (<motion.div initial={{ width: 0 }} transition={{ ease: [0.76, 0, 0.24, 1],  duration:1}} animate={{ width: "9vw" }} className='w-[9vw] h-[5vw]'>
              <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
            </motion.div>)}
            <h1 className='leading-[6vw]  uppercase text-[7.5vw] font-semibold font-["Founders Grotesk"]'>{item}</h1>

          </div>
        })}



      </div>
      <div className='border-t-2 border-zinc-800 mt-32 flex justify-between items-center py-5 px-20'>
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) =>
        (<p className='text-md font-light leading-none'>{item}</p>
        ))}
        <div className="start">
          <div className='px-4 py-2 border-[1px] font-light border-zinc-500 rounded-full'>Start the project</div>
        </div>
      </div>


    </div>
  )
}

export default Landing