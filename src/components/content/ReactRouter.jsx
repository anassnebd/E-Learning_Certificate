import React from 'react'
import './content.scss'
import { Link } from 'react-router-dom'
import RouterImg1 from '../../assets/Screens/router1.png'
import RouterImg2 from '../../assets/Screens/router2.png'
import RouterImg3 from '../../assets/Screens/router3.png'
import ClassComponentExample from '../../assets/Screens/classcomponent.png'
import FuncComponentExample from '../../assets/Screens/funccomponent.png'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'

function ReactRouter() {
  return (
    <div>
    <Header/>
        <div className='flex'>
            <Sidebar/>
    <div className='introduction pt-7 pl-20 text-white overflow-x-hidden overflow-y-auto'>
        <div className='flex'>
            <h1 className='text-primary_purple text-2xl underline'> 
                React Router<br />
            </h1>
        </div>
        <h2 className='mt-9'>
            Folder Structure

        </h2>
        <p className='font-sans font-light text-sm'>
            When creating a React component, the component's name MUST start with an upper case letter.<br />
        </p>
        <h2 className='mt-9'>
            Installation
        </h2>
        <img src={RouterImg1} className="mt-3" alt="" />

        <p className='font-sans font-light text-sm'>
        To create an application with multiple page routes, let's first start with the file structure.<br />
        Within the src folder, we'll create a folder named pages with several files:<br />
        </p>
        <img src={RouterImg2} className="mt-3" alt="" />

        <h2 className='mt-3'>
            Basic Usage
        </h2>
        <img src={RouterImg3} className="mt-3" style={{width: "900px"}} alt="" />

       

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

export default ReactRouter