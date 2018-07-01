import React from 'react'

// Components
import { Toggle } from 'Components/Common'

// CSS
import './Toggles.scss'

class Toggles extends React.Component {
  state = {
    checked1: true,
    checked2: false
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: !this.state[e.target.name] })
  }

  render () {
    return (
      <div styleName="toggles">
        <div styleName="toggle-container">
          <p styleName='label'>{this.state.checked1 ? 'On' : 'Off'}</p>
          <Toggle name="checked1" checked={this.state.checked1} onChange={this.handleChange} />
        </div>

        <div styleName="toggle-container">
          <p styleName='label'>{this.state.checked2 ? 'On' : 'Off'}</p>
          <Toggle name="checked2" checked={this.state.checked2} onChange={this.handleChange} />
        </div>

        <div styleName="toggle-container">
          <p styleName='label'>Disabled / On</p>
          <Toggle disabled onChange={this.handleChange} checked />
        </div>

        <div styleName="toggle-container">
          <p styleName='label'>Disabled / Off</p>
          <Toggle disabled onChange={this.handleChange} />
        </div>
      </div>
    )
  }
}

export default Toggles
