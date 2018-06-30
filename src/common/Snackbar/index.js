import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// CSS
import './Snackbar.scss'

// Actions
import { closeSnackbar } from 'Actions'

/* eslint-disable react/no-unused-prop-types */

class Snackbar extends React.Component {
  state = {
    show: false
  }

  componentWillReceiveProps (newProps) {
    if (newProps.message && !this.props.message) {
      this.openSnackbar(newProps.autoCloseDuration)
    }

    if (newProps.message && this.props.message) {
      this.setState({
        show: false
      }, () => this.openSnackbar(newProps.autoCloseDuration))
    }
  }

  openSnackbar = (duration) => {
    this.setState({
      show: true
    }, () => {
      document.addEventListener('click', this.handleOutsideClicks, false)
      if (duration) {
        setTimeout(this.closeSnackbar, duration)
      }
    })
  }

  closeSnackbar = () => {
    if (this.state.show) {
      this.setState({ show: false }, () => {
        document.removeEventListener('click', this.handleOutsideClicks, false)
        this.props.dispatch(closeSnackbar())
      })
    }
  }

  handleOutsideClicks = (e) => {
    // Close snackbar on clicks outside
    if (this.snackbar.contains(e.target)) {
      return null
    }

    return this.closeSnackbar()
  }

  render () {
    const { message, children, action } = this.props

    const snackBarContainer = classNames('snackbar', {
      show: this.state.show
    })

    const snackBarText = classNames('snackbar-text', {
      show: this.state.show
    })

    return (
      [
        children,
        <div styleName={snackBarContainer} key="snackbar" ref={ref => this.snackbar = ref}>
          <div styleName="snackbar-content">
            <div styleName={snackBarText}>
              <span>{message}</span>

              {
                action &&
                <span
                  styleName="action-label"
                  onClick={() => this.props.dispatch(action.onClick)}
                >
                  {action.label}
                </span>
              }
            </div>
          </div>
        </div>
      ]
    )
  }
}

Snackbar.defaultProps = {
  message: '',
  autoCloseDuration: null,
  action: null
}

Snackbar.propTypes = {
  message: PropTypes.string,
  autoCloseDuration: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired,
  dispatch: PropTypes.func.isRequired,
  action: PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  })
}

const mapStateToProps = ({ snackbar }) => ({
  message: snackbar.message,
  autoCloseDuration: snackbar.autoCloseDuration,
  action: snackbar.action
})

export default connect(
  mapStateToProps
)(Snackbar)

/* eslint-enable react/no-unused-prop-types */
