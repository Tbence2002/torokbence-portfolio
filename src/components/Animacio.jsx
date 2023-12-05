import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useInView } from 'react-intersection-observer'

function Animacio({view}) {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.4,
      });
    
      const elementRef = useRef(null);
    
      useEffect(() => {
        const element = elementRef.current;
    
        if (inView) {
          gsap.to(element, {
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
          });
        } else {
          gsap.to(element, {
            scale: 0,
            duration: 0.5,
            ease: 'power2.out',
          });
        }
      }, [inView]);
  return (
    <div className='animated-element' ref={ref}>
    <div className="animated-content" ref={elementRef}>
      {view}
    </div>
  </div>
  )
}

export default Animacio