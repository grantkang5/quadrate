import React from 'react'
import PropTypes from 'prop-types'

import './Styleguide.scss'

const SubHeader = ({ subHeaderText }) => (
  <div style={{ textAlign: 'center', margin: '60px 0 25px' }}>
    <div className='small' styleName='subheader'>
      <hr />
      <span>{subHeaderText.toUpperCase()}</span>
      <hr />
    </div>
  </div>
)

SubHeader.propTypes = {
  subHeaderText: PropTypes.string.isRequired
}

export default SubHeader
