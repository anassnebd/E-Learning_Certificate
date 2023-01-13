import React from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import { Link } from 'react-router-dom'

import HooksExample from '../../assets/Screens/hooks1.png'
import FuncComponentExample from '../../assets/Screens/funccomponent.png'
function ReactHooks() {
  return (
    <div>
    <Header/>
        <div className='flex'>
            <Sidebar/>
    <div className='introduction pt-7 pl-20 text-white overflow-x-hidden overflow-y-auto'>
        <div className='flex'>
            <h1 className='text-primary_purple text-2xl underline'> 
                React Hooks<br />
            </h1>
        </div>
        <h2 className='mt-9'>
            What is a Hook?
        </h2>
        <p className='font-sans font-light text-sm'>
        Hooks allow us to "hook" into React features such as state and lifecycle methods.<br />
        </p>
        <h2 className='mt-3'>
            Example of Hooks React
        </h2>
        <img src={HooksExample} className="mt-3 w-3/4" alt="" />

        <h2 className='mt-9'>
            How to use it?
        </h2>
        <p className='font-sans font-light text-sm'>
        You must import Hooks from react.<br />
        Here we are using the useState Hook to keep track of the application state.<br />
        State generally refers to application data or properties that need to be tracked.<br />
        </p>

        
        <h2 className='mt-12 text-gold text-2xl'>
            Hook Rules
        </h2>
        <p className='font-sans font-light text-lg'>
        There are 3 rules for hooks:<br />
        </p>
        <ul className='list-disc'>
            <li>Hooks can only be called inside React function components.</li>
            <li>Hooks can only be called at the top level of a component.</li>
            <li>Hooks cannot be conditional</li>
        </ul>

        {/* <iframe width="760" height="423" src="https://www.youtube.com/embed/N3AkSS5hXMA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
        <div className=' ml-auto mr-80 w-2'>
            <a href="jsx">
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

export default ReactHooks