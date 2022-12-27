import React from 'react'
import './content.scss'
import { Link } from 'react-router-dom'
import ClassComponentExample from '../../assets/Screens/classcomponent.png'
import FuncComponentExample from '../../assets/Screens/funccomponent.png'


function ReactComponents() {
  return (
    <div className='introduction pt-7 pl-20 text-white overflow-x-hidden overflow-y-auto'>
        <div className='flex'>
            <h1 className='text-primary_purple text-2xl underline'> 
                React Components<br />
            </h1>
        </div>
        <h2 className='mt-9'>
            Create Your First Component
        </h2>
        <p className='font-sans font-light text-sm'>
            When creating a React component, the component's name MUST start with an upper case letter.<br />
        </p>
        <h2 className='mt-9'>
            Class Component
        </h2>
        <p className='font-sans font-light text-sm'>
            A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component<br />
            access to React.Component's functions.<br />
        </p>

        <h2 className='mt-3'>
            Class Component Example
        </h2>
        <img src={ClassComponentExample} className="mt-3" alt="" />

        <h2 className='mt-9'>
            Function Component
        </h2>
        <p className='font-sans font-light text-sm'>
            Here is the same example as above, but created using a Function component instead.<br />
            A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are<br />
            easier to understand, and will be preferred in this tutorial. <br />
        </p>

        <h2 className='mt-3'>
            Function Component Example
        </h2>
        <img src={FuncComponentExample} className="mt-3" alt="" />
        {/* <iframe width="760" height="423" src="https://www.youtube.com/embed/N3AkSS5hXMA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
        <div className=' ml-auto mr-80 w-2'>
            <Link to="">
                <button className='bg-primary_purple w-40 h-10 rounded-md mt-12 mb-12'>
                    Suivant
                </button>
            </Link>
        </div>
    </div>
  )
}

export default ReactComponents