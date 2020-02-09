import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper light-blue px1">
        <a href="/" className="brand-logo">React + TypeScript</a>
        <ul className="right hide-on-med-and-down">
          <li><NavLink to="/">ToDo List</NavLink></li>
          <li><NavLink to="/about">Info</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}