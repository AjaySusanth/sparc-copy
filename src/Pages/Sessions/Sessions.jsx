import React from 'react'
import './Sessions.css'
import Heading from '../Heading/Heading'
import Card from './Card'
import icon from '../../assets/Images/right corner icon.png'

function Sessions() {
  return (
    <section className='relative px-2 py-5 mx-auto mt-10 flex flex-col w-4/5 border-[#74758D] border-[7px] rounded-[90px] bg-white sm:px-20 sm:py-0 sm:pb-10 overflow-hidden'>
        <img src={icon} className="w-28 sm:w-32 absolute top-0 right-0"/>
        <Heading text='Sessions' className='mt-16 sm:mt-0'/>
        <div className='flex justify-around items-center'>
          <Card/>
        </div>
      
    </section>
  )
}

export default Sessions
/*-top-8 -right-10*/
