import React from 'react'

// Components
import { Modal, Button } from 'Components/Common'

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

class Modals extends React.Component {
  state = {
    modalOpen: false,
    text: ''
  }

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen })
  }

  render () {
    const footerButtons = [
      <Button
        key="close"
        onClick={this.toggleModal}
        flat
      >
        Close
      </Button>,
      <Button
        key="save"
        onClick={this.toggleModal}
      >
        Save Changes
      </Button>
    ]

    return (
      <div>
        <Button onClick={this.toggleModal}>
          Open Modal
        </Button>

        <Modal
          header="Modal Title"
          toggle={this.toggleModal}
          isOpen={this.state.modalOpen}
          footer={footerButtons}
          wrapperStyle={{ width: '600px' }}
        >
          <div style={{ padding: '30px' }}>
            <p>{loremIpsum}</p>
          </div>
        </Modal>
      </div>
    )
  }
}

export default Modals
