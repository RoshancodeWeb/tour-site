import Image from 'next/image'
import React from 'react'

const GetApp = () => {
  return (
    <div className='w-full min-h-fit md:flex  pt-10 pd-10 pb-5 pl-8 pr-8 bg-[url("/pattern.png")] bg-cover bg-no-repeat mt-5 bg-center'>
       <div className='w-full h-[50%] md:w-[50%] '>
        <p className='text-3xl text-white font-extrabold pb-16 md:text-7xl'>Get for free <br></br>now!</p>
        <p className='text-white pb-14'>Available on iOS and Android</p>
         <button className='bg-white w-full py-3 flex  gap-2 justify-center items-center rounded-full'>
          <Image className='' src="/apple.svg" width={30}  height={30} /> 
          <label className=' text-[#30AF5B] text-bold'>App Store</label>
         </button>
         <button className='border-2 w-full   py-3 mt-5 gap-2 flex justify-center items-center rounded-full'>
          <Image className='' src="/android.svg" width={30}  height={30} /> 
          <label className='text-white text-bold'>Play Store</label>
         </button>

       </div>
       <div className='w-full min-h-fit pt-20 md:pt-0 md:w-[50%]'>
             <Image src="/phones.png" width={250} height={400} className='mx-auto'/>
       </div>
    </div>
  )
}

export default GetApp
