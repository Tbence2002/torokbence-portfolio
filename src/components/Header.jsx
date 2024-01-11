import React, { useState } from 'react'
import "./header.css"
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

function Header() {
  const [active, setActive] = useState(false);
  return (
    <div className='header-container'>
      <header className='header'>
        <div className="menu-open" onClick={() => setActive(!active)}>
          <HiOutlineMenuAlt2 />
        </div>
        <nav>
          <ul className={active ? "show-nav" : ""}>
            <div className="menu-close" onClick={() => setActive(!active)}>
              <IoMdClose />
            </div>
            <li onClick={()=> setActive(false)} className='rolam'><a href="#rolam" rel="noreferrer">Rólam</a></li>
            <li onClick={()=> setActive(false)} className='munkaim'><a href="#munkaim" rel="noreferrer">Munkáim</a></li>
            <li onClick={()=> setActive(false)} className='kapcsolat'><a href="#kapcsolat" rel="noreferrer">Kapcsolat</a></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header