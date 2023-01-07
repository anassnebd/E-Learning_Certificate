import React from 'react'
import { Link, NavLink } from "react-router-dom";
import './sidebar.scss'

import ReadingIcon from '../../assets/icons/reading.png'
import VideoIcon from '../../assets/icons/video.png'
import CertificateIcon from '../../assets/icons/congrats.png'

function sidebar() {
  return (
    <div className=' w-1/5 pl-9 pr-9 mt-8'>
        <ul>
            <li className=''>
                <Link to="/introduction" activeClassName="current" className='link_sb pl-16 pt-3 text-white text-sm flex rounded-md h-12 mt-3 '>
                    <img src={ReadingIcon} alt="" className='h-6 -ml-6' /><p className='ml-6 ptt'>Introduction</p>
                </Link>
            </li>
            
            <li className=''>
                <NavLink to="/esc" className='link_sb pl-16 pt-3 text-white text-sm flex rounded-md h-12'>
                    <img src={VideoIcon} alt="" className='h-4 mt-1 -ml-6' /><p className='ml-6 ptt'>What is a Hook</p>
                </NavLink>
            </li>
            <li className=''>
                <NavLink to="/jsx" className='link_sb pl-16 pt-3 text-white text-sm flex rounded-md h-12'>
                    <img src={ReadingIcon} alt="" className='h-6 -ml-6' /><p className='ml-6 ptt'>Jsx</p>
                </NavLink>
            </li>
            <li className=''>
                <NavLink to="/components" className='link_sb pl-16 pt-3 text-white text-sm flex rounded-md h-12'>
                    <img src={ReadingIcon} alt="" className='h-6 -ml-6' /><p className='ml-6 ptt'>Components</p>
                </NavLink>
            </li>
            <li className=''>
                <NavLink to="/class" className='link_sb pl-16 pt-3 text-white text-sm flex rounded-md h-12'>
                    <img src={ReadingIcon} alt="" className='h-6 -ml-6' /><p className='ml-6 ptt'>Class</p>
                </NavLink>
            </li>
            <li className=''>
                <NavLink to="/props" className='link_sb pl-16 pt-3 text-white text-sm flex rounded-md h-12'>
                    <img src={ReadingIcon} alt="" className='h-6 -ml-6' /><p className='ml-6 ptt'>Props</p>
                </NavLink>
            </li>
            <li className=''>
                <NavLink to="/events" className='link_sb pl-16 pt-3 text-white text-sm flex rounded-md h-12'>
                    <img src={ReadingIcon} alt="" className='h-6 -ml-6' /><p className='ml-6 ptt'>Events</p>
                </NavLink>
            </li>
            <li className=''>
                <NavLink to="/forms" className='link_sb pl-16 pt-3 text-white text-sm flex rounded-md h-12'>
                    <img src={ReadingIcon} alt="" className='h-6 -ml-6' /><p className='ml-6 ptt'>Forms</p>
                </NavLink>
            </li>
            <li className=''>
                <NavLink to="/router" className='link_sb pl-16 pt-3 text-white text-sm flex rounded-md h-12'>
                    <img src={ReadingIcon} alt="" className='h-6 -ml-6' /><p className='ml-6 ptt'>Router</p>
                </NavLink>
            </li>
            <li className=''>
                <NavLink to="/quiz" className='link_sb pl-16 pt-3 text-white text-sm flex rounded-md h-12'>
                    <img src={ReadingIcon} alt="" className='h-6 -ml-6' /><p className='ml-6 ptt'>Quiz</p>
                </NavLink>
            </li>
            <li className=''>
                <NavLink to="/certificate" className='pl-16 pt-3 text-white text-sm flex rounded-md h-12'>
                    <img src={CertificateIcon} alt="" className='h-6 -ml-6' /><p className='ml-6 ptt text-gold'>Certificate</p>
                </NavLink>
            </li>

           
            
        </ul>
        
    </div>
  )
}

export default sidebar