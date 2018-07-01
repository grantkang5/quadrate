import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// CSS
import './Select.scss'

const SelectItem = ({ option, onClick, disabled }) => {
  const listItemClass = classNames('option', {
    disabled
  })

  const handleClick = (e) => {
    onClick(e, option)
  }

  return (
    <li styleName={listItemClass} onMouseUp={handleClick}>
      {option.label}
    </li>
  )
}

SelectItem.defaultProps = {
  disabled: false
}

SelectItem.propTypes = {
  option: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

export default SelectItem
