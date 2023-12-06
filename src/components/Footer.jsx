import React,{useRef} from 'react'
import Lottie, {LottieCurrentProps} from 'lottie-react'
import animationData from '../assets/footer.json'
import "./footer.css"

function Footer() {
    const footerRef = useRef<LottieCurrentProps>(null);
  return (
    <div className='footer-container'>
        <div className="footer-content">
            <div className="footer-image">
                <Lottie onComplete={()=> {footerRef.current?.goToAndPlay(45, true)}} Loop={false} lottieRef={footerRef} animationData={animationData}/>
                <div className="footer-text">
                <h3>Török Bence, Junior Frontend Fejlesztő.</h3>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer