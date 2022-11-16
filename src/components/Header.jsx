import React from 'react'
import Group1 from '../assets/Group.png'

const Header = ({modalHandler}) => {
  return (
    <div>  <nav className='flex items-center mt-3'>
    <a href='/' className='w-full h-full'><img className='h-6 w-32' src= {Group1} alt="" /></a>
<ul className=''>
   <li>Home</li>
   <li> <a href="/placetostay">Place to Stay </a> </li>
   <li>NFTs</li>
   <li>Community</li>
</ul>
<button  onClick = {modalHandler} className='p-2 bg-[#A02279] text-white rounded-md' >Connect</button>
</nav></div>
  )
}

export default Header