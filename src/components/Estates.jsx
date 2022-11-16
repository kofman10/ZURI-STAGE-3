import React from 'react'
import frame1 from '../assets/Frame 143.png'
import frame2 from '../assets/Frame 143 (1).png'
import frame3 from '../assets/Frame 143 (2).png'
import frame4 from '../assets/Frame 143 (3).png'
import frame5 from '../assets/Frame 143 (4).png'
import frame6 from '../assets/Frame 143 (5).png'
import frame7 from '../assets/Frame 143 (7).png'
import frame8 from '../assets/Frame 143 (8).png'

const Estates = () => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3 place-items-center lg:mx-3 mb-3'>
        <img src={frame1} alt="" />
        <img src= {frame2} alt="" />
        <img src= {frame3} alt="" />
        <img src= {frame4} alt="" />
        <img src= {frame5} alt="" />
        <img src= {frame6} alt="" />
        <img src= {frame7} alt="" />
        <img src= {frame8} alt="" />
        
    </div>
  )
}

export default Estates