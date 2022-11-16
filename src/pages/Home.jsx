import React from 'react'
import Group2 from '../assets/Group 59537.png'
import Group3 from '../assets/Group 4040.png'
import Group4 from '../assets/Frame 4041.png'
import Estates from '../components/Estates'
import Group5 from '../assets/Group 4028.png'
import Group6 from '../assets/Frame 59546.png'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import Header from '../components/Header'

import { useState } from "react";

const Home = () => {
    const [showModal, setShowModal] = useState(false)

const modalHandler = () => {
  setShowModal(true)
}

const onCloseHandler = () => {
  setShowModal(false)
}
  return (
    <div>
      < Header modalHandler = {modalHandler} />
        <main className=''> 
            <div className='flex flex-col md:flex-row items-center lg:justify-between gap-4 mx-3 md:mx-5 lg:mx-8'>
              <div className='mb-4 md:w-[564px]'>
                <p className='lg:text-[56px] md:text-4xl text-4xl mt-10 lg:leading-normal'>Rent a  <span className='text-[#A02279] '>Place</span> away from  <span className='text-[#A02279] '>Home</span> in the  <span className='text-[#A02279] '>Metaverse</span></p>
        <p className='lg:text-[24px] text-sm md:text-xl mt-7'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
         
        <input type="text" placeholder='search for location' className='p-1 border focus:outline-none placeholder:text-gray-200 mt-5 lg:w-[390px] lg:h-[54px]'/><a href="/" className='bg-[#A02279] px-10 py-[18px] rounded-r-lg lg:w-[230px]'>search</a>
        </div>
        
        
        <div className='mt-5 mb-5 '> 
        <img src={Group5} alt="" />
        </div>
       

        </div> 
        <div className='bg-[#A02279] flex h-7 w-full justify-around'>  
        <img src={Group2} alt="" />
        <img src={Group3} alt="" />
        <img src={Group4} alt="" />
        </div>
        <p className='font-bold text-center text-2xl lg:text-4xl mt-5 mb-5'>Inspiration for your next adventure</p>
        <Estates />
         <div className='bg-[#A02279] flex flex-col items-center lg:flex-row gap-3 w-full lg:px-9'>
           <div className='mx-3 md:mx-5 lg:mx-8 lg:w-[415px]'>
           <h1 className='text-white text-3xl mt-5'>Metabnb NFTs</h1>
      <p className='text-white mt-7 mb-6'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
      <a href="/" className='p-2 bg-white text-[#A02279] rounded-md' >Learn more</a>
             </div> 
     
      <div className=' mt-7 mb-6 mx-5'>
      <img src={Group6} alt="" />
      </div>
     
         </div>
        </main>
        < Footer />
        < Modal onClose = {onCloseHandler} visible = {showModal} />
    </div>
  )
}

export default Home