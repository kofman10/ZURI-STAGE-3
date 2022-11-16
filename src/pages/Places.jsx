import React from 'react'
import Header from '../components/Header'
import frame1 from '../assets/Frame 143.png'
import frame2 from '../assets/Frame 143 (1).png'
import frame3 from '../assets/Frame 143 (2).png'
import frame4 from '../assets/Frame 143 (3).png'
import frame5 from '../assets/Frame 143 (4).png'
import frame6 from '../assets/Frame 143 (5).png'
import frame8 from '../assets/Frame 143 (7).png'
import frame9 from '../assets/Frame 143 (8).png'
import frame10 from '../assets/Frame 143 (9).png'
import frame11 from '../assets/Frame 143 (10).png'
import frame12 from '../assets/Frame 143 (11).png'
import frame13 from '../assets/Frame 143 (12).png'
import frame14 from '../assets/Frame 143 (13).png'
import frame15 from '../assets/Frame 143 (14).png'
import frame16 from '../assets/Frame 143 (15).png'
import frame17 from '../assets/Frame 143 (16).png'
import setting from '../assets/setting-5.png'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import { useState } from "react";

const Places = () => {
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
        <div className='text-center md:flex justify-center md:gap-6 items-center mb-5 md:w-full'>
          <p>Restaurant</p>
          <p>Cottage</p>
          <p>Castle</p>
          <p>fantast city</p>
          <p>beach</p>
          <p>Carbins</p>
          <p>Off-grid</p>
          <p>Farm</p>
          <button className='flex p-2 mx-auto md:mx-0 rounded-md border   gap-2'><p>location</p> <img src={setting} alt="" /></button>
        </div>
        <main className='grid place-items-center md:grid-cols-2 lg:grid-cols-4 gap-3 mb-7'>
            <img src= {frame1} alt="" />
            <img src= {frame2} alt="" />
            <img src= {frame3} alt="" />
            <img src= {frame4} alt="" />
            <img src= {frame5} alt="" />
            <img src= {frame6} alt="" />
            <img src= {frame17} alt="" />
            <img src= {frame8} alt="" />
            <img src= {frame9} alt="" />
            <img src= {frame10} alt="" />
            <img src= {frame11} alt="" />
            <img src= {frame12} alt="" />
            <img src= {frame13} alt="" />
            <img src= {frame14} alt="" />
            <img src= {frame15} alt="" />
            <img src= {frame16} alt="" />
        </main>
        <Footer />
        < Modal onClose = {onCloseHandler} visible = {showModal} />
    </div>
  )
}

export default Places