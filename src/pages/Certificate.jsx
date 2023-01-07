import React from 'react'
import Introduction from '../components/content/Introduction'
import ReactJsx from '../components/content/ReactJsx'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import ReactComponents from '../components/content/ReactComponents'
import { Outlet } from 'react-router-dom'
import PrimeIcon from '../assets/icons/congrats.png'
import CertificateImg from '../assets/certificate.png'
import html2canvas from 'html2canvas';
import { FacebookShareCount } from 'react-share';
import { ShareButton } from "react-custom-share";



import './app.scss'

function Certificate() {
  const handleDownloadCertif = () => {
    html2canvas(document.querySelector('#capture_cert')).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'image.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  const shareButtonProps = {
    url: "www.tedora.info",
    network: "Facebook",
    text: "Tedora.info - ReactJs Certification",
    longtext:
      "ReactJs Certification approved by Tedora.info Earn yours Now!."
  };

  return (
    <div className='Certificate'>
        <Header/>
        <div className='center w-3/5 h-96 '>
            <div className='center flex align-text-bottom pt-12'>
              <h1 className='center flex pt-1 text-2xl text-white'>Congratulations on you Work “Anass Nebdaoui” &nbsp;&nbsp;<img src={PrimeIcon} alt="" className='-mt-2 w-10 h-9'/></h1>
            </div>
            <div className='certif_neon h-auto mt-12'>
              <div className='center h-auto' id='capture_cert'>
                <img src={CertificateImg} className='' alt="" />
                <h1 style={{ position: 'absolute', zIndex: 1, top: 185 ,left:0,right:0}} className='text-white name_cert text-6xl text-center w-full'>Anass Nebdaoui</h1>
              </div>
            </div>
            <div className='mt-14 pb-9 flex '>
              <button onClick={handleDownloadCertif} className='text-black bg-gold w-64 h-11 rounded-sm center'>Télécharger l'image</button>
              <ShareButton {...shareButtonProps} className='center'>
              <button className='text-white bg-primary_blue w-64 h-11 rounded-sm  '>Share</button>
              </ShareButton>
            </div>
      {/* <FacebookShareCount url='./certificate' /> */}

        </div>
    </div>
  )
}

export default Certificate