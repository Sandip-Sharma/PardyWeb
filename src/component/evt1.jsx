import React from 'react'
import './evt1.css'
import Locator from '../assets/locator.png'

function evt1() {
    return (
        <div className='bg'>
            Bar Section
            <a href="/Barr" target="_blank" rel="noopener noreferrer">
                <img src={Locator} className="locator bar" alt="Locator" />
            </a>

            <a href="/Barr" target="_blank" rel="noopener noreferrer">
                <img src={Locator} className="locator dance" alt="Locator" />
            </a>

        </div>
    )
}

export default evt1
