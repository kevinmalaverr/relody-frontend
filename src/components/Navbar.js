import React from 'react'
import '../styles/components/Navbar.css'
import { Link } from 'react-router-dom'
import { routes } from '../routes'
import IClose from './icons/close'

const Navbar = React.forwardRef(({ type, className, close }, ref) => {
  return (
    <nav ref={ref} className={`navbar navbar--${type} ${className}`}>
      {type === 'lateral' ? <button className='close-menu' onClick={close}><IClose /></button> : null}
      <ul>
        <Link to={routes.songs} className='Link'>canciones</Link>
        <Link to={routes.lessons} className='Link'>lecciones</Link>
      </ul>
    </nav>
  )
})

export default Navbar
