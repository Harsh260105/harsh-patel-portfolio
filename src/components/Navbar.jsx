import React from 'react'
import { NavLink } from 'react-router-dom'
import Resume from "../../HARSH-PATEL-Resume.pdf"

const Navbar = () => {
  return (
    <header className='header'>

        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className='blue-gradient_text'>HP</p>
        </NavLink>

        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to="/about" className={({ isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({ isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Projects
            </NavLink>
            <a href={Resume} target="_blank" rel="noopener noreferrer" className="text-black">
                Resume
            </a>
        </nav>

    </header>
  )
}

export default Navbar