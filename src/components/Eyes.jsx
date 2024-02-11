import React, { useEffect, useState } from 'react'




function Eyes() {
  const [rotate,setRotate] = useState(0);
  useEffect(() =>{
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;
      var angle = Math.atan2(deltaY,deltaX) *(180/Math.PI)
      setRotate(angle-180)
    })
  })


  return (
    
    <div className='eyes w-full h-screen overflow-hidden'>
      <div className='relative  w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className='absolute gap-16 items-center flex justify-between top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
          <div className='bg-white flex items-center justify-center w-[15vw] h-[15vw] rounded-full'>
            <div className='bg-[#252525] relative w-[10vw] h-[10vw] rounded-full'>
            <h1 className='absolute top-1/2 left-1/2 font-semibold -translate-x-[50%] -translate-y-[50%]'>PLAY</h1>
            <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full'>
                <div className='bg-white w-[2vw] h-[2vw] rounded-full'>

                </div>
              </div>
            </div>
          </div>
          <div className='bg-white flex items-center justify-center w-[15vw] h-[15vw] rounded-full'>
            <div className='bg-[#252525] relative w-[10vw] h-[10vw] rounded-full'>
            <h1 className='absolute top-1/2 left-1/2 font-semibold -translate-x-[50%] -translate-y-[50%]'>PLAY</h1>
            <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full'>
             
                <div className='bg-white w-[2vw] h-[2vw] rounded-full'>


                </div>
              </div>
            </div>
          </div>

        
        
        </div>
      </div>
    </div>
  )
}

export default Eyes