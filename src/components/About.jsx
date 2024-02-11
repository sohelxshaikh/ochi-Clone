import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed = "-0.1" className='w-full py-20 rounded-t-3xl bg-[#CDEA68] '>
        <h1 className=' px-20 text-[#212121] text-5xl border-b-[1px] font-["Neue Montreal] border-[#2121213f] pb-16'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='Wrapper flex py-4'>
            <div className="left px-20 w-[50vw]">
            <h1 className='text-[#212121]  font-blod text-5xl'>Our approach:</h1>
            <button className='px-10 py-4 bg-zinc-900 mt-7 rounded-full text-white' >Read More</button>

            </div>
            <div className="right px-6 w-50 ">
                <img className=' rounded-[10px] ' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About