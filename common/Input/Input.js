import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// CSS
import './Input.scss'

const Input = ({
  label,
  error,
  disabled,
  required,
  isLabelHidden,
  shouldFitContainer,
  type,
  icon,
  inputRef,
  sm,
  ...props
}) => {
  const inputStyle = classNames('input', {
    shouldFitContainer,
    error,
    sm,
    disabled,
    date: type === 'date',
  })

  const iconStyle = classNames('icon', {
    label: label && !isLabelHidden,
    shouldFitContainer,
    error
  })

  const wrapperStyle = classNames('wrapper', {
    shouldFitContainer,
  })

  return (
    <div styleName={wrapperStyle}>
      {
        !isLabelHidden &&
        <p style={{ margin: '0 0 5px 0' }}>
          {label}
          {required && !error && <span styleName="fa-required"><i className="fa fa-asterisk" aria-hidden="true" /></span>}
        </p>
      }
      <input
        styleName={inputStyle}
        disabled={disabled}
        type={type}
        required={required}
        ref={inputRef}
        {...props}
      />
      {
        error &&
        <span styleName={iconStyle}>
          <i
            className="fa fa-exclamation-triangle"
            aria-hidden="true"
          />
        </span>
      }
      {
        icon && !error &&
        <span styleName={iconStyle}>
          {icon}
        </span>
      }
    </div>
  )
}

Input.defaultProps = {
  label: '',
  error: '',
  disabled: false,
  shouldFitContainer: false,
  isLabelHidden: false,
  required: false,
  type: 'text',
  icon: null,
  sm: false,
  inputRef: () => null
}

Input.propTypes = {
  label: PropTypes.string,
  shouldFitContainer: PropTypes.bool,
  error: PropTypes.string,
  isLabelHidden: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.string,
  icon: PropTypes.element,
  inputRef: PropTypes.func,
  sm: PropTypes.bool
}

export default Input
