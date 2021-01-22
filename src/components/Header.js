import React, { useState } from 'react'
import '../styles/components/Header.css'
import Navbar from './Navbar'
import { AccountHeader } from './AccountHeader'
import { Link } from 'react-router-dom'
import { routes } from '../routes'
import loadable from '@loadable/component'
import { useOutsideClick } from '../hooks/useOutsideClick'

export const Header = () => {
  const [showLateralMenu, setShowLateralMenu] = useState(false)
  const lateralMenuRef = useOutsideClick(() => setShowLateralMenu(false))

  return (
    <header className='header'>
      <Link to={routes.home}>
        RELODY
      </Link>
      <div />
      <Navbar type='header' />
      <div className='v-line' />
      <AccountHeader />
      <button className='show-menu' onClick={() => setShowLateralMenu(!showLateralMenu)}>x</button>
      <Navbar ref={lateralMenuRef} type='lateral' close={() => setShowLateralMenu(false)} className={showLateralMenu ? 'active' : ''} />
    </header>
  )
}
