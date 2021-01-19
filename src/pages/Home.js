import React from 'react'
import '../styles/pages/Home.css'

import { Layout } from '../components/Layout'
import { Header } from '../components/Header'
import Picture from '../components/Picture'

// images
import imgLandingDesktop from '../assets/images/landing_desktop.jpg'
import imgLandingTablet from '../assets/images/landing_tablet.jpg'
import imgLandingPhone from '../assets/images/landing_phone.jpg'

const Home = () => {
  return (
    <Layout header={false}>
      <div className='hero'>
        <Header />
        <div className='hero__content'>
          <h1 className='hero__title'>Hero messagge</h1>
        </div>
        <Picture
          imgProps={{ className: 'hero__background', alt: 'background' }}
          phone={imgLandingPhone}
          tablet={imgLandingTablet}
          desktop={imgLandingDesktop}
        />
      </div>
    </Layout>
  )
}

export default Home
