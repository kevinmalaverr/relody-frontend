import React from 'react'
import '../styles/components/Header.scss'
import { Navbar } from './Navbar'
import { AccountHeader } from './AccountHeader'

export const Header = () => {
  return (
    <header className='Header'>
      <span>Relody</span>
      <div>
        <Navbar type='header' />
        <AccountHeader />
      </div>
    </header>
  )
}
