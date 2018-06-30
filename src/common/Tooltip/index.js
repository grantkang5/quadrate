import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// CSS
import './Tooltip.scss'

class Tooltip extends React.Component {
  state = {
    hovered: false
  }

  componentDidMount () {
    this.target = document.querySelector(`[data-tip-for='${this.props.id}']`)

    if (!this.props.cta && !this.props.toggle) {
      if ('ontouchstart' in window) {
        console.log('Tooltips in mobile are disabled')
      } else {
        this.target.addEventListener('mouseenter', this.openToolTip)
        this.target.addEventListener('mouseleave', this.closeToolTip)
      }
    }

    if (this.props.cta) {
      this.target.style = 'position: relative; z-index: 3002'
    }
    /* eslint-disable react/no-did-mount-set-state */
    if (this.props.toggle) {
      this.setState({ hovered: true }, () => {
        const { top, left } = this.toolTipStyle()
        this.tooltip.style.top = `${top}px`
        this.tooltip.style.left = `${left}px`
      })
    }
    /* eslint-enable react/no-did-mount-set-state */
  }

  componentWillReceiveProps (newProps) {
    if (newProps.cta && !this.props.cta) {
      this.target.removeEventListener('mouseenter', this.openToolTip)
      this.target.removeEventListener('mouseleave', this.closeToolTip)
      this.target.style = 'position: relative; z-index: 3002'
    }

    if (newProps.toggle && !this.props.toggle) {
      this.setState({ hovered: true }, () => {
        const { top, left } = this.toolTipStyle()
        this.tooltip.style.top = `${top}px`
        this.tooltip.style.left = `${left}px`
      })
    }

    if (!newProps.toggle && this.props.toggle) {
      this.setState({ hovered: false })
    }
  }

  componentWillUnmount () {
    if (!this.props.cta) {
      if ('ontouchstart' in window) {
        console.log('Tooltips in mobile are disabled')
      } else {
        this.target.removeEventListener('mouseenter', this.openToolTip)
        this.target.removeEventListener('mouseleave', this.closeToolTip)
      }
    }
  }

  getPos () {
    if (!this.target) {
      return null
    }

    // let x = 0;
    // let y = 0;
    // let currentElement = this.target
    const targetDimensions = this.target.getBoundingClientRect()
    const tooltipDimensions = this.tooltip.getBoundingClientRect()

    // while (currentElement) {
    //   x += (currentElement.offsetLeft - currentElement.scrollLeft + currentElement.clientLeft)
    //   y += (currentElement.offsetTop - currentElement.scrollTop + currentElement.clientTop)
    //   currentElement = currentElement.parentNode
    // }

    switch (this.props.pos) {
      case 'top':
        return this.topPos(targetDimensions, tooltipDimensions)
      case 'left':
        return this.leftPos(targetDimensions, tooltipDimensions)
      case 'right':
        return this.rightPos(targetDimensions, tooltipDimensions)
      case 'bottom':
        return this.bottomPos(targetDimensions, tooltipDimensions)
      default:
        return this.topPos(targetDimensions, tooltipDimensions)
    }
  }

  openToolTip = () => {
    this.setState({ hovered: true })
  }

  closeToolTip = () => {
    this.setState({ hovered: false })
  }

  topPos ({ width: targetWidth, x, y }, { height: tooltipHeight, width: tooltipWidth }) {
    return ({
      top: y - tooltipHeight - 8,
      left: x - (tooltipWidth / 2) + (targetWidth / 2)
    })
  }

  leftPos ({ height: targetHeight, x, y }, { height: tooltipHeight, width: tooltipWidth }) {
    return ({
      top: y + (targetHeight / 2) - (tooltipHeight / 2),
      left: x - tooltipWidth - 8
    })
  }

  rightPos ({ height: targetHeight, width: targetWidth, x, y }, { height: tooltipHeight }) {
    return ({
      top: y + (targetHeight / 2) - (tooltipHeight / 2),
      left: x + targetWidth + 8
    })
  }

  bottomPos ({ height: targetHeight, width: targetWidth, x, y }, { width: tooltipWidth }) {
    return ({
      top: y + targetHeight + 8,
      left: x - (tooltipWidth / 2) + (targetWidth / 2)
    })
  }

  toolTipStyle () {
    return this.getPos()
  }

  selectorStyle () {
    if (!this.target) {
      return null
    }

    const targetDimensions = this.target.getBoundingClientRect()

    return {
      width: targetDimensions.width,
      height: targetDimensions.height,
      top: targetDimensions.y,
      left: targetDimensions.x
    }
  }

  render () {
    const { hovered } = this.state

    const tooltipClass = classNames('tooltip', {
      hovered,
      cta: this.props.cta
    })

    const overlayClass = classNames('tooltip-overlay', {
      show: hovered
    })

    return (
      <div>
        {
          this.props.cta &&
          [
            <div styleName={overlayClass} key={`tooltip-overlay-${this.props.id}`} />,
            <div
              key={`tooltip-selector-${this.props.id}`}
              ref={selector => this.selector = selector}
              styleName='selector'
              style={this.selectorStyle()}
            />
          ]
        }

        <div
          data-pos={this.props.pos}
          styleName={tooltipClass}
          style={{ ...this.props.style, ...this.toolTipStyle() }}
          ref={tooltip => this.tooltip = tooltip}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

Tooltip.defaultProps = {
  cta: false,
  toggle: false,
  style: {}
}

Tooltip.propTypes = {
  id: PropTypes.string.isRequired,
  pos: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]).isRequired,
  toggle: PropTypes.bool,
  cta: PropTypes.bool,
  style: PropTypes.object
}

export default Tooltip
