import React from 'react'

// Components
import SectionHeader from '../../SectionHeader'
import SubHeader from '../../SubHeader'

// CSS
import './Typography.scss'

const HEADERS = [
  'Proxima Nova',
  'Light',
  'Semibold',
  'Bold'
]

const Typography = () => (
  <div styleName='typography'>
    <SectionHeader headerText='Typography' />
    <SubHeader subHeaderText='Weights & Sizes' />
    <div styleName='fonts'>
      <div styleName='font-row'>
        {
          HEADERS.map(header => (
            <div styleName='header cell' key={header}>{header}</div>
          ))
        }
      </div>

      {/* H1 */}
      <div styleName='font-row'>
        <div styleName='cell'>
          <div>H1</div>
          <div>24px</div>
        </div>

        <h1 styleName='cell'>
          The quick brown fox jumps over the lazy dog.
        </h1>

        <h1 className='semibold' styleName='cell'>
          The quick brown fox jumps over the lazy dog.
        </h1>

        <h1 className='bold' styleName='cell'>
          The quick brown fox jumps over the lazy dog.
        </h1>
      </div>

      {/* H2 */}
      <div styleName='font-row'>
        <div styleName='cell'>
          <div>H2</div>
          <div>22px</div>
        </div>

        <h2 styleName='cell'>
          The quick brown fox jumps over the lazy dog.
        </h2>

        <h2 className='semibold' styleName='cell'>
          The quick brown fox jumps over the lazy dog.
        </h2>

        <h2 className='bold' styleName='cell'>
          The quick brown fox jumps over the lazy dog.
        </h2>
      </div>

      {/* H3 */}
      <div styleName='font-row'>
        <div styleName='cell'>
          <div>H3</div>
          <div>20px</div>
        </div>

        <h3 styleName='cell'>
          The quick brown fox jumps over the lazy dog.
        </h3>

        <h3 className='semibold' styleName='cell'>
          The quick brown fox jumps over the lazy dog.
        </h3>

        <h3 className='bold' styleName='cell'>
          The quick brown fox jumps over the lazy dog.
        </h3>
      </div>

      {/* H4 */}
      <div styleName='font-row'>
        <div styleName='cell'>
          <div>H4</div>
          <div>18px</div>
        </div>

        <h4 styleName='cell'>
          The quick brown fox jumps over the lazy dog.
        </h4>

        <h4 className='semibold' styleName='cell'>
          The quick brown fox jumps over the lazy dog.
        </h4>

        <h4 className='bold' styleName='cell'>
          The quick brown fox jumps over the lazy dog.
        </h4>
      </div>

      {/* Body */}
      <div styleName='font-row'>
        <div styleName='cell'>
          <div>Body</div>
          <div>14px</div>
        </div>

        <p styleName='cell'>
          The quick brown fox jumps over the lazy dog.
        </p>

        <p className='semibold' styleName='cell'>
          The quick brown fox jumps over the lazy dog.
        </p>

        <p className='bold' styleName='cell'>
          The quick brown fox jumps over the lazy dog.
        </p>
      </div>

      {/* Labels */}
      <div styleName='font-row'>
        <div styleName='cell'>
          <div>Label</div>
          <div>12px</div>
        </div>

        <p className='small' styleName='cell'>
          The quick brown fox jumps over the lazy dog.
        </p>

        <p className='small semibold' styleName='cell'>
          The quick brown fox jumps over the lazy dog.
        </p>

        <p className='small bold' styleName='cell'>
          The quick brown fox jumps over the lazy dog.
        </p>
      </div>
    </div>
  </div>
)

export default Typography
