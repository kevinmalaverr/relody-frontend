import React, { useState } from 'react'
import '../styles/components/Header.css'
import Navbar from './Navbar'
import { AccountHeader } from './AccountHeader'
import { Link } from 'react-router-dom'
import { routes } from '../routes'
import loadable from '@loadable/component'
import { useOutsideClick } from '../hooks/useOutsideClick'
import ILogo from './icons/logo'
import IHamburger from './icons/hamburger'

export const Header = () => {
  const [showLateralMenu, setShowLateralMenu] = useState(false)
  const lateralMenuRef = useOutsideClick(() => setShowLateralMenu(false))

  return (
    <header className='header'>
      <Link to={routes.home}>
        <ILogo />
      </Link>
      <div />
      <Navbar type='header' />
      <AccountHeader />
      <button className='show-menu' onClick={() => setShowLateralMenu(!showLateralMenu)}><IHamburger /></button>
      <Navbar ref={lateralMenuRef} type='lateral' close={() => setShowLateralMenu(false)} className={showLateralMenu ? 'active' : ''} />
    </header>
  )
}
