import React from 'react'

// Components
import { Select } from 'Components/Common'

// CSS
import './Selects.scss'

const options = [
  { label: 'Market Value', value: 'market' },
  { label: 'Route', value: 'route' },
  { label: 'Lorem ipsum dolor sit amet consectetur adipiscing sit amet', value: 'lorem' }
]

class Selects extends React.Component {
  state = {
    selectedOption1: '',
    selectedOption2: '',
    multiOptions1: [],
    multiOptions2: []
  }

  render () {
    return (
      <div styleName='selects'>
        <div style={{ marginTop: '15px' }}>
          <p>Default</p>
          <Select
            defaultText='Choices'
            wrapperStyle={{ marginTop: '5px' }}
            options={options}
            onChange={(e, option) => this.setState({ selectedOption1: option.value })}
            selectedVal={this.state.selectedOption1}
          />
        </div>

        <div style={{ width: '200px', marginTop: '15px' }}>
          <p>Search</p>
          <Select
            defaultText='Choices'
            wrapperStyle={{ marginTop: '5px' }}
            options={options}
            onChange={(e, option) => this.setState({ selectedOption2: option.value })}
            selectedVal={this.state.selectedOption2}
            search
          />
        </div>

        <div style={{ width: '200px', marginTop: '15px' }}>
          <p>Multi</p>
          <Select
            defaultText='Choices'
            wrapperStyle={{ marginTop: '5px' }}
            options={options}
            onChange={(e, options) => this.setState({ multiOptions1: options })}
            selectedVals={this.state.multiOptions1}
            multi
          />
        </div>

        <div style={{ width: '375px', marginTop: '15px' }}>
          <p>Multi / Search</p>
          <Select
            defaultText='Choices'
            wrapperStyle={{ marginTop: '5px' }}
            options={options}
            onChange={(e, options) => this.setState({ multiOptions2: options })}
            selectedVals={this.state.multiOptions2}
            multi
            search
          />
        </div>

        <div style={{ marginTop: '15px' }}>
          <p>Disabled</p>
          <Select
            defaultText='Choices'
            wrapperStyle={{ marginTop: '5px' }}
            options={options}
            onChange={(e, option) => this.setState({ selectedOption2: option.value })}
            selectedVal={this.state.selectedOption2}
            disabled
          />
        </div>
      </div>
    )
  }
}

export default Selects
