import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const QuzeLink = ({ children, style, ...linkProps }) => (
  <Link
    {...linkProps}
    style={{
      display: 'block',
      ...style
    }}
  >
    {children}
  </Link>
)

QuzeLink.defaultProps = {
  style: {}
}

QuzeLink.propTypes = {
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
    PropTypes.number,
    PropTypes.func
  ]).isRequired
}

export default QuzeLink
