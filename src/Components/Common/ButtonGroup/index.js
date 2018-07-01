import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { every } from 'lodash'

// CSS
import './ButtonGroup.scss'

class ButtonGroup extends React.Component {
  state = {
    selectedButton: this.getInitialButton()
  }

  onClick = (buttonItem) => {
    return (e) => {
      if (buttonItem.key === this.state.selectedButton.key || buttonItem.disabled) {
        return null
      }

      this.setState({ selectedButton: buttonItem })
      return this.props.onChange(e, buttonItem)
    }
  }

  getInitialButton () {
    const { buttons, defaultKey } = this.props

    if (defaultKey) {
      return buttons.find(buttonItem => buttonItem.key === defaultKey && !buttonItem.disabled)
    }

    if (every(buttons, (button) => button.disabled)) {
      return buttons[0]
    }

    return buttons.find(buttonItem => !buttonItem.disabled)
  }

  render () {
    const { buttons, defaultKey, buttonStyle, ...props } = this.props

    return (
      <div styleName='button' {...props}>
        {
          buttons.map(button => {
            const buttonItemClass = classNames('button-item', {
              selected: button.key === this.state.selectedButton.key,
              disabled: button.disabled === true
            })

            return (
              <button
                type="button"
                styleName={buttonItemClass}
                style={buttonStyle}
                key={button.key}
                onClick={this.onClick(button)}
              >
                {button.label}
              </button>
            )
          })
        }
      </div>
    )
  }
}

ButtonGroup.defaultProps = {
  defaultKey: '',
  buttonStyle: {}
}

ButtonGroup.propTypes = {
  buttons: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultKey: PropTypes.string,
  buttonStyle: PropTypes.object
}

export default ButtonGroup
