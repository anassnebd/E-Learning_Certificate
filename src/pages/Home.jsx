import React from 'react';
import html2canvas from 'html2canvas';
import './app.scss'

import CetImgTst from '../assets/icons/image 16.png'

const Home = () => {
  const handleDownload = () => {
    html2canvas(document.querySelector('#capture')).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'image.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div>
    <div id="capture">
      {/* <img src={CetImgTst} alt="My Image" /> */}
      <div style={{ position: 'absolute', zIndex: 1, top: 10, left: 10 }}>
        Mon texte sur l'image
      </div>
    </div>
      <button onClick={handleDownload}>Télécharger l'image</button>
      </div>
  );
};

export default Home
