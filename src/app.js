/* eslint no-undef: 0 */
import React from 'react'
import ReactDOM from 'react-dom'

// Components
import Styleguide from './Styleguide'

// Global CSS
import './assets/main.scss'

const rootEl = document.getElementById('styleguide')

ReactDOM.render(
  <Styleguide />,
  rootEl
)
