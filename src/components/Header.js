import React from 'react'
import '../styles/components/Header.css'
import Navbar from './Navbar'
import { AccountHeader } from './AccountHeader'
import { Link } from 'react-router-dom'
import { routes } from '../routes'
import loadable from '@loadable/component'

export const Header = () => {
  return (
    <header className='header'>
      <Link to={routes.home}>
        RELODY
      </Link>
      <div />
      <Navbar type='header' />
      <div className='v-line' />
      <AccountHeader />
    </header>
  )
}
