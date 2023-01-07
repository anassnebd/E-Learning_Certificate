import React from 'react'
import './content.scss'
import { Link } from 'react-router-dom'
import EventsImg from '../../assets/Screens/events.png'
import FuncComponentExample from '../../assets/Screens/funccomponent.png'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'

function ReactEvents() {
  return (
    <div>
    <Header/>
        <div className='flex'>
            <Sidebar/>
    <div className='introduction pt-7 pl-20 text-white overflow-x-hidden overflow-y-auto'>
        <div className='flex'>
            <h1 className='text-primary_purple text-2xl underline'> 
            React Events<br />
            </h1>
        </div>
        <h2 className='mt-9'>
            Create Your First Event
        </h2>
        <p className='font-sans font-light text-sm'>
        Just like HTML DOM events, React can perform actions based on user events.<br />
        React has the same events as HTML: click, change, mouseover etc.<br/>
        </p>
        <h2 className='mt-9'>
            Adding Events

        </h2>
        <p className='font-sans font-light text-sm'>
        React events are written in camelCase syntax:<br />
        onClick instead of onclick.<br />
        React event handlers are written inside curly braces:<br />
        onClick= shoot  instead of onClick= shoot( &nbsp;).<br />
        </p>

        <h2 className='mt-3'>
            Example
        </h2>
        <img src={EventsImg} className="mt-3" alt="" />

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

export default ReactEvents