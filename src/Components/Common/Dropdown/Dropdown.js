import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// CSS
import './Dropdown.scss'

class Dropdown extends React.Component {
  state = {
    open: false,
    vertReversed: this.props.verticalReverse,
    horReversed: this.props.horizontalReverse
  }

  onBlur = () => {
    this.setState({ open: false })
  }

  onListClick = (e) => {
    if (e.target.tagName === 'UL' || e.target.className.includes('disabled')) { return }

    this.setState({ open: false })
  }

  onScroll = (e) => {
    const { scrollTop, scrollHeight, offsetHeight } = this.dropdown
    const scrolledToTop = scrollTop === 0
    const scrolledToBottom = scrollTop === (scrollHeight - offsetHeight)

    if (scrolledToTop || scrolledToBottom) {
      e.stopPropagation()
    }
  }

  toggleDropdown = () => {
    this.setState({ open: !this.state.open })
  }

  reversedStyles () {
    const { vertReversed, horReversed } = this.state
    const styles = {}

    if (vertReversed) {
      styles.top = 'auto'
      styles.bottom = 'calc(100% + 8px)'
    }

    if (horReversed) {
      styles.left = 'auto'
      styles.right = '0'
    }

    return { ...styles, ...this.props.listStyle }
  }

  render () {
    const { defaultText, children, wrapperStyle } = this.props
    const { open, vertReversed } = this.state

    const dropdownClass = classNames('dropdown', { open })
    const optionsClass = classNames('options', { open })
    const chevronClass = classNames('chevron-down', { open })

    return (
      <div
        style={{ ...wrapperStyle, position: 'relative', display: 'inline-block' }}
        onBlur={this.onBlur}
        tabIndex='0'
      >
        <div
          styleName={dropdownClass}
          onClick={this.toggleDropdown}
        >
          <span>{defaultText}</span>
          <span>
            <i
              className={vertReversed ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}
              styleName={chevronClass}
            />
          </span>
        </div>

        <ul
          style={this.reversedStyles()}
          styleName={optionsClass}
          onClick={this.onListClick}
          ref={dropdown => this.dropdown = dropdown}
          onScroll={this.onScroll}
        >
          {children}
        </ul>
      </div>
    )
  }
}

Dropdown.defaultProps = {
  verticalReverse: false,
  horizontalReverse: false,
  wrapperStyle: {},
  listStyle: {}
}

Dropdown.propTypes = {
  defaultText: PropTypes.string.isRequired,
  verticalReverse: PropTypes.bool,
  horizontalReverse: PropTypes.bool,
  wrapperStyle: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired,
  listStyle: PropTypes.object
}

export default Dropdown
