import React, { useEffect } from "react";
import rolam from "../assets/rolamkep.png";
import "./rolam.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchool } from "react-icons/io5";
import { FaGithubSquare, FaLinkedin, FaCode } from "react-icons/fa";
import ScrollAnimation from "./ScrollAnimation";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";

function Rolam() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      gsap.set(".html, .css,.scss, .js, .react, .angular", {
        y: "-50px",
        opacity: 0,
      });
      gsap.set(".figma, .git, .mysql, .mongodb, .firebase, .nodejs", {
        y: "50px",
        opacity: 0,
      });
      gsap.set(".boostrap, .tailwindcss", { y: "50px", opacity: 0 });

      gsap.to(".html", {
        duration: 0.8,
        y: "0px",
        opacity: 1,
        ease: "power2.inOut",
        delay: 0,
      });
      gsap.to(".css", {
        duration: 0.8,
        y: "0px",
        opacity: 1,
        ease: "power2.inOut",
        delay: 0.1,
      });
      gsap.to(".scss", {
        duration: 0.8,
        y: "0px",
        opacity: 1,
        ease: "power2.inOut",
        delay: 0.2,
      });
      gsap.to(".js", {
        duration: 0.8,
        y: "0px",
        opacity: 1,
        ease: "power2.inOut",
        delay: 0.3,
      });
      gsap.to(".react", {
        duration: 0.8,
        y: "0px",
        opacity: 1,
        ease: "power2.inOut",
        delay: 0.4,
      });
      gsap.to(".angular", {
        duration: 0.8,
        y: "0px",
        opacity: 1,
        ease: "power2.inOut",
        delay: 0.5,
      });
      gsap.to(".figma", {
        duration: 0.8,
        y: "0px",
        opacity: 1,
        ease: "power2.inOut",
        delay: 0,
      });
      gsap.to(".git", {
        duration: 0.8,
        y: "0px",
        opacity: 1,
        ease: "power2.inOut",
        delay: 0.1,
      });
      gsap.to(".mysql", {
        duration: 0.8,
        y: "0px",
        opacity: 1,
        ease: "power2.inOut",
        delay: 0.2,
      });
      gsap.to(".mongodb", {
        duration: 0.8,
        y: "0px",
        opacity: 1,
        ease: "power2.inOut",
        delay: 0.3,
      });
      gsap.to(".firebase", {
        duration: 0.8,
        y: "0px",
        opacity: 1,
        ease: "power2.inOut",
        delay: 0.4,
      });
      gsap.to(".nodejs", {
        duration: 0.8,
        y: "0px",
        opacity: 1,
        ease: "power2.inOut",
        delay: 0.5,
      });
      gsap.to(".bootstrap", {
        duration: 0.8,
        y: "0px",
        opacity: 1,
        ease: "power2.inOut",
        delay: 0.2,
      });
      gsap.to(".tailwindcss", {
        duration: 0.8,
        y: "0px",
        opacity: 1,
        ease: "power2.inOut",
        delay: 0.3,
      });
    } else {
      gsap.set(".html, .css, .js, .react, .angular, .git", {
        y: "-50px",
        opacity: 0,
      });
      gsap.set(".figma,.git, .mysql, .mongodb, .firebase, .nodejs ", {
        y: "50px",
        opacity: 0,
      });
      gsap.set(".bootstrap, .tailwindcss", { y: "50px", opacity: 0 });
    }
  }, [inView]);

  return (
    <div className="rolam-container" id="rolam">
      <ScrollAnimation result="rolam-content">
        <div className="rolam-text">
          <p>Bemutatkozom</p>
          <h2>Rólam</h2>
          <p>
            Török Bence vagyok, Junior Frontend fejlesztő React
            keretrendszerben. Érdeklődésem a weboldal fejlesztés felé kisebb
            koromig visszanyúlik, ezért középiskolai tanulmányaimat Informatika
            ágazaton végeztem el, ami megerősített abban, hogy Webfejlesztő
            legyek, így elvégeztem egy 2 éves Szoftverfejlesztő-és tesztelő
            képzést is.
          </p>
          <p>
            Számomra nagyon fontos a fejlődés, szabadidőmben nagyon sok időt
            fordítok az önfejlesztésre, valamint a gyakorlásra. A rám bízott
            feladatokat mindig a legjobb tudásom szerint valósítom meg, a
            legnagyobb pontossággal.{" "}
          </p>
          <p>
            A végcélom a szakmában, hogy eljussak a Full Stack fejlesztő
            szintre.
          </p>
          <div className="social">
            <a
              href="https://github.com/Tbence2002"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare className="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/t%C3%B6r%C3%B6k-bence-50653227b/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="linkedin" />
            </a>
          </div>
        </div>
        <div className="rolam-image">
          <img src={rolam} alt="Török Bence" />
        </div>
      </ScrollAnimation>
      <div className="tanulmanyok-content">
        <div className="rolam-text">
          <p>Végzettség, munkahely</p>
          <h2>Életpályám</h2>
        </div>
        <div className="rolam-career">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#5F7ADB", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #5F7ADB" }}
              date="2024.03.07. - "
              iconStyle={{ background: "#5F7ADB", color: "#fff" }}
              icon={<FaCode />}
            >
              <h3 className="vertical-timeline-element-title">
                Szoftverfejlesztő
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Quantelligen Kft.
              </h4>
              <p>React, NodeJS</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#5F7ADB", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #5F7ADB" }}
              date="2023.10.03. - 2024.02.12."
              iconStyle={{ background: "#5F7ADB", color: "#fff" }}
              icon={<FaCode />}
            >
              <h3 className="vertical-timeline-element-title">Webfejlesztő</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Kovács Művek Kft.
              </h4>
              <p>HTML, CSS, JS, Bootstrap, Figma</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2021 - 2023"
              contentStyle={{ background: "#A2B2EE", color: "#fff" }}
              iconStyle={{ background: "#5F7ADB", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #A2B2EE" }}
              icon={<IoSchool />}
            >
              <h3 className="vertical-timeline-element-title light">
                Szoftverfejlesztő -és tesztelő szak
              </h3>
              <h4 className="vertical-timeline-element-subtitle light">
                Szent István Katolikus Technikum és Gimnázium
              </h4>
              <p className="light">
                HTML, CSS, JS, Bootstrap, Angular, Node.js.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#5F7ADB", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #5F7ADB" }}
              date="2017 - 2021"
              iconStyle={{ background: "#5F7ADB", color: "#fff" }}
              icon={<IoSchool />}
            >
              <h3 className="vertical-timeline-element-title">Érettségi</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Szent István Katolikus Technikum és Gimnázium
              </h4>
              <p>Informatika szakirány, HTML, CSS, JS alapok.</p>
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
          <div className="rolam-skills-wrapper" ref={ref}>
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
            <div className="skills-box scss">
              <div className="skills-content">
                <h3>Sass</h3>
              </div>
            </div>
            <div className="skills-box js">
              <div className="skills-content">
                <h3>JavaScript</h3>
              </div>
            </div>
            <div className="skills-box react">
              <div className="skills-content">
                <h3>React</h3>
              </div>
            </div>
            <div className="skills-box angular">
              <div className="skills-content">
                <h3>Angular</h3>
              </div>
            </div>
          </div>
          <div className="rolam-skills-wrapper">
            <div className="skills-box figma">
              <div className="skills-content">
                <h3>Figma</h3>
              </div>
            </div>
            <div className="skills-box git">
              <div className="skills-content">
                <h3>GitHub</h3>
              </div>
            </div>
            <div className="skills-box mysql">
              <div className="skills-content">
                <h3>MySQL</h3>
              </div>
            </div>
            <div className="skills-box mongodb">
              <div className="skills-content">
                <h3>MongoDB</h3>
              </div>
            </div>
            <div className="skills-box firebase">
              <div className="skills-content">
                <h3>Firebase</h3>
              </div>
            </div>
            <div className="skills-box nodejs">
              <div className="skills-content">
                <h3>NodeJS</h3>
              </div>
            </div>
          </div>
          <div className="rolam-skills-wrapper">
            <div className="skills-box bootstrap">
              <div className="skills-content">
                <h3>Bootstrap</h3>
              </div>
            </div>
            <div className="skills-box tailwindcss">
              <div className="skills-content">
                <h3>TailwindCSS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rolam;
