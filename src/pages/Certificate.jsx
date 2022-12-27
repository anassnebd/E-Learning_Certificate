import React from 'react'
import Introduction from '../components/content/Introduction'
import ReactJsx from '../components/content/ReactJsx'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import ReactComponents from '../components/content/ReactComponents'

function Certificate() {
  return (
    <div className='Certificate'>
        <Header/>
        <div className='flex'>
            <Sidebar/>
            <ReactComponents/>
        </div>
    </div>
  )
}

export default Certificate