import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// CSS
import './Dropdown.scss'

const IconMenuItem = ({ onClick, children, disabled, icon }) => {
  const listItemClass = classNames('option', 'icon', {
    disabled
  })

  const handleClick = (e) => {
    if (disabled) { return }
    onClick(e)
  }

  return (
    <li styleName={listItemClass} onClick={handleClick}>
      <span styleName='icon'>{icon}</span>
      <span styleName='text'>{children}</span>
    </li>
  )
}

IconMenuItem.defaultProps = {
  disabled: false,
  onClick: () => null
}

IconMenuItem.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]).isRequired
}

export default IconMenuItem
