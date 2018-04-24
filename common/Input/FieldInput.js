import React from 'react'
import PropTypes from 'prop-types'

// Components
import Input from './Input'

// CSS
import './Input.scss'

const errorStyle = {
  color: '#FE4A49',
  fontSize: '0.9em',
  margin: '5px 0 0 5px'
}

const FieldInput = ({ input, style, meta: { touched, error }, ...props }) => {
  let inputError = null
  if (touched && error) inputError = error
  return (
    <div>
      <div style={{ margin: '15px 0 0', ...style }}>
        <Input
          error={inputError}
          {...input}
          {...props}
        />
        {touched && error && <p style={errorStyle}>{error}</p>}
      </div>
    </div>
  )
}

FieldInput.defaultProps = {
  style: {}
}

FieldInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  style: PropTypes.object
}

export default FieldInput
