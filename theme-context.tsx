import React from 'react';

export type ThemeContextType = {
  color: string
}

const ThemeContext = React.createContext<ThemeContextType>({color: "red"})

export default ThemeContext
