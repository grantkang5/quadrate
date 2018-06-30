import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// CSS
import './Stepper.scss'

class Stepper extends React.Component {
  state = {
    currentStep: this.props.activeStep
  }

  componentWillReceiveProps (newProps) {
    if (newProps.activeStep >= this.props.steps.length || newProps.activeStep < 0) {
      return
    }

    if (newProps.activeStep !== this.props.activeStep) {
      this.setState({ currentStep: newProps.activeStep })
    }
  }

  render () {
    const { currentStep } = this.state
    const { steps, wrapperStyle, onClick } = this.props
    return (
      <div styleName="stepper" style={wrapperStyle}>
        <div styleName="stepper-container">
          {
            steps.map((step, i) => {
              const stepContainer = classNames('step-container', {
                clickable: onClick !== null
              })

              const stepStyle = classNames('step', {
                selected: i === currentStep
              })

              const labelStyle = classNames('step-label', {
                selected: i === currentStep
              })

              return (
                <div
                  styleName={stepContainer}
                  key={step}
                  onClick={onClick ? () => onClick(i) : null}
                >
                  <div styleName={stepStyle}>
                    <p className="small">{i + 1}</p>
                  </div>
                  <div styleName={labelStyle}>
                    <p>{step}</p>
                  </div>
                  {
                    i !== steps.length - 1 &&
                    <div styleName="line" />
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

Stepper.defaultProps = {
  wrapperStyle: {},
  onClick: null
}

Stepper.propTypes = {
  steps: PropTypes.array.isRequired,
  activeStep: PropTypes.number.isRequired,
  wrapperStyle: PropTypes.object,
  onClick: PropTypes.func
}

export default Stepper
