import React from 'react'
import PropTypes from 'prop-types'

import './Card.scss'

const Card = ({ wrapperStyle, label, subText, children, style, ...props }) => (
  <div {...props} style={{ height: '100%', marginTop: '35px', ...style }}>
    <div className="flex" style={{ alignItems: 'center' }}>
      {
        label && (
          <p className="semibold" style={{ margin: '0 10px 5px' }}>
            {label}
          </p>
        )
      }
      <div style={{ display: 'inline-block', marginBottom: '5px' }}>
        {subText}
      </div>
    </div>

    <div styleName="card" style={wrapperStyle}>
      {children}
    </div>
  </div>
)

Card.defaultProps = {
  wrapperStyle: {},
  label: '',
  subText: null,
  children: null,
  style: {}
}

Card.propTypes = {
  wrapperStyle: PropTypes.object,
  label: PropTypes.string,
  subText: PropTypes.node,
  children: PropTypes.node,
  style: PropTypes.object
}

export default Card
