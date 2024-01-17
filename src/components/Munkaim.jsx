import React from 'react'
import toast from 'react-hot-toast'
import ScrollAnimation from './ScrollAnimation'
import bdportfolio from '../assets/bdportfolio.jpg'
import patakparlat from '../assets/patakparlat.jpg'
import vadasztarsasag from '../assets/Fooldal.jpg'
import cipowebshop from '../assets/cipowebshop.jpg'
import mozi from '../assets/mozi.jpg'
import Slide from './Slide'
import "./munkaim.css"
function Munkaim({ next, setNext }) {
    function handleWorking() {
        toast.error("Az oldal fejlesztés alatt!");
    }
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
                                    <p className='cipo-text'>A weboldal kizárólag látvány miatt készült, nem tartalmaz Backendet, így a rendelés, vásárlás funkciók nem működnek.</p>
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
                                        <img src={bdportfolio} alt="Balogh Dávid Portfolió" />
                                    </div>
                                </div>
                                <div className="works-text">
                                    <p>Egyéni munka</p>
                                    <h3>Balogh Dávid portfolió</h3>
                                    <p>A projektben törekedtem arra, hogy egy átfogó weboldalt készítsek, amely megfelel a mai elvárásoknak, és élményt nyújt a felhasználónak.</p>
                                    <p>Külön figyelmet fektettem a keresőoptimalizálásra, az animációkra és a megjelenésre, amely növeli a látogató benyomását. </p>
                                    <div className="technologia">
                                        <p>Technológia:</p>
                                        <p>HTML, CSS, React, GSAP</p>
                                    </div>
                                    <div className="demo">
                                        <a href="https://baloghjavadev.com/" target='_blank' rel="noreferrer"><button>Demo</button></a>
                                        <a href="https://github.com/Florex001/portfolio-web-2.0" target='_blank' rel="noreferrer"><button>GitHub</button></a>
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
                        <ScrollAnimation result="works-box">
                            <div className="works-content">
                                <div className="works-image">
                                    <div className="work">
                                        <img src={vadasztarsasag} alt="Vadásztársaság" />
                                    </div>
                                </div>
                                <div className="works-text">
                                    <p>Egyéni munka</p>
                                    <h3>Vadásztársaság Projekt</h3>
                                    <p>Vadászat témájú weboldal, melynek készítésekor törekedtem a reszponzív nézetre, illetve a mai modern design elvárásokra.</p>
                                    <p>Tartalmaz admin oldalt, ahol lehet képeket, híreket és tagokat közzétenni.</p>
                                    <div className="technologia">
                                        <p>Technológia:</p>
                                        <p>HTML, CSS, React, NodeJS, MySQL, Firebase</p>
                                    </div>
                                    <div className="demo">
                                        <button onClick={handleWorking}>Demo</button>
                                        <a href="https://github.com/Tbence2002/dusana_vadasztarsasag" target='_blank' rel="noreferrer"><button>GitHub</button></a>
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