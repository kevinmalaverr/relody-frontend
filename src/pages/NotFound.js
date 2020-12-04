import React from 'react'
import '../styles/components/NotFound.scss'
import image from '../assets/images/image_404.svg'
import { Link } from '@reach/router'

const NotFound = () => {
  return (
    <div className='NotFound-container'>
      <img src={image} alt='' className='NotFound-image' />
      <h1>No encontrmamos lo que buscas</h1>
      <Link to='/' className='Link fill'>ir al inicio</Link>
    </div>
  )
}

export default NotFound
