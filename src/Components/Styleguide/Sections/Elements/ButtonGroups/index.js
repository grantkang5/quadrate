import React from 'react'

// Components
import { ButtonGroup } from 'Components/Common'

// CSS
import './ButtonGroups.scss'

class ButtonGroups extends React.Component {
  handleClick = () => {
    console.log('Clicked!')
  }

  render () {
    const defaultButtonsGroup = [
      { label: 'Button 1', key: 'Button1' },
      { label: 'Button 2', key: 'Button2' },
      { label: 'Button 3', key: 'Button3' }
    ]

    const disabledButtonsGroup = [
      { label: 'Button 1', key: 'Button1' },
      { label: 'Button 2', key: 'Button2' },
      { label: 'Disabled Button', key: 'Button3', disabled: true }
    ]

    return (
      <div styleName="buttonGroup-wrapper">
        <div>
          <p style={{ marginBottom: '8px' }}>Default</p>
          <ButtonGroup
            buttons={defaultButtonsGroup}
            onChange={(button) => this.setState({ selected: button.key })}
            defaultKey='Button2'
          />
        </div>

        <div>
          <p style={{ marginBottom: '8px' }}>Disabled</p>
          <ButtonGroup
            buttons={disabledButtonsGroup}
            onChange={(button) => this.setState({ selected2: button.key })}
            defaultKey='Button2'
          />
        </div>
      </div>
    )
  }
}

export default ButtonGroups
