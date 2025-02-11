// import React from 'react'
// import './map.css'

// function IronAge() {
//   return (
//     <div className="select2">
//     <br/>
//    <span className='text1'>Iron Map</span>

//   </div>
//   )
// }

// export default IronAge




import React, { useState, useEffect } from 'react';
import './map.css';
import preloaderVideo from '../assets/middil.mp4'; // Replace with your actual video file
import Locator from '../assets/locator.png'

function IronAge() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const videoElement = document.getElementById("preloader-video");
    if (videoElement) {
      videoElement.onended = () => setLoading(false);
    }
    
    // Fallback timeout (5 seconds) in case of loading issues
    const timer = setTimeout(() => setLoading(false), 5000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="preloader">
          <video id="preloader-video" autoPlay muted>
            <source src={preloaderVideo} type="video/mp4" />
          </video>
        </div>
      ) : (
        <div className="select2">
          <br />

          {/* locators */}
          <a href="/FEvent1" target="_blank" rel="noopener noreferrer">
                <img src={Locator} className="locator IrHouse" alt="Locator" />
            </a>
          <a href="/FEvent1" target="_blank" rel="noopener noreferrer">
                <img src={Locator} className="locator IrCatel" alt="Locator" />
            </a>
            
          <span className="text1">Iron Map</span>
        </div>
      )}
    </>
  );
}

export default IronAge;
