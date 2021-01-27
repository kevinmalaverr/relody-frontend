import React from 'react'
import { AuthForm } from '../components/AuthForm'
import { useLocation } from 'react-router-dom'
import { routes } from '../routes'

const Auth = () => {
  const location = useLocation()
  return (
    <AuthForm login={location.pathname === routes.login} />
  )
}

export default Auth
