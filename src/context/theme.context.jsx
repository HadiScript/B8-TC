import { createContext, useContext, useState } from "react";
import { blue, cyan, grey, teal } from "../helpers/constants/theme.data";


const themeContext = createContext();

export const useTheme = () => useContext(themeContext);


const ThemeProvider = ({ children }) => {


  const [theme, setTheme] = useState({
    borderRadius: 6,
    colorPrimary: '#083344',
    Button: {
      colorPrimary: '#164e63',
    },
  })

  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme-ticket') ? localStorage.getItem('theme-ticket') : "cyan")

  const handleChange = color => {
    setCurrentTheme(color);
    localStorage.setItem('theme-ticket', color)
    setTheme({
      ...theme,
      colorPrimary: currentTheme === 'cyan' ? cyan.primary : currentTheme === 'blue' ? blue.primary : currentTheme === 'grey' ? grey.primary : currentTheme === 'teal' ? teal.primary : "",
      Button: {
        colorPrimary: currentTheme === 'cyan' ? cyan.secondary : currentTheme === 'blue' ? blue.secondary : currentTheme === 'grey' ? grey.secondary : currentTheme === 'teal' ? teal.secondary : ""
      }
    })
  }



  return <themeContext.Provider value={{ currentTheme, handleChange, theme }}>
    {children}
  </themeContext.Provider>
}


export default ThemeProvider