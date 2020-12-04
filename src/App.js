import React, { useEffect } from 'react'
import './styles/App.scss'
import { loadTheme, changeTheme } from './utils/themeSelector'
import { RouterComponent } from './routes'

export const App = () => {
  useEffect(() => {
    loadTheme()
    return () => { }
  }, [])

  return (
    <>
      <button onClick={changeTheme}>cambiar</button>
      <RouterComponent />
    </>
  )
}
