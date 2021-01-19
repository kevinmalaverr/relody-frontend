
export const changeTheme = () => {
  if (window.localStorage.getItem('theme') === 'dark') {
    console.log(window.localStorage.getItem('theme'))
    window.localStorage.setItem('theme', 'light')
    document.documentElement.className = 'theme-light'
  } else {
    window.localStorage.setItem('theme', 'dark')
    document.documentElement.className = 'theme-dark'
  }
}

export const loadTheme = () => {
  if (window.localStorage.getItem('theme') === 'dark') {
    document.documentElement.className = 'theme-dark'
  } else {
    document.documentElement.className = 'theme-light'
  }
}
