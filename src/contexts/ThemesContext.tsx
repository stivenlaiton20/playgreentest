import { useState, createContext, useEffect, useContext } from 'react'
import { ThemeContext, PropsProvider, initialState } from '../interfaces'
import { ThemeProvider, Global, css } from '@emotion/react'
import { darkTheme, lightTheme } from '../theme/theme'
import { getInLocalStorage, saveInLocalStorage } from '../utils'

const ThemesContext = createContext<ThemeContext>(initialState)

export function useTheme(): ThemeContext {
  return useContext(ThemesContext)
}

export const ThemesProvider = ({ children }: PropsProvider) => {
  const [isToggle, setIsToggle] = useState(false)

  const handleToggle = () => {
    setIsToggle(!isToggle)
    saveInLocalStorage('theme', isToggle)
  }

  const globalBackground = isToggle ? lightTheme.background : darkTheme.background

  const data = { isToggle, handleToggle }

  useEffect(() => {
    const storedToggleTheme = getInLocalStorage('theme') 
    setIsToggle(!storedToggleTheme)
  }, [])

  return (
    <ThemesContext.Provider value={data}>
      <ThemeProvider theme={isToggle ? lightTheme : darkTheme}>
        <Global
          styles={css`
            body {
              background: ${globalBackground};
            }
          `}
        />
        {children}
      </ThemeProvider>
    </ThemesContext.Provider>
  )
}

export default ThemesContext
