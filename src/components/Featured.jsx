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
                <div className='cards w-full gap-10 flex  '>

                    <div className='cardcontainer w-1/2 h-full'>
                        <div className="  card relative w-full  h-[75vh] rounded-lg">
                            <h1 className='text-8xl text-[#CDEA68] tracking-tighter leading-none absolute left-full -translate-x-1/2  top-1/2 -translate-y-1/2'>
                                {"FYDY".split("").map((item , index)=>
                                    <span>{item}</span>
                                )}
                            </h1>
                            <img className='w-full h-full rounded-lg bg-cover ' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                        </div>
                    </div>
                    <div className='cardcontainer w-1/2 h-full'>
                        <div className="card w-full relative  h-[75vh] rounded-lg">
                            <h1 className='text-8xl text-[#CDEA68]  tracking-tighter leading-none absolute -translate-x-1/2  top-1/2 -translate-y-1/2'>
                            {"VISE".split("").map((item , index)=>
                                    <span>{item}</span>
                                )}
                            </h1>
                            <img className='w-full h-full  rounded-lg bg-cover ' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Featured