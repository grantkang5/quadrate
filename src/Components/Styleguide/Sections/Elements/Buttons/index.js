import React from 'react'

// Component
import { Button } from 'Components/Common'

// CSS
import './Buttons.scss'

const buttonThemes = [
  {
    primary: true,
    label: 'Primary',
    innerText: 'Market'
  },
  {
    secondary: true,
    label: 'Secondary',
    innerText: 'Manager'
  },
  {
    flat: true,
    label: 'Flat',
    innerText: 'On-Demand'
  },
  {
    success: true,
    label: 'Success',
    innerText: 'Route'
  },
  {
    danger: true,
    label: 'Danger',
    innerText: 'Hamper'
  },
  {
    disabled: true,
    label: 'Disabled',
    innerText: 'Rates'
  }
]

const Buttons = () => (
  <div styleName="buttons">
    {
      buttonThemes.map(({ label, innerText, ...theme }) => (
        <div styleName="button-container" key={label}>
          <p styleName="label">{label}</p>
          <Button {...theme} onClick={() => console.log('Clicked!')}>
            {innerText}
          </Button>
        </div>
      ))
    }
  </div>
)

export default Buttons
