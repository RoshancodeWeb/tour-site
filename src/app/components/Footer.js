import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className=' w-full min-h-fit pt-10 pl-10 pr-10'>
         <div className='w-full h-fit pb-10'>
            <Link href='/' className='font-extrabold  text-2xl lg:text-2xl'>Roshan<span className='text-[#5ea67a]'>Travels</span></Link>
          </div>
      <div className=' flex flex-col gap-5 md:gap-0 md:justify-between  md:flex-row'>
          
          <ul className='w-fit h-fit'>
              <li className='text-xl lg:2xl font-bold pb-3'>Learn More</li>
              <li className='pb-2 text-gray-500 cursor-pointer'><Link href="/">About RoshanTravels</Link></li>
              <li className='pb-2 text-gray-500 cursor-pointer'><Link href="/">Press Release</Link></li>
              <li className='pb-2 text-gray-500 cursor-pointer'><Link href="/">Environment</Link></li>
              <li className='pb-2 text-gray-500 cursor-pointer'><Link href="/">Jobs</Link></li>
              <li className='pb-2 text-gray-500 cursor-pointer'><Link href="/">Privacy Policy</Link></li>
              <li className='pb-2 text-gray-500 cursor-pointer'><Link href="/">Contact Us</Link></li>
          </ul>
        
          <ul className='w-fit h-fit'>
              <li className='text-xl lg:2xl font-bold pb-3'>Our Community</li>
              <li className='pb-2 text-gray-500 cursor-pointer'><Link href="/">Climbing xixixi</Link></li>
              <li className='pb-2 text-gray-500 cursor-pointer'><Link href="/">RoshanTravels Hiking </Link></li>
              <li className='pb-2 text-gray-500 cursor-pointer'><Link href="/">RoshanTravels Kinthill</Link></li>
          </ul>

          <ul className='w-fit h-fit'>
              <li className='text-xl lg:2xl font-bold pb-3'>Contact Us</li>
              <li className='pb-2 text-blue-950 cursor-pointer '><Link href="/">Admin Officer : 123-456-7890</Link></li>
              <li className='pb-2 text-blue-950 cursor-pointer '><Link href="/">Email Officer : <span className='text-sm'>roshanasghar786@gmail.com</span></Link></li>
            
          </ul>
    
          <div>
            <p className='text-2xl font-bold'>Social</p>  
              <div className='w-fit h-fit flex gap-3'>
                <Link href="/"><Image src="/facebook.svg" width={30} height={30} /></Link>
                <Link href="/"><Image src="/instagram.svg" width={30} height={0} /></Link>
                <Link href="/"><Image src="/youtube.svg" width={30} height={30} /></Link>
                <Link href="/"><Image src="/wordpress.svg" width={30} height={30} /></Link>
              </div>
          </div>        
      </div>
      <div className='w-full h-2  border-b-2 border-gray-300 mt-5 mb-5'></div>
      
      
          <p className='text-[12px] w-full pb-20 pt-5  text-gray-600  text-center md:text-sm'>RoshanTravels 2023 | All rights reserved </p>
     


    </div>
  )
}

export default Footer
