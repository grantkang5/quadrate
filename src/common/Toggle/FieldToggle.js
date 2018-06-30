import React from 'react'
import PropTypes from 'prop-types'

import Toggle from './Toggle'

const FieldToggle = ({ input: { value, onChange, ...rest } }) => {
  return (
    <Toggle checked={value} onChange={onChange} {...rest} />
  )
}

FieldToggle.propTypes = {
  meta: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired
}

export default FieldToggle
