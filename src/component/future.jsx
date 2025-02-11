// import React from 'react'
// import './map.css'

// function future() {
//   return (
//     <>
//     <div className="select">
//       <br/>
//      <span className='text1'>Future Map</span>

//     </div>
//     </>
//   )
// }

// export default future




import React, { useState, useEffect } from 'react';
import './map.css';
import preloaderVideo from '../assets/future.mp4'; // Replace with your actual video file

function Future() {
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
        <div className="select">
          <br />
          <span className="text1">Future Map</span>
        </div>
      )}
    </>
  );
}

export default Future;
