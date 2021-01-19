import React from 'react'
import '../styles/pages/Home.css'

import { Header } from '../components/Header'

// images
import landingDesktop from '../assets/images/landing_desktop.jpg'
import landingTablet from '../assets/images/landing_tablet.jpg'
import landingPhone from '../assets/images/landing_phone.jpg'

const Home = () => {
  return (
    <>
      <Header />
      <section>
        <picture>
          <source srcSet={landingDesktop} media='(min-width: 1000px)' />
          <source srcSet={landingTablet} media='(min-width: 600px)' />
          <img className='hero-image' src={landingPhone} alt='landing image' />
        </picture>
      </section>
    </>
  )
}

export default Home
