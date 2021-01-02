import React, { useEffect } from 'react'
import './styles/App.css'
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
