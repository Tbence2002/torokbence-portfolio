import React, {useEffect} from 'react'
import "./header.css"
import {gsap} from 'gsap'

function Header() {
  useEffect(()=> {
    gsap.set('.header', {y:'-100px'});
    gsap.set('.rolam, .munkaim, .kapcsolat', {y:'-100px'});
    gsap.to('.header', {
      duration:2,
      y:'0px',
      ease:'power2.inOut',
      delay:2.5,
    })
    gsap.to('.rolam', {
      duration:2,
      y:'0px',
      ease:'power2.inOut',
      delay:2.2,
    })
    gsap.to('.munkaim', {
      duration:2,
      y:'0px',
      ease:'power2.inOut',
      delay:2.4,
    })
    gsap.to('.kapcsolat', {
      duration:2,
      y:'0px',
      ease:'power2.inOut',
      delay:2.5,
    })
  })
  return (
    <div className='header-container'>
        <header className='header'>
          <ul>
            <li className='rolam'><a href="#rolam">Rólam</a></li>
            <li className='munkaim'><a href="#munkaim">Munkáim</a></li>
            <li className='kapcsolat'><a href="#kapcsolat">Kapcsolat</a></li>
          </ul>
        </header>
    </div>
  )
}

export default Header