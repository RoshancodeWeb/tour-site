import React from 'react'
import Hero from './components/Hero'
import Guide from './components/Guide'
import Features from './components/Features'
import Camp from './components/Camp'
import GetApp from './components/GetApp'
import Guide_part from './components/Guide_part'

const page = () => {
  return (
    <>
     <Hero/>
     <Camp/>
     <Guide/>
     <Guide_part/>
     <Features/>
     <GetApp/>
    </>
  )
}

export default page
