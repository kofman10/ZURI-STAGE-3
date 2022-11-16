import React from 'react'
import Group from '../assets/Group (2).png'
import facebook from '../assets/facebook-263-721950.png'
import twitter from '../assets/twitter-241-721979.png'
import instagram from '../assets/instagram-216-721958.png'

const Footer = () => {
  return (
      <>
      <footer className='bg-black py-2'>
        <div> <img className='' src={Group} alt="" /> </div> 
         <div className='flex space-x-3 mt-2'>
         <img src={facebook} alt="" />
         <img src={twitter} alt="" />
         <img src={instagram} alt="" />
             </div>        
        
         <div className='text-white'>
         <ul className='mt-3 text-sm'>
             <li className='mb-2 text-lg'>Community</li>
             <li>NFT</li>
             <li>Tokens</li>
             <li>Landlords</li>
             <li>Discord</li>
         </ul>
         <ul className='mt-3 text-sm'>
             <li className='mb-2 text-lg'>Places</li>
             <li>Castle</li>
             <li>Farms</li>
             <li>Beach</li>
             <li>Learn more</li>
         </ul>
         <ul className='mt-3 text-sm'>
             <li className='mb-2 text-lg'>About us</li>
             <li>Road map</li>
             <li>Creators</li>
             <li>Career</li>
             <li>Contact us</li>
         </ul>
         </div>
       
         <p className='text-white mt-5'>© 2022 KOFMAN</p>

      </footer>
      </>
  )
}

export default Footer