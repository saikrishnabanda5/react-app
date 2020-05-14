import React from 'react';
export const ThemeContext = React.createContext({
    height:"300px",
    width:"500px",
    theme:"dark",
    toggleTheme :()=>{},
})