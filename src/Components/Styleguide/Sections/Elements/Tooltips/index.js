import React from 'react'

// Components
import { Tooltip } from 'Components/Common'

// CSS
import './Tooltips.scss'

class Tooltips extends React.Component {
  state = {
    cta: false
  }

  toggleCTA = () => {
    this.setState({ cta: !this.state.cta })
  }

  render () {
    return (
      <div styleName='tooltips'>
        <div className='flex' style={{ cursor: 'default' }}>
          <p data-tip-for='top'>Top</p>
          <Tooltip id='top' pos='top'>Top</Tooltip>
        </div>

        <div className='flex' style={{ cursor: 'default' }}>
          <p data-tip-for='left'>Left</p>
          <Tooltip id='left' pos='left'>Left</Tooltip>
        </div>

        <div className='flex' style={{ cursor: 'default' }}>
          <p data-tip-for='bottom'>Bottom</p>
          <Tooltip id='bottom' pos='bottom'>Bottom</Tooltip>
        </div>

        <div className='flex' style={{ cursor: 'default' }}>
          <p data-tip-for='right'>Right</p>
          <Tooltip id='right' pos='right'>Right</Tooltip>
        </div>

        <div className='flex' style={{ cursor: 'pointer' }} onClick={this.toggleCTA}>
          <p data-tip-for='cta'>Click</p>
          <Tooltip id='cta' pos='bottom' cta toggle={this.state.cta}>
            Call to action
          </Tooltip>
        </div>
      </div>
    )
  }
}
// const Tooltips = () => (
//   <div styleName='tooltips'>
//     <div className='flex' style={{ cursor: 'default' }}>
//       <p data-tip-for='top'>Top</p>
//       <Tooltip id='top' pos='top'>Top</Tooltip>
//     </div>
//
//     <div className='flex' style={{ cursor: 'default' }}>
//       <p data-tip-for='left'>Left</p>
//       <Tooltip id='left' pos='left'>Left</Tooltip>
//     </div>
//
//     <div className='flex' style={{ cursor: 'default' }}>
//       <p data-tip-for='bottom'>Bottom</p>
//       <Tooltip id='bottom' pos='bottom'>Bottom</Tooltip>
//     </div>
//
//     <div className='flex' style={{ cursor: 'default' }}>
//       <p data-tip-for='right'>Right</p>
//       <Tooltip id='right' pos='right'>Right</Tooltip>
//     </div>
//
//     <div className='flex' style={{ cursor: 'default' }}>
//       <p data-tip-for='cta'>CTA</p>
//       <Tooltip id='cta' pos='bottom' cta>
//         Call to action
//       </Tooltip>
//     </div>
//   </div>
// )

export default Tooltips
