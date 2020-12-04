import React from 'react'
import { Header } from '../components/Header'
import { Helmet } from 'react-helmet'

export const Layout = ({ children, title, descrition, header = true, footer = true }) => {
  return (
    <>
      <Helmet>
        {title ? <title>{title} | Relody</title> : null}
        {descrition ? <meta name='description' content={descrition} /> : null}
      </Helmet>
      {header ? <Header /> : null}
      <div className='container'>
        {children}
      </div>
      {footer ? <p>footer</p> : null}
    </>
  )
}
