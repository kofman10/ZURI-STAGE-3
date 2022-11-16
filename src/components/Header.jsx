import React from 'react'
import Group1 from '../assets/Group.png'
import { Icon } from '@iconify/react';
import { useState } from 'react';

const Header = ({modalHandler}) => {
const [menu, setMenu] = useState(false);
const [icon, setIcon] = useState(false)

 const menuHandler = () => {
   setMenu(!menu)
   setIcon(!icon)
 }

  return (
    <div>  
      <nav className='flex justify-between items-center mt-3 mx-2 lg:mx-8'>   
    {icon ?  <Icon className='h-6 w-6' onClick={menuHandler} icon="bi:x-lg" /> : <Icon onClick={menuHandler} className='lg:hidden h-8 w-8' icon="ci:hamburger" /> }
    <a href='/' className='w-32 h-6'><img className='' src= {Group1} alt="" /></a>
    <ul className='bg-white hidden lg:flex gap-6'>
   <li>Home</li>
   <li> <a href="/placetostay">Place to Stay </a> </li>
   <li>NFTs</li>
   <li>Community</li>
</ul> 
<button  onClick = {modalHandler} className='p-2 bg-[#A02279] text-white rounded-md' >Connect</button>
</nav>

{ menu && <ul className='bg-white p-4 flex flex-col  gap-6 border rounded-md mt-5 mx-3 lg:'>
   <li>Home</li>
   <li> <a href="/placetostay">Place to Stay </a> </li>
   <li>NFTs</li>
   <li>Community</li>
</ul> 
}
</div>
  )
}

export default Header