import React, {useEffect, useState} from 'react'
import "./header.css"
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import gsap from 'gsap';

function Header() {
  const [active, setActive] = useState(false);
  return (
    <div className='header-container'>
        <header className='header'>
          <div className="menu-open" onClick={()=> setActive(!active)}>
            <HiOutlineMenuAlt2/>
          </div>
          <ul className={active ? "show-nav" : ""}>
            <div className="menu-close" onClick={()=> setActive(!active)}>
              <IoMdClose/>
            </div>
            <li className='rolam'><a href="#rolam">Rólam</a></li>
            <li className='munkaim'><a href="#munkaim">Munkáim</a></li>
            <li className='kapcsolat'><a href="#kapcsolat">Kapcsolat</a></li>
          </ul>
        </header>
    </div>
  )
}

export default Header