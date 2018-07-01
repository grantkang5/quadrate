import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// CSS
import './Dropdown.scss'

const MenuItem = ({ onClick, children, disabled, icon: Icon }) => {
  const listItemClass = classNames('option', {
    disabled
  })

  const handleClick = (e) => {
    if (disabled) { return }
    onClick(e)
  }


  return (
    <li styleName={listItemClass} onClick={handleClick}>
      {Icon && <Icon />}
      <span>
        {children}
      </span>
    </li>
  )
}

MenuItem.defaultProps = {
  disabled: false,
  icon: null,
  onClick: () => null
}

MenuItem.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
  icon: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]).isRequired
}

export default MenuItem
