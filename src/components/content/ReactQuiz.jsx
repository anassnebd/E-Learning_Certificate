import React, { useState } from 'react'
import './content.scss'
import { Link } from 'react-router-dom'
import RouterImg1 from '../../assets/Screens/router1.png'
import RouterImg2 from '../../assets/Screens/router2.png'
import RouterImg3 from '../../assets/Screens/router3.png'
import ClassComponentExample from '../../assets/Screens/classcomponent.png'
import FuncComponentExample from '../../assets/Screens/funccomponent.png'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'

function ReactQuiz() {
  const [fq,setFq]= useState('')
  const [answer,setAnswer]= useState('')

  const handleChange = (event) => {
    setAnswer(event.target.value);
  };

  const checkRes = () =>{
    if (answer==='javascript'){
      alert('True answers')
      setTimeout(() => {
        window.location.href = "/certificate";
    }, 1000);
    }else{
      alert('False')
    }
    
  }
  return (
    <div>
    <Header/>
        <div className='flex'>
            <Sidebar/>
    <div className='introduction pt-7 pl-20 text-white overflow-x-hidden overflow-y-auto'>
        <div className='flex'>
            <h1 className='text-gold text-4xl '> 
                Quiz<br />
            </h1>
        </div>
   
        <p className='font-sans font-light text-lg pt-12'>
          Init ReactJs is based on<input type="text" className='text-black pl-3' name="answer" onChange={handleChange} id="" />Language
        </p>
        <p className='font-sans font-light text-lg pt-12'>
          1. React est un ________<br />
            <input type="radio" name="fq" id="" />Bibliothèque Javascript <br />
            <input type="radio" name="fq" id="" />Framework Javascript<br />
            <input type="radio" name="fq" id="" />A et B<br />
            <input type="radio" name="fq" id="" />Aucune de ces réponses n’est vraie.<br />
        </p>

        <p className='font-sans font-light text-lg pt-12'>
        2. ReactJS utilise _____ pour augmenter les performances<br />
            <input type="checkbox" name="q2" id="" />DOM virtuel <br />
            <input type="checkbox" name="q2" id="" />DOM réel<br />
            <input type="checkbox" name="q2" id="" />A et B<br />
            <input type="checkbox" name="q2" id="" />Aucune de ces réponses n’est vraie.<br />
        </p>
       
        <p className='font-sans font-light text-lg pt-12'>
        3. React est basé sur _______<br />
            <input type="checkbox" name="q3" id="" />Les modules <br />
            <input type="checkbox" name="q3" id="" />Les services<br />
            <input type="checkbox" name="q3" id="" />Les composants<br />
            <input type="checkbox" name="q3" id="" />Les microservices<br />
        </p>

        <div className=' ml-auto mr-80 w-2'>
            {/* <a href="certificate"> */}
                <button className='bg-primary_purple w-40 h-10 rounded-md mt-12 mb-12' onClick={checkRes}>
                    Suivant
                </button>
            {/* </a> */}
        </div>
    </div>
    </div>
    </div>
  )
}

export default ReactQuiz