import React from 'react'
import PropTypes from 'prop-types'

// Components
import Slider from './Slider'

const FieldSlider = ({
  input: { value, onChange, ...rest },
  min,
  max,
  showInputControl,
  ...props
}) => {
  return (
    <Slider
      value={value}
      min={min}
      max={max}
      showInputControl
      onChange={onChange}
      {...rest}
      {...props}
    />
  )
}

FieldSlider.defaultProps = {
  showInputControl: false
}

FieldSlider.propTypes = {
  meta: PropTypes.object.isRequired,
  showInputControl: PropTypes.bool,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  input: PropTypes.object.isRequired
}

export default FieldSlider
