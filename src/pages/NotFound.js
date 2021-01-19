import React from 'react'
import '../styles/components/NotFound.css'
import image from '../assets/images/image_404.svg'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found__container'>
      <img src={image} alt='' className='not-found' />
      <h1>No encontramamos lo que buscas</h1>
      <Link to='/' className='Link fill'>ir al inicio</Link>
    </div>
  )
}

export default NotFound
