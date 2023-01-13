import React from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import { Link } from 'react-router-dom'

export default function ReaclClasses() {
  return (
    <div>

    <Header/>
        <div className='flex'>
            <Sidebar/>
        
    <div className='introduction pt-7 pl-20 text-white overflow-x-hidden overflow-y-auto'>
        <div className='flex'>
            <h1>" &nbsp;&nbsp;&nbsp;</h1><h1 className='text-primary_purple text-2xl underline'> 
            React Class Components
            <br />
            </h1><h1>&nbsp;&nbsp;&nbsp;"</h1>
        </div>
        <p className='font-sans font-light text-sm'>
            Before React 16.8, Class components were the only way to track state and lifecycle on a React component. Function <br/>components were considered "state-less".
        </p><br/>
        <iframe width="760" height="423" src="https://www.youtube.com/embed/2z7ZNgFRppw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div className=' ml-auto mr-80 w-2'>
            <a href="props">
                <button className='bg-primary_purple w-40 h-10 rounded-md mt-12 mb-12'>
                    Suivant
                </button>
            </a>
        </div>
    </div>
    </div>
    </div>
  )
}
