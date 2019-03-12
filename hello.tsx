import React from 'react'
import ThemeContext from "./theme-context";

class Hello extends React.Component {

  render() {
    return <ThemeContext.Consumer>{context =>
      <div>
        <h1 style={{color: context.color}}>Hello React</h1>
      </div>
    }</ThemeContext.Consumer>
  }
}

export default Hello
