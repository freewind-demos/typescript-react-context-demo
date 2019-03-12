import Hello from './hello'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import ThemeContext from "./theme-context";

ReactDOM.render(
  <ThemeContext.Provider value={{color: 'red'}}>
    <Hello/>
  </ThemeContext.Provider>,
  document.body
)
