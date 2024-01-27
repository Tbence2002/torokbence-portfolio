import React,{useEffect} from 'react'
import "./hero.css"
import {gsap} from 'gsap'

function Hero() {
    useEffect(() => {
        gsap.set('.hero-bg-layer-1', { y: '0px' }); 
        gsap.set('.hero-bg-layer-2', { y: '-300px' });
        gsap.set('.hero-bg-title', {y:'-600px', opacity:0});
        gsap.set('.hero-bg-small-title', {y:'800px', opacity:0});
        gsap.set('.hero-bg-image', {y:'0'});
        const isMobile = window.innerWidth <= 612;
        if(isMobile) {
          gsap.to('.hero-bg-layer-1', {
            duration: 3,
            y: '-600px', 
            ease: 'power2.inOut',
            delay:'-1'
          });
          gsap.to('.hero-bg-layer-2', {
            duration: 3.6,
            y: '-990px', 
            ease: 'power2.inOut',
            delay:'-1',
          });
          gsap.to('.hero-bg-title', {
            duration:4,
            y:'0px',
            ease:'power2.inOut',
            delay:-0.6,
            opacity:1
        })

        gsap.to('.hero-bg-small-title', {
            duration:4,
            y:'0px',
            ease:'power2.inOut',
            delay:-0.6,
            opacity:1
        })
        } else {
        gsap.to('.hero-bg-layer-1', {
          duration: 3,
          y: '-600px', 
          ease: 'power2.inOut',
        });
    
        gsap.to('.hero-bg-layer-2', {
          duration: 3.6,
          y: '-990px', 
          ease: 'power2.inOut',
        });
        gsap.to('.hero-bg-title', {
          duration:4,
          y:'0px',
          ease:'power2.inOut',
          delay:0.6,
          opacity:1
      })

      gsap.to('.hero-bg-small-title', {
          duration:4,
          y:'0px',
          ease:'power2.inOut',
          delay:0.6,
          opacity:1
      })
      }

        gsap.to('.hero-bg-image', {
            duration:3,
            y:'-150px',
            ease:'power2.inOut',
            delay:0.7
        })
      }, []);

  return (
    <div className='hero-container'>
            <div className="hero-bg-image">
              <div className="hero-bg-dark-layer"></div>
            </div>
            <div className="hero-bg-layer-1"></div>
            <div className="hero-bg-layer-2"></div>
            <div className="hero-bg-text">
                <h1 className='hero-bg-title'>Török Bence</h1>
                <p className='hero-bg-small-title'>Junior Frontend Fejlesztő</p>
            </div>
    </div>
  )
}

export default Hero