import React from 'react'
import './header/header'
function Authentification() {
  return (
    <div className='text-white center'>
        Email :
        <input type="text" className='text-black' />
        Password :
        <input type="password" className='text-black' />
    </div>
  )
}

export default Authentification