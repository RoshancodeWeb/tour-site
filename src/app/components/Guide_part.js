import React from 'react'

const Guide_part = () => {
  return (
    <div className='w-full h-[40vw] mb-24 md:mb-10  relative  bg-[url("/boat.png")] bg-cover mt-20 '>
       
       <div className='w-[300px] h-[250px] rounded-2xl top-[50%] pl-4 pr-10  md:left-[0%] md:translate-x-0 md:ml-10 translate-y-[-50%] left-[50%] translate-x-[-50%] z-40 absolute bg-white shadow-[0_10px_40px_10px_rgba(0,_0,_0,_0.43)]'>
       <div className=' flex justify-between pt-8'>
            <p className='text-black/60 text-sm'>Destination</p>
            <p className='w-[20px] h-[19px] text-green-700 font-bold'>48km</p>
          </div>
          <p className='text-black font-extrabold text-lg'>Aguas Calientes</p>
          <div className='w-full flex pt-10  '>
            <div className='w-[50%] h-16 '>
               <p className='text-black/60 text-sm'>Distance</p>
               <p className='text-black font-extrabold text-lg'>173.28 mi</p>
            </div>
            <div className='w-[50%] h-16 '>
               <p className='text-black/60 text-sm'>Elevation</p>
               <p className='text-black font-extrabold text-lg'>2.040 km</p>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Guide_part

