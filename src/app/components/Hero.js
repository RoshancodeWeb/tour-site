import Image from 'next/image'
import React from 'react'
import Button from './Button'
const Hero = () => {
  return (
    <div className='w-full min-h-[90vh]  flex flex-col pl-5 bg-[url("/pattern-bg.png")] bg-cover  bg-bottom  pr-5 md:pl-10 md:pr-10 md:flex-row'>
      <div className='w-[100%] min-h-[45vh] relative flex flex-col md:gap-5'>
       <Image className='absolute top-0 left-0' src="/camp.svg" width={40} height={40}/>
       <p className='font-extrabold text-5xl  mt-12 md:mt-9 w-[60%]  md:text-7xl  md:w-[50%] leading-10'>Putuk Truno Camp Area</p>
       <p className='text-gray-500 md:text-xl md:w-[70%]'>We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app</p>
       <div>
        <Image src="/rating.svg" className='md:w-[120px]' width={70} height={20} />
        <p className='text-2xl'><span className='font-bold '>198k</span> Excellent Reviews</p>
       </div>
      <Button title="Download App" type="button"  name="btn_green"/>
      <div className='w-full flex justify-center mt-2 gap-2 md:w-[60%] md:text-xl'>
         <Image src="/play.svg" width={30} height={30} />
         <p className='font-bold'>How we work?</p>
      </div>
      </div>
      <div className='w-[100%] min-h-[45vh] '>
        <div className='w-[250px] h-[200px] lg:mt-8 bg-[#292C27] rounded-xl flex flex-col pl-5 pr-5'>
          <div className=' flex justify-between pt-8'>
            <p className='text-white/40 text-sm'>Location</p>
            <img src="/close_white.png" className='w-[20px] h-[19 px]'/>
          </div>
          <p className='text-white font-extrabold text-lg'>Aguas Calientes</p>
          <div className='w-full flex pt-10  '>
            <div className='w-[50%] h-16 '>
               <p className='text-white/40 text-sm'>Distance</p>
               <p className='text-white font-extrabold text-lg'>173.28 mi</p>
            </div>
            <div className='w-[50%] h-16 '>
               <p className='text-white/40 text-sm'>Elevation</p>
               <p className='text-white font-extrabold text-lg'>2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
