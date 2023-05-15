export interface ThemeContext {
  isToggle?: boolean
  handleToggle?: () => void
}

export interface Theme {
    background: string
    backgroundInputs: string
    textColor: string
    textColorSecundary: string
    colorHearth: string,
    colorIconHome: string,
    colorIconCross: string,
}

export interface ThemeObject {
  theme?: Theme
}
