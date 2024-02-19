import React from 'react'
import ScrollAnimation from './ScrollAnimation'
import patakparlat from '../assets/patakparlat.jpg'
import vadasztarsasag from '../assets/vadasztarsasag.jpg'
import cipowebshop from '../assets/cipowebshop.jpg'
import mozi from '../assets/mozi.jpg'
import weatherapp from '../assets/weatherapp.jpg'
import realtimechat from '../assets/realtimechatapp.jpg'
import Slide from './Slide'
import "./munkaim.css"

function Munkaim({ next, setNext }) {
    return (
        <div className="munkaim-container" id='munkaim'>
            <div className="munkaim-content">
                <div className="rolam-text">
                    <p>Projektek</p>
                    <h2>Munkáim</h2>
                </div>
                {
                    next === 1 &&
                    <div className="rolam-works">
                        <ScrollAnimation result="works-box">
                            <div className="works-content">
                                <div className="works-image">
                                    <div className="work">
                                        <img src={cipowebshop} alt="Cipő Webshop" />
                                    </div>
                                </div>
                                <div className="works-text">
                                    <p>Egyéni munka</p>
                                    <h3>Cipő Webshop Projekt</h3>
                                    <p>Egy korszerű, felhasználóbarát cipő webáruház Frontend megvalósítása. Kialakításkor külön figyelmet fektettem a felhasználói élményekre. </p>
                                    <p className='italic-text'>A weboldal kizárólag látvány miatt készült, nem tartalmaz Backendet, így a rendelés, vásárlás funkciók nem működnek.</p>
                                    <div className="technologia">
                                        <p>Technológia:</p>
                                        <p>HTML, CSS, React</p>
                                    </div>
                                    <div className="demo">
                                        <a href="https://shoes-react-app.vercel.app/" target='_blank' rel="noreferrer"><button>Demo</button></a>
                                        <a href="https://github.com/Tbence2002/shoes-react-app" target='_blank' rel="noreferrer"><button>GitHub</button></a>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation result="works-box">
                            <div className="works-content">
                                <div className="works-image">
                                    <div className="work">
                                        <img src={vadasztarsasag} alt="Vadásztársaság" />
                                    </div>
                                </div>
                                <div className="works-text">
                                    <p>Csapatmunka</p>
                                    <h3>Vadásztársaság Projekt</h3>
                                    <p>Készítéskor törekedtem a reszponzivitásra, illetve a mai modern design elvárásokra, együttműködve egy Backend fejlesztővel az adatok biztonságos tárolása végett.</p>
                                    <p>Tartalmaz admin oldalt, ahol lehet képeket, híreket és tagokat közzétenni.</p>
                                    <div className="technologia">
                                        <p>Technológia:</p>
                                        <p>HTML, CSS, React, Firebase, Spring, MySQL, Framer-motion</p>
                                    </div>
                                    <div className="demo">
                                        <a href="https://dusana-vadasztarsasag.vercel.app/" target='_blank' rel="noreferrer"><button>Demo</button></a>
                                        <a href="https://github.com/Tbence2002/dusana-vadasztarsasag" target='_blank' rel="noreferrer"><button>GitHub</button></a>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation result="works-box">
                            <div className="works-content">
                                <div className="works-image">
                                    <div className="work">
                                        <img src={weatherapp} alt="Időjárás App" />
                                    </div>
                                </div>
                                <div className="works-text">
                                    <p>Egyéni munka</p>
                                    <h3>Időjárás App</h3>
                                    <p>A webalkalmazás időjárás adatokat jelenít meg az Ön aktuális helyzete alapján, az OpenWeathermap API-t használva. </p>
                                    <p className='italic-text'>Tovább fejlesztés: a háttérkép mindig az aktuális időjárásnak megfelelően változzon. - 2024.02.19., elkészült. </p>
                                    <div className="technologia">
                                        <p>Technológia:</p>
                                        <p>React, Sass, Framer-motion, OpenWeathermap API</p>
                                    </div>
                                    <div className="demo">
                                        <a href="https://weather-app-tbence2002.vercel.app/" target='_blank' rel="noreferrer"><button>Demo</button></a>
                                        <a href="https://github.com/Tbence2002/weather_app" target='_blank' rel="noreferrer"><button>GitHub</button></a>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <Slide next={next} setNext={setNext} />
                    </div>
                }
                {
                    next === 2 &&
                    <div className="rolam-works">
                        <ScrollAnimation result="works-box">
                            <div className="works-content">
                                <div className="works-image">
                                    <div className="work">
                                        <img src={realtimechat} alt="RealtimeChatApp" />
                                    </div>
                                </div>
                                <div className="works-text">
                                    <p>Egyéni munka</p>
                                    <h3>Realtime Chat App</h3>
                                    <p>A weboldal egy valós idejű csoportos beszélgetést tesz lehetővé. Bejelentkezni Google fiókkal lehetséges.</p>
                                    <p className='italic-text'>Tovább fejlesztésként szeretném megoldani, hogy egyedi, privát szobákat is létre lehessen hozni, így létrejönne a privát csevegés.</p>
                                    <div className="technologia">
                                        <p>Technológia:</p>
                                        <p>React, TailwindCSS, daisyUI, Firebase</p>
                                    </div>
                                    <div className="demo">
                                        <a href="https://realtimechat-app-ruby.vercel.app/" target='_blank' rel="noreferrer"><button>Demo</button></a>
                                        <a href="https://github.com/Tbence2002/realtimechat-app" target='_blank' rel="noreferrer"><button>GitHub</button></a>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation result="works-box">
                            <div className="works-content">
                                <div className="works-image">
                                    <div className="work">
                                        <img src={patakparlat} alt="Patak-Párlat" />
                                    </div>
                                </div>
                                <div className="works-text">
                                    <p>Csapatmunka</p>
                                    <h3>Patak-Párlat</h3>
                                    <p>Az oldal egy pálinkafőzdének készült. A projektben együttműködtem egy backend fejlesztővel a szerveroldali adatok biztonságos kezelése végett.</p>
                                    <p>A projekthez tartozik admin és felhasználói oldal, ahonnan aktuális híreket, képeket lehet feltölteni és megtekinteni.</p>
                                    <div className="technologia">
                                        <p>Technológia:</p>
                                        <p>HTML, CSS, React, Spring, Firebase, MySQL</p>
                                    </div>
                                    <div className="demo">
                                        <a href="https://patak-parlat.com/" target='_blank' rel="noreferrer"><button>Demo</button></a>
                                        <a href="https://github.com/Tbence2002/patak-parlat" target='_blank' rel="noreferrer"><button>GitHub</button></a>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation result="works-box">
                            <div className="works-content">
                                <div className="works-image">
                                    <div className="work">
                                        <img src={mozi} alt="Mozi" />
                                    </div>
                                </div>
                                <div className="works-text">
                                    <p>Csapatmunka</p>
                                    <h3>Mozi Projekt</h3>
                                    <p>Az oldalt egy éven keresztül készítettük csapatban, amit a 2023-as tanév végén be kellett mutatnunk angolul, illetve magyarul.</p>
                                    <p>A projekthez készült egy 40 ezer karakterből álló Felhasználói,- és Fejlesztői dokumentáció is.</p>
                                    <div className="technologia">
                                        <p>Technológia:</p>
                                        <p>HTML, CSS, React, NodeJS, MySQL</p>
                                    </div>
                                    <div className="demo">
                                        <a href="https://github.com/Tbence2002/Popcorn_city" target='_blank' rel="noreferrer"><button>GitHub</button></a>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <Slide next={next} setNext={setNext} />
                    </div>
                }
            </div>
        </div>
    )
}

export default Munkaim