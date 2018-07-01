import React from 'react'
import { Row, Col } from 'react-styled-flexboxgrid'

// Components
import { Stepper, Button } from 'Components/Common'

// CSS
import './Steppers.scss'

const Steps = ['Step 1', 'Step 2', 'Step 3']

class Steppers extends React.Component {
  state = {
    step: 0,
  }

  handleNext = () => {
    if (this.state.step === Steps.length - 1) {
      return
    }

    this.setState({ step: this.state.step + 1 })
  }

  handlePrev = () => {
    if (this.state.step === 0) {
      return
    }

    this.setState({ step: this.state.step - 1 })
  }

  render () {
    return (
      <Row center='xs' styleName="steppers">
        <Col xs={12}>
          <Stepper
            steps={Steps}
            activeStep={this.state.step}
          />
          <Row center='xs' styleName="buttons">
            <Button flat onClick={this.handlePrev}>Back</Button>
            <Button onClick={this.handleNext}>Next</Button>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default Steppers
