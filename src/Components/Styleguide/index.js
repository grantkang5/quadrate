import React from 'react'

// CSS
import './Styleguide.scss'

// Components
import { Colors, Typography, Elements } from './Sections'

const Styleguide = () => (
  <div styleName='styleguide'>
    <Colors />
    <Typography />
    <Elements />
  </div>
)

export default Styleguide
