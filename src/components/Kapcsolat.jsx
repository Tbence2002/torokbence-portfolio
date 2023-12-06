import React, {useRef} from 'react'
import "./kapcsolat.css"
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import Lottie, {LottieComponentProps} from 'lottie-react';
import animationData from '../assets/kapcsolat.json'

function Kapcsolat() {
    const emailRef = useRef<LottieComponentProps>(null);
    return (
        <div className="kapcsolat-container">
            <div className="kapcsolat-content">
                <div className="kapcsolat-text">
                    <p>Kapcsolat</p>
                    <h2>írjon nekem!</h2>
                </div>
                <div className="kapcsolat-box">
                    <div className="kapcsolat-left">
                        <div className="kapcsolat-elerhetoseg">
                        <h3>Elérhetőségek</h3>
                        <div className="social">
                            <FaFacebookSquare/>
                            <FaLinkedin/>
                        </div>
                        </div>
                        <div className="email">
                            <p>Email</p>
                            <p>torokbencee.2002@gmail.com</p>
                        </div>
                        <div className="tel">
                            <p>Telefon</p>
                            <p>+36203758874</p>
                        </div>
                        <div className="email-anim">
                            <Lottie lottieRef={emailRef} Loop={false} onComplete={()=> {emailRef.current?.goToAndPlay(45,true)}} animationData={animationData}/>
                        </div>
                    </div>
                    <div className="kapcsolat-right">
                        <div className="kapcsolat-message">
                            <input type="text" name="teljes_nev" required/>
                            <label for="teljes_nev">Teljes neve</label>
                        </div>
                        <div className="kapcsolat-message">
                            <input type="text" name="email" required/>
                            <label for="email">Email címe</label>
                        </div>
                        <div className="kapcsolat-message">
                            <textarea name="uzenet" required></textarea>
                            <label for="uzenet">Üzenet</label>
                        </div>
                        <div className="kapcsolat-button">
                            <button>Küldés</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kapcsolat