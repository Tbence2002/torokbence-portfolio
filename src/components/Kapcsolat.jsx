import React, { useRef, useState } from 'react'
import "./kapcsolat.css"
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
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
            toast.success("Sikeres email küldés! Hamarosan válaszolok!")
        }
    }
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5a9kffq', 'template_1lxlqsa', form.current, 'S9JxZg-_yZ4RLj0bo')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
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
                <ScrollAnimation>
                <div className="kapcsolat-box">
                    <div className="kapcsolat-left">
                        <div className="kapcsolat-elerhetoseg">
                            <h3>Elérhetőségek</h3>
                            <div className="social">
                                <FaFacebookSquare />
                                <FaLinkedin />
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
                        <div className="email-anim-container">
                            <div className="email-anim">
                                <Lottie animationData={animationData} />
                            </div>
                        </div>
                    </div>
                    <div className="kapcsolat-right">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="kapcsolat-message">
                                <input type="text" name="teljes_nev" onChange={(e)=> setName(e.target.value)} required />
                                <label for="teljes_nev">Teljes neve</label>
                            </div>
                            <div className="kapcsolat-message">
                                <input type="text" name="email" onChange={(e)=> setEmail(e.target.value)} required />
                                <label for="email">Email címe</label>
                            </div>
                            <div className="kapcsolat-message">
                                <textarea name="uzenet" onChange={(e)=> setMessage(e.target.value)} required></textarea>
                                <label for="uzenet">Üzenet</label>
                            </div>
                            <div className="kapcsolat-button">
                                <button type='submit' onClick={confirmEmail}>Küldés</button>
                            </div>
                        </form>
                    </div>
                </div>
                </ScrollAnimation>
            </div>  
        </div>
    )
}

export default Kapcsolat