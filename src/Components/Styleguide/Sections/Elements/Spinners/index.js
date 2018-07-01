import React from 'react'

// Components
import { Spinner } from 'Components/Common'

// CSS
import './Spinners.scss'

const Spinners = () => (
  <div styleName='spinners'>
    <div className='flex'>
      <p style={{ marginBottom: '10px' }}>XS</p>
      <Spinner xs show />
    </div>

    <div className='flex'>
      <p style={{ marginBottom: '10px' }}>SM</p>
      <Spinner sm show />
    </div>

    <div className='flex'>
      <p style={{ marginBottom: '10px' }}>MD</p>
      <Spinner md show />
    </div>

    <div className='flex'>
      <p style={{ marginBottom: '10px' }}>LG</p>
      <Spinner lg show />
    </div>
  </div>
)

export default Spinners
