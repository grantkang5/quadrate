import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// Components
import { Spinner } from 'Components/Common'

// CSS
import './Button.scss'

const Button = ({
  primary,
  secondary,
  flat,
  success,
  danger,
  disabled,
  onClick,
  shouldFitContainer,
  children,
  loading,
  ...props
}) => {
  const buttonClass = classNames('btn', {
    primary: primary || (!secondary && !flat && !disabled),
    secondary,
    flat,
    disabled,
    success,
    danger,
    shouldFitContainer
  })
  const buttonClick = () => {
    if (disabled) return;
    onClick()
  }

  return (
    <button
      styleName={buttonClass}
      onClick={buttonClick}
      {...props}
    >
      {!loading && children}
      {
        loading &&
        <Spinner
          xs
          show
          style={{ marginBottom: '3px' }}
          color={flat ? null : '#fff'}
        />
      }
    </button>
  )
}

Button.defaultProps = {
  primary: false,
  secondary: false,
  flat: false,
  success: false,
  danger: false,
  disabled: false,
  shouldFitContainer: false,
  children: '',
  loading: false,
  onClick: () => null
}

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  flat: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  shouldFitContainer: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  loading: PropTypes.bool
}

export default Button
