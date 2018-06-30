import React from 'react'

// Components
import SectionHeader from '../../SectionHeader'
import SubHeader from '../../SubHeader'
import ColorSwatch from './ColorSwatch'

// CSS
import './Colors.scss'

const primaryColors = [
  {
    var: '--font-color',
    hex: '#48545D'
  },
  {
    var: '--tooltip-color',
    hex: '#3B454D'
  },
  {
    var: '--blue',
    hex: '#3C90DF'
  },
  {
    var: '--dark-blue',
    hex: '#2E7BC4'
  },
  {
    var: '--navy-blue',
    hex: '#253858'
  },
  {
    var: '--red',
    hex: '#FE4A49'
  },
  {
    var: '--dark-red',
    hex: '#D03D3C'
  },
  {
    var: '--gold',
    hex: '#FCBF49'
  },
  {
    var: '--green',
    hex: '#0CCE6B'
  },
  {
    var: '--dark-green',
    hex: '#0AA958'
  },
  {
    var: '--lightest-gray',
    hex: '#F4F5F7'
  },
  {
    var: '--light-gray',
    hex: '#E5EDF0'
  },
  {
    var: '--gray',
    hex: '#D1D8DB'
  },
  {
    var: '--dark-gray',
    hex: '#9EB1BC'
  }
]

const Colors = () => (
  <div styleName='colors'>
    <SectionHeader headerText='Colors' />
    <SubHeader subHeaderText='Primary' />

    <div styleName='color-list'>
      {
        primaryColors.map(color => (
          <ColorSwatch color={color} key={color.hex} />
        ))
      }
    </div>
  </div>
)

export default Colors
