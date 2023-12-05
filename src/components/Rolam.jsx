import React, { useRef, useEffect } from 'react'
import rolam from '../assets/rolamkep.svg'
import "./rolam.css"
import gsap from 'gsap'
import { useInView } from 'react-intersection-observer'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchool } from "react-icons/io5";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

function Rolam() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  const elementRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    const image = imageRef.current;

    if (inView) {
      gsap.to([element, image], {
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
        y: '-0px',
      });
    } else {
      gsap.to([element, image], {
        scale: 0,
        duration: 0.5,
        ease: 'power2.out',
        y: '200px',
      });
    }
  }, [inView]);


  return (
    <div className='rolam-container'>
      <div className="rolam-content" ref={ref}>
        <div className="rolam-text" ref={elementRef}>
          <p>Bemutatkozom</p>
          <h2>Rólam</h2>
          <p>Török Bence vagyok, Junior Frontend fejlesztő. Érdeklődésem a weboldal fejlesztés felé kisebb koromig visszanyúlik, ezért középiskolai tanulmányaimat Informatika
            ágazaton végeztem el, ami megerősített abban, hogy Webfejlesztő legyek, így elvégeztem egy Szoftverfejlesztő-és tesztelő 2 éves képzést is.</p>
          <p>Számomra nagyon fontos a fejlődés, szabadidőmben nagyon sok időt fordítok az önfejlesztésre, valamint a gyakorlásra. Mindig tudtam, hogy ez az a munka, amelyet örömmel, lelkiismeretesen végzek,
            legjobb tudásomat beleadva, szenvedéllyel. - Ezt az álláspontomat mai napig fenntartom. </p>
          <p>A végcélom a szakmában, hogy eljussak a Full Stack fejlesztő szintre.</p>
          <div className="social">
            <FaGithubSquare />
            <FaLinkedin />
          </div>
        </div>
        <div className="rolam-image" ref={imageRef}>
          <img src={rolam} alt="Török Bence" />
        </div>
      </div>
      <div className="tanulmanyok-content">
        <div className="rolam-text">
          <p>Végzettség, munkahely</p>
          <h2>Életpályám</h2>
        </div>
        <div className="rolam-career">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#5F7ADB', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #5F7ADB' }}
              date="2017 - 2021"
              iconStyle={{ background: '#5F7ADB', color: '#fff' }}
              icon={<IoSchool />}
            >
              <h3 className="vertical-timeline-element-title">Érettségi</h3>
              <h4 className="vertical-timeline-element-subtitle">Szent István Katolikus Technikum és Gimnázium</h4>
              <p>
                Informatika szakirány, HTML, CSS, JS alapok.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2021 - 2023"
              contentStyle={{ background: '#A2B2EE', color: '#fff' }}
              iconStyle={{ background: '#5F7ADB', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #A2B2EE' }}
              icon={<IoSchool />}
            >
              <h3 className="vertical-timeline-element-title light">Szoftverfejlesztő -és tesztelő szak</h3>
              <h4 className="vertical-timeline-element-subtitle light">Szent István Katolikus Technikum és Gimnázium</h4>
              <p className='light'>
                HTML, CSS, JS, Bootstrap, Angular, Node.js.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#5F7ADB', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #5F7ADB' }}
              date="2023.09.30-"
              iconStyle={{ background: '#5F7ADB', color: '#fff' }}
              icon={<IoSchool />}
            >
              <h3 className="vertical-timeline-element-title">Webfejlesztő</h3>
              <h4 className="vertical-timeline-element-subtitle">Kovács Művek Kft.</h4>
              <p>
                HTML, CSS, JS, Bootstrap, Figma
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
      <div className="kepessegek-content">
        <div className="rolam-text">
          <p>Technológiák</p>
          <h2>Képességeim</h2>
        </div>
        <div className="rolam-skills">
          <div className="rolam-skills-frontend">
            <div className="skills-box">
              <div className="skills-content">
                <h3>HTML</h3>
              </div>
            </div>
            <div className="skills-box">
              <div className="skills-content">
                <h3>CSS</h3>
              </div>
            </div>
            <div className="skills-box">
              <div className="skills-content">
                <h3>JavaScript</h3>
              </div>
            </div>
            <div className="skills-box">
              <div className="skills-content">
                <h3>ReactJS</h3>
              </div>
            </div>
            <div className="skills-box">
              <div className="skills-content">
                <h3>Angular</h3>
              </div>
            </div>
            <div className="skills-box">
              <div className="skills-content">
                <h3>Figma</h3>
              </div>
            </div>
          </div>
          <div className='rolam-skills-backend'>
            <div className="skills-box">
              <div className="skills-content">
                <p>Backend</p>
                <h3>MySQL</h3>
              </div>
            </div>
            <div className="skills-box">
              <div className="skills-content">
                <p>Backend</p>
                <h3>MongoDB</h3>
              </div>
            </div>
            <div className="skills-box">
              <div className="skills-content">
                <p>Backend</p>
                <h3>NodeJS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rolam