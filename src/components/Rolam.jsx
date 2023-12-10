import React, {useEffect} from 'react'
import rolam from '../assets/rolamkep.png'
import "./rolam.css"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchool } from "react-icons/io5";
import { FaGithubSquare, FaLinkedin, FaCode } from "react-icons/fa";
import ScrollAnimation from './ScrollAnimation'
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';

function Rolam() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      gsap.set('.html, .css, .js, .react, .angular, .figma', { y: '-50px', opacity:0});
      gsap.set('.mysql, .mongodb, .nodejs', { y: '50px', opacity:0});

      gsap.to('.html', {
        duration: 0.8,
        y: '0px',
        opacity:1,
        ease: 'power2.inOut',
        delay: 0,
      }); 

      gsap.to('.css', {
        duration: 0.8,
        y: '0px',
        opacity:1,
        ease: 'power2.inOut',
        delay: 0.1,
      });

      gsap.to('.js', {
        duration: 0.8,
        y: '0px',
        opacity:1,
        ease: 'power2.inOut',
        delay: 0.2,
      });
      gsap.to('.react', {
        duration: 0.8,
        y: '0px',
        opacity:1,
        ease: 'power2.inOut',
        delay: 0.3,
      });
      gsap.to('.angular', {
        duration: 0.8,
        y: '0px',
        opacity:1,
        ease: 'power2.inOut',
        delay: 0.4,
      });
      gsap.to('.figma', {
        duration: 0.8,
        y: '0px',
        opacity:1,
        ease: 'power2.inOut',
        delay: 0.5,
      });
      gsap.to('.mysql', {
        duration: 0.8,
        y: '0px',
        opacity:1,
        ease: 'power2.inOut',
        delay: 0,
      });
      gsap.to('.mongodb', {
        duration: 0.8,
        y: '0px',
        opacity:1,
        ease: 'power2.inOut',
        delay: 0.1,
      });
      gsap.to('.nodejs', {
        duration: 0.8,
        y: '0px',
        opacity:1,
        ease: 'power2.inOut',
        delay: 0.2,
      });
    } else {
      gsap.set('.html, .css, .js, .react, .angular, .figma', { y: '-50px', opacity:0});
      gsap.set('.mysql, .mongodb, .nodejs', { y: '50px', opacity:0});
    }
  }, [inView]);

  return (
    <div className='rolam-container' id='rolam' >
      <ScrollAnimation>
      <div className="rolam-content">
        <div className="rolam-text">
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
        <div className="rolam-image">
          <img src={rolam} alt="Török Bence" />
        </div>
      </div>
      </ScrollAnimation>
      <div className="tanulmanyok-content">
        <div className="rolam-text" >
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
              date="2023.10.12. -"
              iconStyle={{ background: '#5F7ADB', color: '#fff' }}
              icon={<FaCode />}
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
          <div className="rolam-skills-frontend" ref={ref}>
             <div className="skills-box html">
                <div className="skills-content">
                  <h3>HTML</h3>
                </div>
              </div>
              <div className="skills-box css">
                <div className="skills-content">
                  <h3>CSS</h3>
                </div>
              </div>
              <div className="skills-box js">
                <div className="skills-content">
                  <h3>JavScript</h3>
                </div>
              </div>
              <div className="skills-box react">
                <div className="skills-content">
                  <h3>ReactJS</h3>
                </div>
              </div>
              <div className="skills-box angular">
                <div className="skills-content">
                  <h3>Angular</h3>
                </div>
              </div>
              <div className="skills-box figma">
                <div className="skills-content">
                  <h3>Figma</h3>
                </div>
              </div>
          </div>
          <div className='rolam-skills-backend'>
             <div className="skills-box mysql">
              <div className="skills-content">
                <p>Backend</p>
                <h3>MySQL</h3>
              </div>
            </div>
            <div className="skills-box mongodb">
              <div className="skills-content">
                <p>Backend</p>
                <h3>MongoDB</h3>
              </div>
            </div>
            <div className="skills-box nodejs">
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