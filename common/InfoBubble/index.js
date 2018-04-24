import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// Icons
import InformationIcon from 'Assets/Icons/information-bubble.svg'

// CSS
import './InfoBubble.scss'

class InfoBubble extends React.Component {
  state = {
    clicked: false
  }

  componentWillUpdate (newProps, newState) {
    if (newState.clicked) {
      document.addEventListener('click', this.handleOutsideClick, false)
    }

    if (!newState.clicked) {
      document.removeEventListener('click', this.handleOutsideClick, false)
    }
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.handleOutsideClick, false)
  }

  handleOutsideClick = (e) => {
    if (this.bubble && this.bubble.contains(e.target)) {
      return null
    }

    return this.toggleClick()
  }

  toggleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render () {
    const { pos, style } = this.props

    const bubbleStyle = classNames('bubble', {
      show: this.state.clicked,
      top: pos === 'top',
      right: pos === 'right',
      bottom: pos === 'bottom',
      left: pos === 'left',
      bottomRight: pos === 'bottomRight',
      topRight: pos === 'topRight'
    })

    return (
      <div styleName="info-bubble-container" style={{ ...style }} key="icon">
        <InformationIcon
          width={14}
          height={14}
          styleName="icon"
          onClick={this.toggleClick}
        />

        <div
          key="bubble"
          styleName={bubbleStyle}
          style={{
            width: this.props.width
          }}
          ref={bubble => this.bubble = bubble}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

InfoBubble.defaultProps = {
  width: null,
  style: {}
}

InfoBubble.propTypes = {
  width: PropTypes.number,
  style: PropTypes.object,
  pos: PropTypes.oneOf([
    'top',
    'right',
    'bottom',
    'left',
    'bottomRight',
    'topRight'
  ]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]).isRequired
}

export default InfoBubble
