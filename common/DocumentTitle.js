import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Actions
import {
  updatePageHeader,
  updateBackUrl
} from 'Actions'

class DocumentTitle extends React.Component {
  componentDidMount () {
    const { title, header, backUrl, updatePageHeader, updateBackUrl } = this.props

    if (title) {
      document.title = title
    }

    updatePageHeader(header)
    updateBackUrl(backUrl)
  }

  componentWillReceiveProps (newProps) {
    const { title, header, backUrl, updatePageHeader, updateBackUrl } = this.props

    if (newProps.title !== title) {
      document.title = newProps.title
    }

    if (newProps.header !== header) {
      updatePageHeader(newProps.header)
    }

    if (newProps.backUrl !== backUrl) {
      updateBackUrl(newProps.backUrl)
    }
  }

  render () {
    if (this.props.children) {
      return React.Children.only(this.props.children)
    }

    return null
  }
}

DocumentTitle.defaultProps = {
  title: '',
  header: '',
  backUrl: ''
}

DocumentTitle.propTypes = {
  title: PropTypes.string,
  header: PropTypes.string,
  updatePageHeader: PropTypes.func.isRequired,
  backUrl: PropTypes.string,
  updateBackUrl: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

const mapDispatchToProps = {
  updatePageHeader,
  updateBackUrl
}

export default connect(
  null,
  mapDispatchToProps
)(DocumentTitle)
