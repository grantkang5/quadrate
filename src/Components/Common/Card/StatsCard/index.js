import React from 'react'
import PropTypes from 'prop-types'

import './StatsCard.scss'

const StatsCard = ({
  title,
  subText,
  children,
  labels,
  values,
  uniqueKey,
  style
}) => (
  /* eslint-disable react/no-array-index-key */
  <div style={{ marginTop: '35px', height: '100%', ...style }}>
    <div className="flex" style={{ alignItems: 'center' }}>
      <p className="semibold" style={{ margin: '0 10px 5px' }}>{title}</p>
      <div style={{ display: 'inline-block', marginBottom: '5px' }}>
        {subText}
      </div>
    </div>

    <div styleName='stats-card'>
      <div>
        {children}
      </div>

      <div styleName="row labels">
        {
          labels.map((label, i) => {
            if (i !== 0) {
              return (
                <div
                  className="small label"
                  styleName="col"
                  style={{ textAlign: 'center' }}
                  key={label}
                >
                  <p>{label}</p>
                </div>
              )
            }

            return (
              <div styleName="col first" key={label}>
                <p className="label small">{label}</p>
              </div>
            )
          })
        }
      </div>

      <div styleName="values">
        {
          values.map((valueArray, primaryIndex) => (
            <div styleName="row" key={`${uniqueKey}-${primaryIndex}`}>
              {
                valueArray.map((value, secondaryIndex) => {
                  if (secondaryIndex !== 0) {
                    return (
                      <div
                        styleName="col"
                        style={{ textAlign: 'center' }}
                        key={`${uniqueKey}-${primaryIndex}-${secondaryIndex}`}
                      >
                        <div styleName="value">
                          {value}
                        </div>
                      </div>
                    )
                  }

                  return (
                    <div
                      styleName="col first"
                      key={`${uniqueKey}-${primaryIndex}-${secondaryIndex}`}
                    >
                      <div>
                        {value}
                      </div>
                    </div>
                  )
                })
              }
            </div>
          ))
        }
      </div>
    </div>
  </div>
)

StatsCard.defaultProps = {
  title: '',
  values: [],
  style: {},
  subText: null,
  children: null
}

StatsCard.propTypes = {
  title: PropTypes.string,
  labels: PropTypes.array.isRequired,
  values: (props, propName, componentName) => {
    if (!props[propName].every(valueArray => (
      valueArray.length === props.labels.length
    ))) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. Validation Failed`
      )
    }

    return null
  },
  uniqueKey: PropTypes.string.isRequired,
  style: PropTypes.object,
  subText: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.node,
    PropTypes.element
  ])
}

export default StatsCard
