import React, { Component } from 'react';
import { Table, Header, Icon } from 'semantic-ui-react'

class AnalyserResult extends Component {
  constructor(props) {
    super(props)
    this.state = props.result
  }

  render () {
    let hasLoginForm = null
    if (this.state.hasLoginForm) {
      hasLoginForm = <Icon name="checkmark" size="big" color='green'/>
    } else {
      hasLoginForm = <Icon name="remove" size="big" color='red'/>
    }

    return (
      <Table celled striped definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Header as="h3">Analysis</Header>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing colSpan="2">
              Title 
            </Table.Cell>
            <Table.Cell textAlign="center">
              { this.state.title } 
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing colSpan="2">
              HTML Version
            </Table.Cell>
            <Table.Cell textAlign="center">
              { this.state.htmlVersion }
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing colSpan="2">
              Has login form?
            </Table.Cell>
            <Table.Cell textAlign="center">
              { hasLoginForm }
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing rowSpan="6">
              Headings 
            </Table.Cell>
            <Table.Cell collapsing>
              H1
            </Table.Cell>
            <Table.Cell textAlign="center">
              { this.state.headings && this.state.headings.h1 }
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              H2
            </Table.Cell>
            <Table.Cell textAlign="center">
              { this.state.headings && this.state.headings.h2 }
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              H3
            </Table.Cell>
            <Table.Cell textAlign="center">
              { this.state.headings && this.state.headings.h3 }
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              H4
            </Table.Cell>
            <Table.Cell textAlign="center">
              { this.state.headings && this.state.headings.h4 }
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              H5
            </Table.Cell>
            <Table.Cell textAlign="center">
              { this.state.headings && this.state.headings.h5 }
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              H6
            </Table.Cell>
            <Table.Cell textAlign="center">
              { this.state.headings && this.state.headings.h6 }
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing rowSpan="4">
              Links
            </Table.Cell>
            <Table.Cell collapsing>
              All
            </Table.Cell>
            <Table.Cell textAlign="center">
              { this.state.linksCount && this.state.linksCount.all }  
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              External
            </Table.Cell>
            <Table.Cell textAlign="center">
              { this.state.linksCount && this.state.linksCount.external }  
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              Internal
            </Table.Cell>
            <Table.Cell textAlign="center">
              { this.state.linksCount && this.state.linksCount.internal }  
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              Inaccessible
            </Table.Cell>
            <Table.Cell textAlign="center">
              { this.state.linksCount && this.state.linksCount.inaccessible }  
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    )
  }
}

export default AnalyserResult
