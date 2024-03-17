'use client'
import Link from 'next/link'
import React from 'react'
import { NAV_LINKS } from '../constants/content'
import Button from './Button'
import Image from 'next/image'
import { useState } from 'react'


const Navbar = () => {
const [openClose, setopenClose] = useState(false);
  return (
    <div>
      <nav className='w-full h-[15vh] flex justify-between items-center  md:pl-10 md:pr-10'>
        <Link href='/' className='font-bold text-lg lg:text-2xl'>Roshan<span className='text-[#5ea67a]'>Travels</span></Link>
        <ul className={openClose===true?'fixed top-12 translate-x-[0%]    bg-[#5ea67a] h-full md:relative md:top-6 md:z-0 md:flex md:bg-transparent z-30 md:items-center  md:gap-4 lg:text-lg lg:top-8 md:text-sm':'md:text-sm z-30 lg:top-8  fixed top-12 md:top-8 md:z-0 translate-x-[-100%] md:translate-x-[0%]  bg-[#5ea67a] md:bg-transparent h-full md:gap-4  md:relative md:flex'}>
            {NAV_LINKS.map((link)=>{
               return (<li className='mb-2  cursor-pointer hover:font-bold'><Link href={link.href} key={link.key}>{link.label}</Link></li> )
            })}
        </ul>
        <Button type="button" title="LogIn" icon="/user.svg" name="btn_black"  />
        <Image className='md:hidden' onClick={()=>{
            setopenClose(!openClose);
        }} src={openClose===true?'/close.png':'/menu.svg'} alt='hello'  width={25} height={24}/>
      </nav>
    </div>
  )
}

export default Navbar
