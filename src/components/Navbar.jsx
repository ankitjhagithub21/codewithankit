import React, { useState } from 'react'
import { FaCode } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu";
import { MdLightMode, MdNightlight } from "react-icons/md";

const Navbar = () => {
  const links = [{ id: 1, name: "home" }, { id: 2, name: "about" }, { id: 3, name: "projects" }, { id: 4, name: "contact" }]
  const [active,setActive] = useState('home')
  const [isDark, setIsDark] = useState(false)
  if (isDark) {
    document.body.classList.replace('dark', 'light');
  } else {
    document.body.classList.replace('light', 'dark');
  }
  return (
    <nav className={`navbar navbar-expand-lg fixed-top  ${isDark ? 'bg-white' : 'bg-black'}`} data-aos="fade-down">
      <div className="container">
        <h2 className="fs-5">
          <FaCode size={30} />
          <span> CodeWithAnkit</span>
        </h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <LuMenu size={30} color={`${isDark?'black':'white'}`}/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {
              links.map((link) => {
                return <li className="nav-item" key={link.id}>
                  <a className={`mx-2 ${isDark ? 'text-black': 'text-white'} ${active==link.name ? 'border-bottom':''}`} href={`#${link.name}`} onClick={()=>setActive(link.name)}>
                    {link.name.toUpperCase()}
                  </a>
                </li>
              })
            }

          </ul>
          <button className='btn' onClick={() => setIsDark(!isDark)}>
            {
              isDark ? <MdNightlight size={25} color='black'/> : <MdLightMode size={25} color='white'/>
            }
          </button>
        </div>
      </div>
    </nav>

  )
}

export default Navbar