import React from 'react'
import './content.scss'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
function Introduction() {
  return (
    <div>

    <Header/>
        <div className='flex'>
            <Sidebar/>
        
    <div className='introduction pt-7 pl-20 text-white overflow-x-hidden overflow-y-auto'>
        <div className='flex'>
            <h1>" &nbsp;&nbsp;&nbsp;</h1><h1 className='text-primary_purple text-2xl underline'> 
                Intoduction to ReactJs What is React?<br />
            </h1><h1>&nbsp;&nbsp;&nbsp;"</h1>
        </div>
        <p className='font-sans font-light text-sm'>
            React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.<br/>
            Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating,<br/> before making the changes in the browser DOM.
        </p><br/>
        <iframe width="760" height="423" src="https://www.youtube.com/embed/N3AkSS5hXMA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <div className=' ml-auto mr-80 w-2'>
            <Link to="">
                <button className='bg-primary_purple w-40 h-10 rounded-md mt-12 mb-12'>
                    Suivant
                </button>
            </Link>
        </div>
    </div>
    </div>
    </div>

  )
}

export default Introduction