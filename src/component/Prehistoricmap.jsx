// import React from 'react'
// import './map.css'

// function Prehistoricmap() {
//   return (
//     <div className="select1">
//       <br/>
//      <span className='text1'>PreHistoric Map</span>

//     </div>
//   )
// }

// export default Prehistoricmap


import React, { useState, useEffect } from 'react';
import './map.css';
import preloaderVideo from '../assets/goingtopast.mp4'; // Add your video file in the public or src folder

function Prehistoricmap() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after video ends
    const videoElement = document.getElementById("preloader-video");
    if (videoElement) {
      videoElement.onended = () => setLoading(false);
    }
    
    // Fallback: Hide preloader after 5 seconds in case of issues
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
        <div className="select1">
          <br />
          <span className="text1">PreHistoric Map</span>
        </div>
      )}
    </>
  );
}

export default Prehistoricmap;
