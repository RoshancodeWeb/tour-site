import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <div className='w-full min-h-[30vh] mt-10 pl-10 pr-10 lg:flex lg:items-center'>
      <div className='lg:w-[50%]'>
        <Image src="/camp.svg" width={40} height={40} /> 
        <p className='uppercase text-green-700 lg:text-2xl'>We are Here For You</p>
        <p className='text-4xl font-bold lg:text-6xl'>Guide You to Easy Path</p>
      </div>
      <div className='lg:w-[50%]'>
        <p className='text-gray-500 lg:pl-20 lg:pr-20'>Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
      </div>
      
    </div>
  )
}

export default Guide
