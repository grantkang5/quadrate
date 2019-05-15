import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// CSS
import './Toggle.scss'

const Toggle = ({ checked, onChange, disabled, toggleStyles, ...inputProps }) => {
  const checkedClass = classNames('box', {
    checked,
    disabled,
    unchecked: !checked
  })

  const checkIcon = classNames('check', {
    checked,
    unchecked: !checked,
    disabled
  })

  return (
    <label styleName="toggle" style={toggleStyles}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        {...inputProps}
      />
      <div
        styleName={checkedClass}
        data-background-checked="&#xf00c;"
        data-background-unchecked="&#xf00d;"
      >
        <div styleName={checkIcon}>
          <i className="fas fa-check" style={{ fontSize: '1rem' }} />
        </div>
      </div>
    </label>
  )
}

Toggle.defaultProps = {
  toggleStyles: {}
}

Toggle.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  toggleStyles: PropTypes.object
}

Toggle.defaultProps = {
  checked: false,
  disabled: false,
}

export default Toggle
