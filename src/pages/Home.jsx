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
        <main> 
            <div>
        <p>Rent a Place away from Home in the Metaverse</p>
        <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
        <input type="text" className='p-1 border focus:outline-none '/><a href="/" className='bg-[#A02279] p-2 rounded-r-lg'>search</a>
        <img src={Group5} alt="" />

        </div> 
        <div className='bg-[#A02279] flex h-7 w-full justify-around'>  
        <img src={Group2} alt="" />
        <img src={Group3} alt="" />
        <img src={Group4} alt="" />
        </div>
        <p>Inspiration for your next adventure</p>
        <Estates />
         <div className='bg-[#A02279]'>
      <h1>Metabnb NFTs</h1>
      <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
      <a href="/" className='p-2 bg-white text-[#A02279] rounded-md' >Learn more</a>
      <img src={Group6} alt="" />
         </div>
        </main>
        < Footer />
        < Modal onClose = {onCloseHandler} visible = {showModal} />
    </div>
  )
}

export default Home