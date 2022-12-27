import React from 'react'
import Logo from '../../assets/tedora.png'
import SearchIcon from '../../assets/icons/search.png'
import './header.scss'

function Header() {
  return (
    <div className='header flex pt-7 pl-32 pr-20'>
        <img src={Logo} className="h-12" alt="" />
        <div className='search_bar flex ml-auto pt-3'>
            <img src={SearchIcon} className="h-7" alt="" srcset="" />
            <input type="text" name="" placeholder='Recherchez...' className='search text-gray-400 h-7 border-none bg-transparent outline-none text-sm pl-3 font-sans w-auto' id="" />
        </div>
    </div>
  )
}

export default Header