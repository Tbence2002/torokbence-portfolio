import React, { useEffect, useState, useRef } from 'react'
import "./ismerjenmeg.css"
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import chatimage from '../assets/chat-image.jpg'

function IsmerjenMeg() {
    const [active, setActive] = useState(1);
    const [activebox, setActivebox] = useState(false);
    const [showimc, setShowImc] = useState(false);
    const imcRef = useRef(null);

    const handleOpen = () => {
        setActivebox(true);
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
    }

    useEffect(() => {
        const scrollToTop = () => {
            const scrollStep = imcRef.current.scrollTop / 20;
            if (imcRef.current.scrollTop > 0) {
                imcRef.current.scrollTop -= scrollStep;
                window.requestAnimationFrame(scrollToTop);
            }
        };

        if (activebox && imcRef.current) {
            window.requestAnimationFrame(scrollToTop);
        }
    }, [active, activebox]);

    const handleClose = () => {
        setActivebox(false);
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
        if (imcRef.current) {
            imcRef.current.scrollTop = 0;
        }
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (imcRef.current && !imcRef.current.contains(event.target)) {
                handleClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const showImc = () => {
        if (window.scrollY >= 550) {
            setShowImc(true);
        } else {
            setShowImc(false);
        }
    }

    window.addEventListener('scroll', showImc);
    return (
        <div className={showimc ? "showimc" : "ismerjen_meg_container"} onClick={handleOpen}>
            {/*Ismerjen meg container rövidítve innentől: imc*/}
            <div className={activebox ? "imc-box activebox imc-show-bg" : "imc-box"} ref={imcRef}>
                <div className="imc-title">
                    <img src={chatimage} alt="chatimage" className='me' />
                    <h3 className='imc-header-title'>Ismerjen meg engem!</h3>
                </div>
                <div className="imc-content">
                    <div className="imc-body">
                        {active === 1 &&
                            <div className="imc-welcome">
                                <div onClick={() => setActive(2)} className={active === 2 ? "activemenu imc-welcome-content" : "imc-welcome-content"}>
                                    <img src={chatimage} alt="chatimage" />
                                    <div className="imc-welcome-text">
                                        <h3>Török Bence</h3>
                                        <span>Hobbijaim</span>
                                    </div>
                                    <div className="new-message">
                                        <GoDotFill className='message'/>
                                    </div>
                                </div>
                                <div onClick={() => setActive(3)} className={active === 3 ? "activemenu imc-welcome-content" : "imc-welcome-content"}>
                                    <img src={chatimage} alt="Tesztkep" />
                                    <div className="imc-welcome-text">
                                        <h3>Török Bence</h3>
                                        <span>Mit szeretnék elérni?</span>
                                    </div>
                                    <div className="new-message">
                                        <GoDotFill className='message'/>
                                    </div>
                                </div>
                                <div onClick={() => setActive(4)} className={active === 4 ? "activemenu imc-welcome-content" : "imc-welcome-content"}>
                                    <img src={chatimage} alt="Tesztkep" />
                                    <div className="imc-welcome-text" >
                                        <h3>Török Bence</h3>
                                        <span>Miért a webfejlesztés?</span>
                                    </div>
                                    <div className="new-message">
                                        <GoDotFill className='message'/>
                                    </div>
                                </div>
                            </div>
                        }
                        {active === 2 &&
                            <div className="imc-hobbijaim imc-list">
                                 <div className="imc-content-header">
                                    <MdOutlineKeyboardBackspace onClick={()=> setActive(1)} className='back' />
                                    <h3>Hobbijaim</h3>
                                </div>
                                <p>Gyakorlás és önfejlesztés mellett, nagyon szeretek a szabadban lenni, ebből kifolyólag sokat túrázom, evezek a barátaimmal.</p>
                                <p>Kedvenc időtöltésem a horgászat, amelyet már több mint 10 éve űzök. Büszkeséggel tölt el, hogy ez idő alatt sok barátommal sikerült megszerettetnem ezt a hobbit.</p>
                                <p>Szeretek biciklizni, ha tehetem minden nap megyek, sokszor az időjárás sem akadályoz meg ebben.</p>
                            </div>
                        }
                        {active === 3 &&
                            <div className="imc-celom imc-list">
                                 <div className="imc-content-header">
                                    <MdOutlineKeyboardBackspace onClick={()=> setActive(1)} className='back' />
                                    <h3>Mit szeretnék elérni? </h3>
                                </div>
                                <p>A szakmával hosszú távra tervezek, szeretném elérni a Full Stack fejlesztő szintet.</p>
                                <p>Ahogy a szakmában, úgy egy cégen belül is hosszú távra tervezek, ezért törekszem arra, hogy a lehető összes projekt amiben részt veszek sikert érjen el a cég, illetve a csapat javára.</p>
                            </div>
                        }
                        {active === 4 &&
                            <div className="imc-wfejlesztes imc-list">
                                <div className="imc-content-header">
                                    <MdOutlineKeyboardBackspace onClick={()=> setActive(1)} className='back' />
                                    <h3>Miért a webfejlesztés?</h3>
                                </div>
                                <p>Mindig is lenyűgöztek a kreatív weboldalak, sokszor foglalkoztatott a kérdés, hogy hogyan készült?</p>
                                <p>Középiskolai tanulmányok mellett elkezdtem tanulni itthoni körülmények között, a magas érdeklődésnek köszönhetően egyre több kihívást sikerült teljesítenem, ami még közelebb hozott a webfejlesztői szakmához.</p>
                                <p>Szeretem a kreativitást, lenyűgöző, hogy egy fehér oldalból mit lehet kihozni megfelelő tudással. Részese szerettem volna lenni ennek.</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IsmerjenMeg