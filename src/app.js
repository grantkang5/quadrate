import React from 'react'
import { hot } from 'react-hot-loader'

import Styleguide from 'Components/Styleguide'

import './Assets/Main.scss'

class App extends React.Component {
  render() {
    return (
      <Styleguide />
    )
  }
}

export default hot(module)(App)
