import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'

class AnalyserForm extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick(e) {
    if (this.state) {
      this.props.handler(this.state.url)
    }
  }

  handleChange(e, data) {
    this.setState({url: data.value})
  } 

  render () {
    let action = {
      color: 'blue',
      labelPosition: 'right',
      icon: 'treatment',
      content: 'Analyse',
      onClick: this.handleClick
    }

    return (
      <Input fluid
        action={ action }
        placeholder="Enter a URL to a web page to analyse e.g. http://example.com"
        onChange={ this.handleChange }
      />
    )
  }
}

export default AnalyserForm
