import React from 'react'
import { Icon } from '@iconify/react';
import metamask from '../assets/image 66.png'
import walletcon from '../assets/image 69.png'

const Modal = ({visible, onClose}) => {

    const onCloseHandler = (e) => {
        if(e.target.id === 'container') {
          onClose()
        }
    }
  return (
      <> 
    { visible && <div id="container" onClick={onCloseHandler} className = 'fixed z-10 inset-0 backdrop-brightness-50 bg-white/30  flex items-center justify-center '>
      <div className='bg-white rounded-md lg:w-[600px]'>
      <div onClick={onClose} className = "flex justify-between mr-2 pb-6 text-2xl mt-3 mx-3 "><p className='font-bold'>Connect Wallet</p><Icon icon="bi:x-lg" /></div>
            <hr  className='w-full '/>
          <div className='p-3'> 
          <p className='mt-3 mb-3'>Choose your preferred wallet</p>
            <div className='bg-inherit border rounded-md p-2 h-[68px] w-72 lg:w-[572px] flex justify-between itmes-center hover:bg-gray-100'>
                <div className='flex justify-between items-center'><img src={metamask} alt="" /> 
                <p className='ml-3 font-bold'>Metamask</p>
                </div>  
                <Icon className='h-12 w-5' icon="lucide:chevron-right" />
                </div>

                <div className='bg-inherit border rounded-md p-2 h-[68px] w-72 lg:w-[572px] flex justify-between itmes-center mt-4 hover:bg-gray-100'>
                <div className='flex justify-between items-center'><img src={walletcon} alt="" /> 
                <p className='ml-3 font-bold'>WalletConnect</p>
                </div>  
                <Icon className='h-12 w-5' icon="lucide:chevron-right" />
                </div>
          </div>          
      </div>
    </div> }
    </>
  )
}

export default Modal