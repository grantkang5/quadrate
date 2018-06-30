import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// CSS
import './TextArea.scss'

const TextArea = ({ spellCheck, enableResize, label, disabled, ...props }) => {
  const textAreaStyle = classNames('textarea', {
    enableResize,
    disabled
  })

  return (
    <div>
      <p style={{ marginBottom: '5px' }}>{label}</p>
      <textarea
        styleName={textAreaStyle}
        spellCheck={spellCheck}
        disabled={disabled}
        {...props}
      />
    </div>
  )
}

TextArea.defaultProps = {
  spellCheck: false,
  enableResize: false,
  label: '',
  disabled: false,
}

TextArea.propTypes = {
  // Enables/disables spellcheck
  spellCheck: PropTypes.bool,
  // Enables/disables resizing of textarea field
  enableResize: PropTypes.bool,
  label: PropTypes.string,
  disabled: PropTypes.bool
}

export default TextArea
