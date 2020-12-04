import React from 'react'
import '../styles/components/Header.scss'
import { Navbar } from './Navbar'
import { AccountHeader } from './AccountHeader'
import { Link } from '@reach/router'
import { routes } from '../routes'

export const Header = () => {
  return (
    <header className='Header'>
      <Link to={routes.home}>
        LOGO
      </Link>
      <div />
      <Navbar type='header' />
      <div className='v-line' />
      <AccountHeader />
    </header>
  )
}
