import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// Components
import SelectItem from './SelectItem'

// CSS
import './Select.scss'

class Select extends React.Component {
  state = {
    open: false,
    vertReversed: this.props.verticalReverse,
    horReversed: this.props.horizontalReverse,
    displayText: this.parseDefaultText(),
    searchVal: ''
  }

  componentDidMount () {
    document.querySelector('body').addEventListener('click', this.onBlur)
  }

  componentWillReceiveProps (newProps) {
    if (!this.state.displayText || newProps.selectedVal !== this.props.selectedVal) {
      const label = this.props.options.find(option => (
        option.value === newProps.selectedVal
      )).label

      this.setState({ displayText: label })
    }
  }

  componentWillUnmount () {
    document.querySelector('body').removeEventListener('click', this.onBlur)
  }

  onBlur = (e) => {
    if (this.dropdownWrapper.contains(e.target) || !this.state.open) {
      return
    }

    this.setState({ open: false })
  }

  onListClick = (e) => {
    if (this.props.multi) { return }
    if (e.target.tagName === 'UL' || e.target.className.includes('disabled')) { return }

    this.setState({ open: false })
  }

  parseVertReversed () {
    if (this.props.verticalReverse) {
      return true
    }

    const { y, height } = this.dropdown.getBoundingClientRect()

    return (y + height < 0) || (y > window.innerHeight)
  }

  parseHorReversed () {
    if (this.props.horizontalReverse) {
      return true
    }

    const { x, width } = this.dropdown.getBoundingClientRect()

    return (x + width < 0) || (x > window.innerWidth)
  }

  handleClick = (e, { value, label }) => {
    const { selectedVal, selectedVals, onChange, multi } = this.props

    if (multi) {
      const vals = selectedVals.slice()
      const indexOfVal = vals.findIndex(option => option.value === value)
      let updatedVals

      if (indexOfVal > -1) {
        vals.splice(indexOfVal, 1)
        updatedVals = vals
      } else {
        updatedVals = vals.concat([{ value, label }])
      }

      onChange(e, updatedVals)
      return
    }

    if (selectedVal !== value) {
      onChange(e, { value, label })
    }
  }

  removeMultiOption = (option) => {
    return (e) => {
      e.stopPropagation()
      const vals = this.props.selectedVals.slice()
      const indexOfVal = vals.findIndex(opt => opt.value === option.value)

      vals.splice(indexOfVal, 1)
      this.props.onChange(e, vals)
    }
  }

  parseDefaultText () {
    const { selectedVal, options, defaultText } = this.props

    if (selectedVal) {
      return options.find(option => option.value === selectedVal).label
    }

    return defaultText || options[0].label
  }

  toggleDropdown = () => {
    const { disabled, multi, search } = this.props
    const { open } = this.state

    if (!disabled) {
      this.setState({ open: !open, searchVal: '' }, () => {
        if (this.state.open && multi && search) {
          this.searchInput.focus()
        }
      })
    }
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

    return styles
  }

  renderOptions () {
    let options = this.props.options

    if (this.props.search) {
      options = this.props.options.filter(option => (
        option.label.toLowerCase().includes(this.state.searchVal)
      ))
    }

    options = options.filter(option => (
      !this.props.selectedVals.find(opt => opt.value === option.value)
    ))

    if (options.length) {
      return options.map(option => (
        <SelectItem
          key={option.value}
          option={option}
          onClick={this.handleClick}
        />
      ))
    }

    return (
      <li style={{ fontSize: '13px', minWidth: '150px', padding: '10px' }}>
        No matches found
      </li>
    )
  }

  renderPills () {
    return this.props.selectedVals.map(option => (
      <div
        styleName='pill'
        key={option.value}
        style={{
          marginTop: this.props.search ? '' : '6px'
        }}
      >
        <span>{option.label}</span>
        <i
          className='fa fa-times'
          styleName='close'
          onClick={this.removeMultiOption(option)}
        />
      </div>
    ))
  }

  renderInnerSelect () {
    const { vertReversed, displayText, open, searchVal } = this.state
    const { search, defaultText, disabled, multi, style } = this.props
    const dropdownClass = classNames('dropdown', { open, disabled })
    const chevronClass = classNames('chevron-down', { open })

    let displayValue

    if (search) {
      if (open && !searchVal) {
        displayValue = ''
      } else if (open && searchVal) {
        displayValue = searchVal
      } else if (displayText === defaultText) {
        displayValue = defaultText
      } else {
        displayValue = displayText
      }

      const inputClass = classNames({ open })

      return (
        <div
          styleName={dropdownClass}
          onClick={this.toggleDropdown}
          style={{
            height: multi ? 'auto' : '36px',
            ...style
          }}
        >
          {multi ? this.renderPills() : ''}
          <input
            ref={searchInput => {
              this.searchInput = searchInput

              if (this.state.open && this.props.multi) {
                /* eslint-disable no-unused-expressions */
                searchInput && setTimeout(() => searchInput.focus(), 0)
                /* eslint-enable no-unused-expressions */
              }
            }}
            tabIndex='-1'
            styleName={inputClass}
            type='text'
            value={displayValue}
            onChange={(e) => this.setState({ searchVal: e.target.value })}
            style={{
              minHeight: multi ? '23px' : '',
              height: multi ? '23px' : '',
              marginTop: multi ? '6px' : ''
            }}
          />

          <span>
            <i
              className={vertReversed ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}
              styleName={chevronClass}
            />
          </span>
        </div>
      )
    }

    return (
      <div
        styleName={dropdownClass}
        onClick={this.toggleDropdown}
        style={{
          height: multi ? 'auto' : '36px',
          padding: multi ? '0 22px 0 0' : '0 12px 9px',
          ...style
        }}
      >
        {
          multi ?
            this.renderPills() :
            <span
              style={{
                paddingRight: '20px',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                width: '100%',
                marginTop: '9px'
              }}
            >
              {displayText}
            </span>
        }
        <span>
          <i
            className={vertReversed ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}
            styleName={chevronClass}
          />
        </span>
      </div>
    )
  }

  render () {
    const { wrapperStyle } = this.props
    const { open } = this.state

    const optionsClass = classNames('options', { open })

    return (
      <div
        ref={dropdownWrapper => this.dropdownWrapper = dropdownWrapper}
        style={{
          ...wrapperStyle,
          position: 'relative',
          display: 'inline-block',
          width: '100%'
        }}
        tabIndex='0'
      >
        {this.renderInnerSelect()}

        <ul
          style={this.reversedStyles()}
          styleName={optionsClass}
          onClick={this.onListClick}
          ref={dropdown => this.dropdown = dropdown}
        >
          {this.renderOptions()}
        </ul>
      </div>
    )
  }
}

Select.defaultProps = {
  verticalReverse: false,
  horizontalReverse: false,
  wrapperStyle: {},
  selectedVal: '',
  options: [],
  search: false,
  disabled: false,
  multi: false,
  selectedVals: [],
  style: {}
}

Select.propTypes = {
  defaultText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  verticalReverse: PropTypes.bool,
  horizontalReverse: PropTypes.bool,
  wrapperStyle: PropTypes.object,
  options: PropTypes.array.isRequired,
  selectedVal: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  selectedVals: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  search: PropTypes.bool,
  disabled: PropTypes.bool,
  multi: PropTypes.bool,
  style: PropTypes.object,
}

export default Select
