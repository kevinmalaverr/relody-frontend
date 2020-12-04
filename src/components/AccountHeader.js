import React, { useState } from 'react'
import '../styles/components/AccountHeader.scss'
import { Link } from '@reach/router'
import { routes } from '../routes'

const user = {
  name: 'gatomon',
  photo: 'https://lh3.googleusercontent.com/ogw/ADGmqu_b6BOzJY53OJ9W2V6CmpkV_4gcSGQ-H5lV7MFU=s32-c-mo',
  points: 451
}

export const AccountHeader = () => {
  const [isShow, show] = useState(false)

  return (
    <>{user
      ? <div className='AccountHeader-container'>
        <button className='AccountHeader-profile' onClick={() => show(!isShow)}>
          <img src={user.photo} alt='perfil' />
          <span>{user.points} pts</span>
        </button>
        <div className={`AccountHeader-modal ${isShow ? 'show' : ''}`}>
          <img src={user.photo} alt='perfil' />
          <p>{user.name}</p>
          <ul>
            <li>
              <Link class='Link' to='/profile'>Ver perfil</Link>
            </li>
            <li>
              <Link class='Link' to='sign-out'>Cerrar sesion</Link>
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
