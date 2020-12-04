import React from 'react'
import { AuthForm } from '../components/AuthForm'
import { useLocation } from '@reach/router'
import { routes } from '../routes'

const Auth = () => {
  const location = useLocation()
  return (
    <AuthForm login={location.pathname === routes.login} />
  )
}

export default Auth
