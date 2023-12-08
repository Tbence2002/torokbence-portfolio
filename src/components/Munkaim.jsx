import React from 'react'
import "./munkaim.css"
import ScrollAnimation from './ScrollAnimation'

function Munkaim() {
    return (
        <div className="munkaim-container" id='munkaim'>
            <div className="munkaim-content">
                <div className="rolam-text">
                    <p>Projektek</p>
                    <h2>Munkáim</h2>
                </div>
                <div className="rolam-works">
                    <ScrollAnimation>
                    <div className="works-box">
                        <div className="works-content">
                            <div className="works-image">
                                <div className="mozi work">
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
                                    <button>GitHub</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation>
                    <div className="works-box">
                        <div className="works-content">
                            <div className="works-image">
                                <div className="vt work">
                                </div>
                            </div>
                            <div className="works-text">
                                <p>Egyéni munka</p>
                                <h3>Vadásztársaság Projekt</h3>
                                <p>Egy régebbi weboldal ráncfelvarrása, amely teljes mértékben reszponzív, megfelel a mai modern design elvárásoknak.</p>
                                <p>Tartalmaz admin oldalt, ahol lehet képeket feltölteni, híreket, tagok neveit és tisztségét közzé tenni.</p>
                                <div className="technologia">
                                    <p>Technológia:</p>
                                    <p>HTML, CSS, React, NodeJS, MySQL, Firebase</p>
                                </div>
                                <div className="demo">
                                    <button>Demo</button>
                                    <button>GitHub</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation>
                    <div className="works-box">
                        <div className="works-content">
                            <div className="works-image">
                                <div className="cipo work">
                                </div>
                            </div>
                            <div className="works-text">
                                <p>Egyéni munka</p>
                                <h3>Cipő Webshop Projekt</h3>
                                <p>Egy korszerű, felhasználóbarát cipő webáruház Frontend terve, ahol a vásárlók kényelmesen tudnak nézelődni. </p>
                                <p className='cipo-text'>A weboldal kizárólag látvány miatt készült, nem tartalmaz Backendet, így a rendelés, vásárlás funkciók nem működnek.</p>
                                <div className="technologia">
                                    <p>Technológia:</p>
                                    <p>HTML, CSS, React</p>
                                </div>
                                <div className="demo">
                                    <button>Demo</button>
                                    <button>GitHub</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    )
}

export default Munkaim