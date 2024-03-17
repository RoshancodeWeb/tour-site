import Image from 'next/image'
import React from 'react'
import { PEOPLE_URL } from '../constants/content'



const CampSite = ({ title,subtitle,peopleJoined}) => {
  return (
    <div className='w-full h-full absolute flex flex-col  p-5 justify-between'>
      <div className='w-full min-h-fit flex items-center gap-2'>
        <div className='bg-green-700 rounded-full p-4 '>
           <Image src="/folded-map.svg" width={20} height={20}/>
        </div>
        <div>
           <p className='font-bold text-xl text-white'>{title}</p>
           <p className='text-white'>{subtitle}</p>
        </div>
        
      </div>
      <div className='w-full  min-h-6 flex'>
          {PEOPLE_URL.map((url)=>{
            return(
              <>
                <Image 
                  className='m-[-5px]'
                  src={url}
                  alt='person'
                  key={url}
                  width={40}
                  height={40}
                  />
              </>
            )
          })}
          <p className='ml-5 text-white'>{peopleJoined}</p>
      </div>
     </div>
  )
}


const Camp = () => {
  return (
    <div className='lg:relative min-h-[80vh]'>
    <div className='w-full h-[80vh]   pt-7 whitespace-nowrap overflow-y-hidden overflow-x-auto hide-scrollbar '>
        <div className='w-[1000px] relative  bg-[url("/img-1.png")]  h-[100%] lg:h-[80%] inline-block mr-5 bg-cover bg-center md:rounded-xl'>
            <CampSite 
            title="Putuk Truno Camp"
            subtitle="Prigen, Pasuruan"
            peopleJoined="50+ Joined"
            />
        </div>
 
        <div className='w-[1000px] bg-[url("/img-2.png")] h-[100%] lg:h-[80%] relative inline-block bg-cover bg-center md:rounded-xl'>
        <CampSite 
            title="Mountain View Camp"
            subtitle="Somewhere in the Wilderness"
            peopleJoined="50+ Joined"
            />
        </div>
      
    </div>
    
      <div className='w-[80vw] min-h-fit md:w-[500px] lg:absolute mx-auto lg:top-[38vh] lg:left-[40vw] bg-green-600 mt-5 rounded-xl text-white p-5'>
           <p  className='text-xl pb-4 md:text-3xl'><strong>Feeling Lost </strong> And Not Knowing The Way?</p>
           <p className='text-sm md:text-xl'>Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure</p>
       </div>  
    </div>

  )
}

export default Camp
