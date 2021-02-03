import React from 'react'
import '../styles/pages/Home.css'

import { Layout } from '../components/Layout'
import { Header } from '../components/Header'
import Picture from '../components/Picture'
import { useDispatch, useSelector } from 'react-redux'

// images
import imgLandingDesktop from '../assets/images/landing_desktop.jpg'
import imgLandingTablet from '../assets/images/landing_tablet.jpg'
import imgLandingPhone from '../assets/images/landing_phone.jpg'

const Home = () => {
  const userId = useSelector(state => state.userId)
  const dispatch = useDispatch()
  return (
    <Layout header={false}>
      <section className='hero'>
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
      </section>
      <section className='container'>
        <h1>clickk</h1>
        <button onClick={() => {
          console.log('click')
          dispatch({ type: 'USER_FETCH_REQUESTED', payload: { userId } })
        }}
        >
          click aqui
        </button>
      </section>
    </Layout>
  )
}

export default Home
