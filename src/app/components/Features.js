import Image from 'next/image'
import React from 'react'


const Feature_Individual = ({ iconName,title,description}) => {
  return (
    <div>
      <div className='w-fit h-fit p-4  mt-4 mr-4 mb-4  bg-[#30AF5B] rounded-full'>
        <Image src={iconName} width={30} height={30}/>
      </div>
      <div className='w-full min-fit flex flex-col gap-4'>
        <p className='font-bold text-xl'>{title}</p>
        <p className='tex-t-gray-500'>{description}</p>
      </div>
    </div>
  )
}


const Features = () => {
  return (
    <div className='w-full min-h-[60vh]  pl-5 pr-5 md:bg-[url("/feature-bg.png")] bg-cover bg-no-repeat'>
      <div className='w-full  min-h-fit relative '>
        <Image className='absolute top-[-30px] left-[-1vh]' src="/camp.svg" width={40} height={40} />
        <p className='font-extrabold text-3xl'>Our Features</p>
      </div>
      
      <div className='w-full min-h-fit md:flex'>
          <div className='md:w-[50%] md:min-h-fit md:pr-10  '>
            <Feature_Individual
              iconName="/map.svg"
              title="Real Maps Can Be Offline"
              description="We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location"
            />
            <Feature_Individual
              iconName="/calendar.svg"
              title="Set An Adventure Schedule"
              description="Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion"
            />
          </div>
          
          <div className="md:w-[50%] md:min-h-fit " >
            <Feature_Individual
              iconName="/tech.svg"
              title="Technology Using Augment Reality"
              description="Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection"
            />
            <Feature_Individual
              iconName="/location.svg"
              title="Many New Locations Every Month"
              description="Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing "
            />
          </div>
      </div>

      
      
    </div>
  )
}

export default Features
