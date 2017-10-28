import React, { Component } from 'react';
import { Message } from 'semantic-ui-react'

// Source: https://github.com/cainus/json-status/blob/master/index.js#L33
const HTTP_STATUSES = {
  400: 'Bad Request',
  401: 'Unauthenticated',
  403: 'Forbidden',
  404: 'Not Found',
  405: 'Method Not Allowed',
  406: 'Not Acceptable',
  409: 'Conflict',
  410: 'Gone',
  411: 'Length Required',
  412: 'Precondition Failed',
  413: 'Request Entity Too Large',
  414: 'Request URI Too Long',
  415: 'Unsupported Media Type',
  422: 'Unprocessable Entity',
  429: 'Too Many Requests',
  500: 'Internal Server Error',
  501: 'Not Implemented',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout'
}

class AnalyserError extends Component {
  constructor(props) {
    super(props)
    this.state = props.error
  }

  parseError() {
    switch (this.state.name) {
      case 'InvalidUrlError':
        this.setState({ title: 'Invalid URL!' })
        break
      case 'InvalidContentError':
        this.setState({ title: 'Invalid content!' })
        break
      case 'UnreachableUrlError':
        let status = this.state.status? HTTP_STATUSES[this.state.status] : ''
        this.setState({ title: `Unreachable URL! ${status}` })
        break
      default:
        this.setState({
          title: 'Unknown error!',
          message: 'Unknown Error!'
        })
    }
  }

  componentDidMount() {
    this.parseError()
  }

  render () {
    return (
      <Message error>
        <Message.Header>
          { this.state.title }
        </Message.Header>
        { this.state.message }
      </Message>
    )
  }
}

export default AnalyserError
