import React from 'react'
import '../styles/components/Navbar.scss'

export const Navbar = ({ type }) => {
  return (
    <nav className={`Navbar Navbar--${type}`}>
      <ul>
        <button>canciones</button>
        <button>lecciones</button>
        <button>radio</button>
      </ul>
    </nav>
  )
}
