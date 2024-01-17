import React, { useRef, useState } from 'react'
import "./kapcsolat.css"
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import Lottie from 'lottie-react';
import animationData from '../assets/kapcsolat.json'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import ScrollAnimation from './ScrollAnimation';

function Kapcsolat() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const confirmEmail = () => {
        if (name === "" || email === "" || message === "") {
            toast.error("Üres mezők!")
        } else {
            return
        }
    }
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5a9kffq', 'template_1lxlqsa', form.current, 'S9JxZg-_yZ4RLj0bo')
            .then((result) => {
                toast.success("Sikeres email küldés! Hamarosan válaszolok!");
                setName("");
                setEmail("");
                setMessage("");
            }, (error) => {
                toast.error("Hiba történt az üzenet küldése közben!");
            });
    };

    return (
        <div className="kapcsolat-container" id='kapcsolat'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="kapcsolat-content">
                <div className="kapcsolat-text">
                    <p>Kapcsolat</p>
                    <h2>írjon nekem!</h2>
                </div>
                <ScrollAnimation result="kapcsolat-box">
                    <div className="kapcsolat-left">
                        <div className="kapcsolat-elerhetoseg">
                            <h3>Elérhetőségek</h3>
                            <div className="social">
                                <a href="https://www.facebook.com/profile.php?id=100010262581469" target='_blank' rel="noreferrer"><FaFacebookSquare  className='facebook'/></a>
                                <a href="https://www.linkedin.com/in/t%C3%B6r%C3%B6k-bence-50653227b/" target='_blank' rel="noreferrer"><FaLinkedin className='github' /></a>
                                <a href="https://github.com/Tbence2002" target="_blank" rel="noreferrer"><FaGithubSquare className='github'/></a>
                            </div>
                        </div>
                        <div className="email">
                            <p>Email</p>
                            <p>torokbencee.2002@gmail.com</p>
                        </div>
                        <div className="email-anim-container">
                            <div className="email-anim">
                                <Lottie animationData={animationData} />
                            </div>
                        </div>
                    </div>
                    <div className="kapcsolat-right">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="kapcsolat-message">
                                <input type="text" name="teljes_nev" onChange={(e)=> setName(e.target.value)} value={name} required />
                                <label htmlFor="teljes_nev">Teljes neve</label>
                            </div>
                            <div className="kapcsolat-message">
                                <input type="text" name="email" onChange={(e)=> setEmail(e.target.value)} value={email} required />
                                <label htmlFor="email">Email címe</label>
                            </div>
                            <div className="kapcsolat-message">
                                <textarea name="uzenet" onChange={(e)=> setMessage(e.target.value)} value={message} required></textarea>
                                <label htmlFor="uzenet">Üzenet</label>
                            </div>
                            <div className="kapcsolat-button">
                                <button type='submit' onClick={confirmEmail} >Küldés</button>
                            </div>
                        </form>
                    </div>
                </ScrollAnimation>
            </div>  
        </div>
    )
}

export default Kapcsolat