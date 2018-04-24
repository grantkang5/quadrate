import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Select } from 'Components/Common'

const errorStyle = {
  color: '#FE4A49',
  fontSize: '0.9em',
  margin: '5px 0 5px 5px'
}

/* **example**
  <Field
    name="State"
    component={FieldSelect}
    options={options}
    validate={[presence]}
    label='State'
    selectedVal='Alabama'
  />
*/

class FieldSelect extends React.Component {
  state = {
    selectedValue: this.props.input.value
  }

  handleChange = (e, option) => {
    this.setState({
      selectedValue: option.value
    }, () => {
      this.props.input.onChange(this.state.selectedValue)
    })
  }

  render () {
    const {
      input,
      label,
      style,
      options,
      meta: { touched, error },
      shouldShowLabel,
      ...props
    } = this.props

    return (
      <div>
        <div style={{ margin: '15px 0 0', ...style }}>
          <p
            style={{
              margin: '0 0 5px 0',
              height: shouldShowLabel ? '17px' : ''
            }}
          >
            {label}
          </p>

          <Select
            options={options}
            selectedVal={input.value}
            onChange={this.handleChange}
            {...props}
          />
          {touched && error && <p style={errorStyle}>{error}</p>}
        </div>
      </div>
    )
  }
}

FieldSelect.defaultProps = {
  style: {},
  label: '',
  shouldShowLabel: false
}

FieldSelect.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  style: PropTypes.object,
  options: PropTypes.array.isRequired,
  label: PropTypes.string,
  shouldShowLabel: PropTypes.bool
}

export default FieldSelect
