import React from 'react'

// Components
import { Checkbox } from 'Components/Common'

// CSS
import './Checkboxes.scss'

class Checkboxes extends React.Component {
  state = {
    checked1: false,
    checked2: true
  }

  handleChange = (field) => {
    return () => this.setState({ [field]: !this.state[field] })
  }

  render () {
    return (
      <div className='flex' styleName='checkboxes'>
        <div>
          <p>Default</p>
          <Checkbox
            style={{ marginTop: '15px' }}
            onChange={this.handleChange('checked1')}
            checked={this.state.checked1}
          >
            Option 1
          </Checkbox>
        </div>

        <div>
          <p>Selected</p>
          <Checkbox
            style={{ marginTop: '15px' }}
            onChange={this.handleChange('checked2')}
            checked={this.state.checked2}
          >
            Option 2
          </Checkbox>
        </div>

        <div>
          <p>Disabled</p>
          <Checkbox
            style={{ marginTop: '15px' }}
            onChange={() => console.log('Clicked')}
            checked={false}
            disabled
          >
            Option 3
          </Checkbox>
        </div>

        <div>
          <p>Disabled / Checked</p>
          <Checkbox
            style={{ marginTop: '15px' }}
            onChange={() => console.log('Clicked')}
            checked
            disabled
          >
            Option 4
          </Checkbox>
        </div>
      </div>
    )
  }
}

export default Checkboxes
