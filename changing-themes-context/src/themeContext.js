import React, { useState } from 'react'

//1. create context
const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
    const[color, setColor] = useState("Dark")

    const toggleTheme = function() {
    setColor(prevColor => prevColor === "Dark" ? "Light" : "Dark")
  }

    return(
        <ThemeContext.Provider value={{
            color: color,
            toggleTheme: toggleTheme
        }}>
            {props.children} 
        </ThemeContext.Provider>  
    )
}

export {ThemeContext, ThemeContextProvider}