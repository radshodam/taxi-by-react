import React, { useState } from 'react'
export const ThemeContext=React.createContext()
export const ThemeProvider=({children})=>{
    const [theme, setTheme] = useState(false)
    // false light 
    // true black
    return(
        <ThemeContext.Provider value={[theme,setTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}