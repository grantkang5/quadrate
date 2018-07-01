import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// CSS
import './Radio.scss'

const Radio = ({
  children,
  checked,
  onChange,
  disabled,
  style,
  value,
  name,
  styles,
  ...radioProps
}) => {
  const labelClass = classNames('radio-label', {
    disabled
  })

  const radioClass = classNames('radio', {
    disabled
  })

  const circleClass = classNames('circle', {
    disabled
  })

  const radioChange = () => {
    if (disabled) return;
    onChange()
  }

  return (
    <label styleName={labelClass} style={style}>
      <input
        styleName={radioClass}
        name={name}
        type='radio'
        checked={checked}
        onChange={radioChange}
        disabled={disabled}
        {...radioProps}
      />

      <span styleName={circleClass} />
      <span styleName='text'>{children}</span>
    </label>
  )
}

Radio.defaultProps = {
  checked: false,
  disabled: false,
  style: {},
  styles: {}
}

Radio.propTypes = {
  children: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  styles: PropTypes.object,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default Radio
