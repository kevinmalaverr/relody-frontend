import { changeTheme } from './themeSelector'

export const changeThemeOnKey = () => {
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'y') {
      changeTheme()
    }
  })
}

/**
 * executes all development utilities:
 * - changeThemeOnKey
 */
export default () => {
  changeThemeOnKey()
}
