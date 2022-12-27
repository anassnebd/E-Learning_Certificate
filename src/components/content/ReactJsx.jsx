import React from 'react'
import './content.scss'
import { Link } from 'react-router-dom'
import JsxExample from '../../assets/Screens/jsx1.png'

function ReactJsx() {
  return (
    <div className='introduction pt-7 pl-20 text-white overflow-x-hidden overflow-y-auto'>
        <div className='flex'>
            <h1>" &nbsp;&nbsp;&nbsp;</h1><h1 className='text-primary_purple text-2xl underline'> 
                React Jsx<br />
            </h1><h1>&nbsp;&nbsp;&nbsp;"</h1>
        </div>
        <h2 className='mt-9'>
            What is JSX?
        </h2>
        <p className='font-sans font-light text-sm'>
            JSX stands for JavaScript XML. <br />
            JSX allows us to write HTML in React. <br />
            JSX makes it easier to write and add HTML in React. <br />
        </p>
        <h2 className='mt-9'>
            Coding JSX
        </h2>
        <p className='font-sans font-light text-sm'>
            JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.<br />
            JSX converts HTML tags into react elements.<br />
        </p>

        <h2 className='mt-3'>
            JSX Example
        </h2>
        <img src={JsxExample} className="mt-3" alt="" />
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

export default ReactJsx