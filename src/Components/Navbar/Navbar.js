import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav>
      <ul className="topdiv">
          <li className="topmenu" href="#about-me">About Me</li>
          <li className="topmenu" href="#skills">Skills</li>
          <li className="topmenu" href="#projects">Projects</li>
          <li className="topmenu" href="#recommendations">Recommendations</li>
          <button className='btn'>Contact Me</button>
      </ul>
      </nav>
    </div>
  )
}

export default Navbar
