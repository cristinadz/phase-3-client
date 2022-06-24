import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className = "navbar navbar-expand-lg"> 
      <div className="container bg-warning"> 
        <a href='' className="navbar-brand">
          <span className = "display-5 ">
            idk
            {/* woc<strong>reads</strong> */}
          </span>
        </a>
    
        <div className='align-center'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className = "nav-link" to="/"> home </NavLink>
            </li>
            <li className='nav-item'>
            <NavLink className = "nav-link" to="/browse"> browse </NavLink>
            </li>
            <li className='nav-item'>
            <NavLink className = "nav-link" to="/my-list"> my list </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar