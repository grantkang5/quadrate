import React from 'react'
import { Row, Col } from 'react-styled-flexboxgrid'

// Components
import { InfoBubble } from 'Components/Common'

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

class InfoBubbles extends React.Component {
  render () {
    return (
      <Row center='xs'>
        <Col xs={3} className="flex">
          <p style={{ marginRight: '4px' }}>Top</p>
          <InfoBubble pos="top" width={400}>
            {loremIpsum}
          </InfoBubble>
        </Col>

        <Col xs={3} className="flex">
          <p style={{ marginRight: '4px' }}>Right</p>
          <InfoBubble pos="right" width={400}>
            {loremIpsum}
          </InfoBubble>
        </Col>

        <Col xs={3} className="flex">
          <p style={{ marginRight: '4px' }}>Bottom</p>
          <InfoBubble pos="bottom" width={400}>
            {loremIpsum}
          </InfoBubble>
        </Col>

        <Col xs={3} className="flex">
          <p style={{ marginRight: '4px' }}>Left</p>
          <InfoBubble pos="left" width={400}>
            {loremIpsum}
          </InfoBubble>
        </Col>
      </Row>
    )
  }
}

export default InfoBubbles
