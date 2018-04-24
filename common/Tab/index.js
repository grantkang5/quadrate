import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { QuzeLink } from 'Components/Common'

// CSS
import './Tab.scss'

class Tab extends React.Component {
  state = {
    selectedTabItem: this.getInitialSelected()
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      selectedTabItem: newProps.tabs.find(tab => tab.key === newProps.selectedKey)
    })
  }

  onClick = (tabItem) => {
    return (e) => {
      if (tabItem.key === this.state.selectedTabItem.key || tabItem.disabled) {
        return null
      }

      this.setState({ selectedTabItem: tabItem })
      return this.props.onChange(e, tabItem)
    }
  }

  getInitialSelected () {
    const { tabs, selectedKey } = this.props

    if (selectedKey) {
      return tabs.find(tabItem => tabItem.key === selectedKey)
    }

    return tabs[0]
  }

  render () {
    const { tabs, listStyle } = this.props

    return (
      <ul styleName='tabs' style={listStyle}>
        {
          tabs.map(tabItem => {
            const tabItemClass = classNames('tab-item', {
              selected: tabItem.key === this.state.selectedTabItem.key,
              disabled: tabItem.disabled === true
            })

            if (tabItem.route) {
              return (
                <li
                  styleName={tabItemClass}
                  key={tabItem.key}
                >
                  <QuzeLink
                    to={{ pathname: `${tabItem.route}` }}
                    onClick={this.onClick(tabItem)}
                    style={{ width: '100%', height: '100%' }}
                  >
                    {tabItem.label}
                  </QuzeLink>
                </li>
              )
            }

            return (
              <li
                styleName={tabItemClass}
                onClick={this.onClick(tabItem)}
                key={tabItem.key}
              >
                {tabItem.label}
              </li>
            )
          })
        }
      </ul>
    )
  }
}

Tab.defaultProps = {
  selectedKey: undefined,
  listStyle: {}
}

Tab.propTypes = {
  tabs: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  selectedKey: PropTypes.string,
  listStyle: PropTypes.object
}

export default Tab
