import React from 'react'
import "./footer.css"
import Lottie from 'lottie-react'
import animationData from '../assets/footer.json'

function Footer() {

  return (
    <div className='footer-container'>
      <div className="footer-content">
        <div className="footer-text">
            <h2>Török Bence</h2>
            <p>Junior Frontend Fejlesztő</p>
        </div>
        <div className="footer-image">
          <Lottie animationData={animationData} />
        </div>
      </div>
    </div>
  )
}

export default Footer