import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// Assets
import './Checkbox.scss'

const Checkbox = ({
  children,
  checked,
  onChange,
  value,
  disabled,
  style,
  ...checkboxProps
}) => {
  const labelClass = classNames('checkbox-label', {
    disabled
  })

  const checkboxClass = classNames('checkbox', {
    disabled
  })

  const checkClass = classNames('check', {
    disabled
  })

  return (
    <label styleName={labelClass} style={style}>
      <input
        styleName={checkboxClass}
        type='checkbox'
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...checkboxProps}
      />

      <span styleName={checkClass}>
        <i
          className='fa fa-check'
          styleName='checkmark'
          style={{ fontSize: '10px', position: 'absolute', top: '1.5px', left: '2px' }}
        />
      </span>

      <span styleName='text'>{children}</span>
    </label>
  )
}

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  value: '',
  style: {}
}

Checkbox.propTypes = {
  children: PropTypes.string.isRequired,
  value: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object
}

export default Checkbox
