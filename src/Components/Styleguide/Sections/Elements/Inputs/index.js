import React from 'react'

// Component
import { Input } from 'Components/Common'

// CSS
import './Inputs.scss'

// Validators

class Inputs extends React.Component {
  state = {
    text: '',
    disabled: '',
    invalid: '',
    required: '',
    focus: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    const { text, invalid, disabled, required } = this.state
    const InputsArray = [
      {
        name: 'text',
        label: 'Default',
        value: text,
      },
      {
        name: 'invalid',
        label: 'Invalid',
        value: invalid,
        error: 'Error message'
      },
      {
        name: 'disabled',
        label: 'Disabled',
        value: disabled,
        disabled: true,
      },
      {
        name: 'required',
        label: 'Required',
        value: required,
        required: true,
      }
    ]
    const InputSamples = InputsArray.map(input => {
      return (
        <div styleName="input-container" key={input.name}>
          <Input
            key={input.name}
            name={input.name}
            label={input.label}
            type="text"
            onChange={this.handleChange}
            value={input.value}
            required={input.required}
            error={input.error}
            disabled={input.disabled}
            placeholder="Enter text"
          />
        </div>
      )
    })
    return (
      <div styleName="inputs">
        {InputSamples}
      </div>
    )
  }
}

export default Inputs
