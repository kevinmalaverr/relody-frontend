import React from 'react'
import '../styles/components/AuthForm.css'
import { useInputValue } from '../hooks/useInputValue'
import { validateEmail } from '../utils/validateInputs'
import { Link } from 'react-router-dom'
import { routes } from '../routes'

const sendForm = (data) => {
  window.fetch('http://localhost:3000/api/auth/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
  })
    .then(res => {
      console.log(res.status)
      return res
    })
    .then(res => res.json())
    .then(console.log)
    .catch(err => {
      console.error(err)
    })
}

export const AuthForm = ({ login }) => {
  const [email, setEmail] = useInputValue('')
  const [password, setPassword] = useInputValue('')

  return (
    <section className='auth-form-container'>
      <form className='auth-form' action=''>
        <h2>{login ? 'Ingresar' : 'Registrarse'}</h2>
        <hr />
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' placeholder='email' value={email} onChange={setEmail} />
        <label htmlFor='password'>Contraseña</label>
        <input type='password' id='password' placeholder='Contraseña' value={password} onChange={setPassword} />
        <button
          className='Button fill' onClick={(e) => {
            e.preventDefault()
            sendForm({
              name: 'kevin',
              email: 'kevinmalaverr@gmail.com',
              password: 'Kevin1234'
            })
          }}
        >Ingresar
        </button>
      </form>
      <div className='hola'>
        <div className='w' />
      </div>
      <Link to={routes.register}>Registrarse</Link>
    </section>
  )
}
