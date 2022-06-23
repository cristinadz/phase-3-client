import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav> 
      <div className = "nav-links-container">
        <NavLink to="/"> home </NavLink>
        <NavLink to="/browse"> browse </NavLink>
        <NavLink to="/my-list"> my list </NavLink>
      </div>
    </nav>
  )
}

export default NavBar