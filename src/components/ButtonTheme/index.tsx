import { useTheme } from '../../contexts/ThemesContext'
import { Buttontheme } from './styles'

const ButtonTheme = () => {
  const { isToggle, handleToggle } = useTheme()
  return <Buttontheme onClick={handleToggle}>{isToggle ? '🌙'  : '🌤️'}</Buttontheme>
}

export default ButtonTheme
