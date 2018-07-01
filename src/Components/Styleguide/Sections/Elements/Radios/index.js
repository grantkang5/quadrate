import React from 'react'

// Components
import { Radio } from 'Components/Common'

// CSS
import './Radios.scss'

class Radios extends React.Component {
  state = {
    checked: false
  }

  render () {
    const { checked } = this.state

    return (
      <div className='flex' styleName='radios'>
        <div>
          <p>Default</p>
          <Radio
            onChange={() => this.setState({ checked: !checked })}
            checked={checked}
            name='testRadio'
            value='option-1'
            style={{ marginTop: '15px' }}
          >
            Option 1
          </Radio>
        </div>

        <div>
          <p>Selected</p>
          <Radio
            onChange={() => console.log('Changed')}
            checked
            name='testRadio'
            value='option-2'
            style={{ marginTop: '15px' }}
          >
            Option 2
          </Radio>
        </div>

        <div>
          <p>Disabled</p>
          <Radio
            onChange={() => console.log('Changed')}
            disabled
            name='testRadio'
            value='option-3'
            style={{ marginTop: '15px' }}
          >
            Option 3
          </Radio>
        </div>

        <div>
          <p>Disabled / Checked</p>
          <Radio
            onChange={() => console.log('Changed')}
            disabled
            checked
            name='disabledRadio'
            value='option-4'
            style={{ marginTop: '15px' }}
          >
            Option 4
          </Radio>
        </div>
      </div>
    )
  }
}

export default Radios
