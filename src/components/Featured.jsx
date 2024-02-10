import React from 'react'

function Featured() {
    return (
        <div className='w-full py-10  '>
            <div className='w-full px-10 border-b-[1px] pb-20 border-zinc-500'>
                <h1 className='text-7xl font-["Neue Montreal"] tracking-tighter'>Featured Project</h1>
            </div>
            <div className="w-full px-20">
           <div>
           <h1 className=' py-5 '>
FYDE</h1>
           </div>
                <div className='cards w-full gap-10 flex '>
                    
                    <div className='w-1/2 h-full'>
                        <div className="card w-full overflow-hidden h-[75vh] rounded-lg bg-red-700">
                            <img className='w-full h-full  rounded-lg bg-cover '  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                        </div>
                    </div>
                    <div className='w-1/2 h-full'>
                        <div className="card w-full overflow-hidden h-[75vh] rounded-lg bg-red-700">
                            <img className='w-full h-full  rounded-lg bg-cover '  src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Featured