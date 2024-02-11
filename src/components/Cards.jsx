import React from 'react'

function Cards() {
  return (
    <div className='h-screen flex items-center gap-5 w-full bg-zinc-900 px-12'>
        <div className="cardcontainer relative flex items-center justify-center w-1/2 h-[55vh] rounded-xl bg-[#004D43]">
            <img  src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='text-[#CDEA68] text-sm px-3 absolute bottom-3 left-4 py-1 rounded-full border-2 border-[#CDEA68]'>&copy;2019-2024</button>
        </div>
        <div className="cardcontainer  w-1/2 h-[55vh]  flex gap-5">
            <div className='w-1/2 flex relative items-center justify-center h-full rounded-xl bg-[#242424]'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='text-sm px-3 absolute bottom-3 left-4 py-1 rounded-full border-2 '>Rating 5.0 on Clutch</button>
            </div>
            <div className='w-1/2 h-full relative rounded-xl flex items-center justify-center bg-[#212121]'>
                <img className='h-24' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='text-sm px-3 absolute bottom-3 left-4 py-1 rounded-full border-2 '>Business Bootcamp Alumni</button>
            </div>

        </div>
        
    </div>
  )
}

export default Cards