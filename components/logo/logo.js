import React from 'react'
import './logo.scss'
import logo from '@assets/icons/logo.png'

const Logo = () => {
  return (
    <div className='Logo'>
      <img className='Logo__image' src={logo} alt='Logo' />
    </div>
  )
}

export default Logo
