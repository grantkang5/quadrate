import React from 'react'

// Component
import { Slider } from 'Components/Common'

// CSS
import './Sliders.scss'

class Sliders extends React.Component {
  state = {
    defaultSlider: 4,
    disabledSlider: 500,
    inputSlider: 500
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    const { defaultSlider, disabledSlider, inputSlider } = this.state
    return (
      <div styleName="sliders">
        <div styleName="slider-container">
          <p style={{ margin: '8px 0' }}>Default</p>
          <Slider
            name="defaultSlider"
            value={defaultSlider}
            min={0}
            max={10}
            onChange={this.handleChange}
          />
          <p>The value of the slider is: {defaultSlider} from a range of 0 to 10</p>
        </div>

        <div styleName="slider-container">
          <p style={{ margin: '8px 0' }}>Disabled</p>
          <Slider
            name="disabledSlider"
            value={disabledSlider}
            min={50}
            max={100}
            onChange={this.handleChange}
            disabled
          />
        </div>

        <div styleName="slider-container">
          <p style={{ margin: '8px 0' }}>Input Control</p>
          <Slider
            name="inputSlider"
            value={inputSlider}
            min={0}
            max={1000}
            onChange={this.handleChange}
            showInputControl
          />
        </div>
      </div>
    )
  }
}

export default Sliders
