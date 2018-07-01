import React from 'react'

// Components
import { TextArea } from 'Components/Common'

// CSS
import './TextAreas.scss'

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

class TextAreas extends React.Component {
  state = {
    text: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    return (
      <div style={{ textAlign: 'center' }}>
        <TextArea
          label="Default"
          name="text"
          enableResize={false}
          placeholder={loremIpsum}
          rows={4}
          cols={75}
          value={this.state.text}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default TextAreas
