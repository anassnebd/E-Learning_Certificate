import React from 'react'
import Introduction from '../components/content/Introduction'
import ReactJsx from '../components/content/ReactJsx'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import ReactComponents from '../components/content/ReactComponents'
import { Outlet } from 'react-router-dom'
import PrimeIcon from '../assets/icons/congrats.png'
import CertificateImg from '../assets/certificate.png'
import './app.scss'

function Certificate() {
  return (
    <div className='Certificate'>
        <Header/>
        <div className='center w-3/5 h-96 '>
            <div className='center flex align-text-bottom'>
              <h1 className='center flex pt-1 text-2xl text-white'>Congratulations on you Work “Anass Nebdaoui” &nbsp;&nbsp;<img src={PrimeIcon} alt="" className='-mt-2 w-10 h-9'/></h1>
            </div>
            <div>
              <img src={CertificateImg} className='w-full' alt="" />
              <h1 style={{ position: 'absolute', zIndex: 1, top: 300, left: 700 }} className='text-white'>Anass Nebdaoui</h1>

            </div>
        </div>
    </div>
  )
}

export default Certificate