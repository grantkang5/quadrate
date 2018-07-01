import React from 'react'

// Components
// import Dropdown from 'Components/Common/Dropdown'
// import IconDropdown from 'Components/Common/Dropdown/IconDropdown'
// import MenuItem from 'Components/Common/Dropdown/MenuItem'
import { Dropdown, IconDropdown, MenuItem } from 'Components/Common'

// CSS
import './Dropdowns.scss'

class Dropdowns extends React.Component {
  render () {
    return (
      <div className='flex' styleName='dropdowns'>
        <div styleName='row'>
          <div>
            <p>Default</p>
            <Dropdown defaultText='Choices' wrapperStyle={{ marginTop: '15px' }}>
              <MenuItem onClick={() => console.log('Clicked')}>
                Rates
              </MenuItem>

              <MenuItem onClick={() => console.log('Clicked')}>
                Market
              </MenuItem>

              <MenuItem onClick={() => console.log('Clicked')}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
              </MenuItem>
            </Dropdown>
          </div>

          <div>
            <p>Vertical Reverse</p>
            <Dropdown defaultText='Choices' verticalReverse wrapperStyle={{ marginTop: '15px' }}>
              <MenuItem onClick={() => console.log('Clicked')}>
                Rates
              </MenuItem>

              <MenuItem onClick={() => console.log('Clicked')}>
                Market
              </MenuItem>

              <MenuItem onClick={() => console.log('Clicked')}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
              </MenuItem>
            </Dropdown>
          </div>

          <div>
            <p>Horizontal Reverse</p>
            <Dropdown defaultText='Choices' horizontalReverse wrapperStyle={{ marginTop: '15px' }}>
              <MenuItem onClick={() => console.log('Clicked')}>
                Rates
              </MenuItem>

              <MenuItem onClick={() => console.log('Clicked')}>
                Market
              </MenuItem>

              <MenuItem onClick={() => console.log('Clicked')}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
              </MenuItem>
            </Dropdown>
          </div>

          <div>
            <p>Disabled</p>
            <Dropdown defaultText='Choices' wrapperStyle={{ marginTop: '15px' }}>
              <MenuItem onClick={() => console.log('Clicked')}>
                Rates
              </MenuItem>

              <MenuItem onClick={() => console.log('Clicked')} disabled>
                Market
              </MenuItem>

              <MenuItem onClick={() => console.log('Clicked')}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
              </MenuItem>
            </Dropdown>
          </div>
        </div>

        <div styleName='row' style={{ marginTop: '45px' }}>
          <div>
            <p>Icon</p>
            <IconDropdown
              wrapperStyle={{ marginTop: '15px' }}
              icon={
                <i
                  className='fa fa-bitcoin'
                  style={{ fontSize: '22px', marginLeft: '1.5px', marginTop: '0.5px' }}
                />
              }
            >
              <MenuItem onClick={() => console.log('Clicked')}>
                Rates
              </MenuItem>

              <MenuItem onClick={() => console.log('Clicked')}>
                Market
              </MenuItem>

              <MenuItem onClick={() => console.log('Clicked')}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
              </MenuItem>
            </IconDropdown>
          </div>

          <div>
            <p>Vertical Reverse</p>
            <IconDropdown
              wrapperStyle={{ marginTop: '15px' }}
              verticalReverse
              icon={
                <i
                  className='fa fa-rebel'
                  style={{ fontSize: '22px', marginLeft: '1.5px', marginTop: '0.5px' }}
                />
              }
            >
              <MenuItem onClick={() => console.log('Clicked')}>
                Rates
              </MenuItem>

              <MenuItem onClick={() => console.log('Clicked')}>
                Market
              </MenuItem>

              <MenuItem onClick={() => console.log('Clicked')}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
              </MenuItem>
            </IconDropdown>
          </div>

          <div>
            <p>Horizontal Reverse</p>
            <IconDropdown
              wrapperStyle={{ marginTop: '15px' }}
              horizontalReverse
              icon={
                <i
                  className='fa fa-moon-o'
                  style={{ fontSize: '22px', marginLeft: '1.5px', marginTop: '0.5px' }}
                />
              }
            >
              <MenuItem onClick={() => console.log('Clicked')}>
                Rates
              </MenuItem>

              <MenuItem onClick={() => console.log('Clicked')}>
                Market
              </MenuItem>

              <MenuItem onClick={() => console.log('Clicked')}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
              </MenuItem>
            </IconDropdown>
          </div>

          <div>
            <p>Disabled</p>
            <IconDropdown
              wrapperStyle={{ marginTop: '15px' }}
              icon={
                <i
                  className='fa fa-diamond'
                  style={{ fontSize: '22px', marginLeft: '0.5px', marginTop: '0.5px' }}
                />
              }
            >
              <MenuItem onClick={() => console.log('Clicked')}>
                Rates
              </MenuItem>

              <MenuItem onClick={() => console.log('Clicked')} disabled>
                Market
              </MenuItem>

              <MenuItem onClick={() => console.log('Clicked')}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
              </MenuItem>
            </IconDropdown>
          </div>
        </div>
      </div>
    )
  }
}

export default Dropdowns
