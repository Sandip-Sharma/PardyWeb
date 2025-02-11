import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";
import "./period.css";

function Period() {
  const tiltRef = useRef([]);

  useEffect(() => {
    tiltRef.current.forEach((el) => {
      if (el) {
        VanillaTilt.init(el, {
          max: 15,
          speed: 400,
          glare: true,
          "max-glare": 0.4,
        });
      }
    });
  }, []);

  return (
    <div className="period">
      <div className="form">
        <span className="text">
          Where Would You Like To Travel...
          <br />
          <br />
          <br />
        </span>

        <div className="cardwrp">
          <Link to="/prehistoric" ref={(el) => (tiltRef.current[0] = el)} className="card">
            <h4>Prehistoric Era</h4>
          </Link>

          <Link to="/iron" ref={(el) => (tiltRef.current[1] = el)} className="card1">
            <h4>Iron Age</h4>
          </Link>

          <Link to="/futurmap" ref={(el) => (tiltRef.current[2] = el)} className="card2">
            <h4>Futuristic</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Period;
