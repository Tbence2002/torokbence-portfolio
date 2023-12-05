import React from 'react'
import "./kapcsolat.css"
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

function Kapcsolat() {
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
                    </div>
                    <div className="kapcsolat-right">
                        <div className="kapcsolat-message">
                            <input type="text" name="teljes_nev" required/>
                            <label>Teljes neve</label>
                        </div>
                        <div className="kapcsolat-message">
                            <input type="email" name="email" required/>
                            <label>Email címe</label>
                        </div>
                        <div className="kapcsolat-message">
                            <textarea name="uzenet" required></textarea>
                            <label>Üzenet</label>
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