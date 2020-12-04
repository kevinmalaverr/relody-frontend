import React from 'react'
import '../styles/components/Navbar.scss'
import { Link } from '@reach/router'

export const Navbar = ({ type }) => {
  return (
    <nav className={`Navbar Navbar--${type}`}>
      <ul>
        <Link to='songs' className='Link'>canciones</Link>
        <Link to='lessons' className='Link'>lecciones</Link>
        <Link to='radio' className='Link'>radio</Link>
      </ul>
    </nav>
  )
}
