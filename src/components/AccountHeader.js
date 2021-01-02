import React, { useState } from 'react'
import '../styles/components/AccountHeader.css'
import { useOutsideClick } from '../hooks/useOutsideClick'
import { Link } from 'react-router-dom'
import { routes } from '../routes'

const user = {
  name: 'gatomon',
  photo: 'https://lh3.googleusercontent.com/ogw/ADGmqu_b6BOzJY53OJ9W2V6CmpkV_4gcSGQ-H5lV7MFU=s32-c-mo',
  points: 451
}

export const AccountHeader = () => {
  const [isShow, setShow] = useState(false)
  const ref = useOutsideClick(() => setShow(false))

  return (
    <>{user
      ? <div ref={ref} className='AccountHeader-container'>
        <button className='AccountHeader-profile' onClick={() => setShow(!isShow)}>
          <img src={user.photo} alt='perfil' />
          <span>{user.points} pts</span>
        </button>
        <div className={`AccountHeader-modal ${isShow ? 'show' : ''}`}>
          <img src={user.photo} alt='perfil' />
          <p>{user.name}</p>
          <ul>
            <li>
              <Link className='Link' to='/profile'>Ver perfil</Link>
            </li>
            <li>
              <Link className='Link' to='sign-out'>Cerrar sesion</Link>
            </li>
          </ul>
        </div>
        </div>
      : <div>
        <Link to={routes.login} className='Link'>Iniciar sesion</Link>
        <Link to={routes.register} className='Link fill'>Registrarse</Link>
        </div>}
    </>
  )
}
