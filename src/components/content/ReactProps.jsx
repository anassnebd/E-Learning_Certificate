import React from 'react'
import './content.scss'
import { Link } from 'react-router-dom'
import Props1 from '../../assets/Screens/props1.png'
import Props2 from '../../assets/Screens/props2.png'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'

function ReactProps() {
  return (
    <div>
    <Header/>
        <div className='flex'>
            <Sidebar/>
    <div className='introduction pt-7 pl-20 text-white overflow-x-hidden overflow-y-auto'>
        <div className='flex'>
            <h1 className='text-primary_purple text-2xl underline'> 
                React Props<br />
            </h1>
        </div>
        <h2 className='mt-9'>
            Create Your First React Props
        </h2>
        <p className='font-sans font-light text-sm'>
        React Props are like function arguments in JavaScript and attributes in HTML.<br />
        To send props into a component, use the same syntax as HTML attributes:
        </p>
        <h2 className='mt-9'>
            Example
        </h2>
        <p className='font-sans font-light text-sm'>
            A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component<br />
            access to React.Component's functions.<br />
        </p>
        <img src={Props1} className="mt-3" alt="" />

        <h2 className='mt-9'>
            Pass Data into Props
        </h2>
        <p className='font-sans font-light text-sm'>
            Props are also how you pass data from one component to another, as parameters.<br />
            Send the "brand" property from the Garage component to the Car component:<br />
        </p>

        <h2 className='mt-3'>
            Props Data Example
        </h2>
        <img src={Props2} className="mt-3" alt="" />
        {/* <iframe width="760" height="423" src="https://www.youtube.com/embed/N3AkSS5hXMA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
        <div className=' ml-auto mr-80 w-2'>
            <a href="events">
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

export default ReactProps