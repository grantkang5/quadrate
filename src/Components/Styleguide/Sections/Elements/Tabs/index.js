import React from 'react'

// Components
import { Tab } from 'Components/Common'

// CSS
import './Tabs.scss'

const tabItems = [
  { label: 'Market', key: 'market' },
  { label: 'Manager', key: 'manager' },
  { label: 'Route', key: 'route' },
  { label: 'On-Demand', key: 'on-demand' },
  { label: 'Hamper', key: 'hamper', disabled: true },
  { label: 'Rates', key: 'rates' }
]

class Tabs extends React.Component {
  state = {
    selected: null
  }

  render () {
    return (
      <div className='flex' styleName='tabs'>
        <div className='flex'>
          <Tab
            tabs={tabItems}
            onChange={(e, menuItem) => this.setState({ selected: menuItem.key })}
            selectedKey={this.state.selected}
          />
        </div>
      </div>
    )
  }
}

export default Tabs
