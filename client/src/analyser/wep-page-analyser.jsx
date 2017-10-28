import React, { Component } from 'react';
import { Container, Grid, Header, Loader, Icon } from 'semantic-ui-react'
import superagent from 'superagent'
import AnalyserForm from './analyser-form'
import AnalyserError from './analyser-error'
import AnalyserResult from './analyser-result'

class WepPageAnalyser extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      error: null,
      result: null
    }
    
    this.handleUrl = this.handleUrl.bind(this)
  }

  handleUrl(url) {
    this.setState({isLoading: true})
    superagent.get('/api/v1/analyse').query({url: url}).timeout({response: 600000}).then((res) => {
      this.setState({
        isLoading: false,
        error: null,
        result: res.body
      })
    }).catch((err) => {
      this.setState({
        isLoading: false,
        error: err.response? err.response.body.error : {name:'Unknown error!'},
        result: null,
      })
    })
  }

  render () {
    let display = null
    if (this.state.isLoading) {
      display = <Loader active size="massive" inline="centered">Analysing...</Loader>
    } else if (this.state.error) {
      display = <AnalyserError error={ this.state.error }/>
    } else if (this.state.result) {
      display = <AnalyserResult result={ this.state.result } />
    }
    return (
      <Container>
          <Grid padded="very">
              <Grid.Row>
                  <Grid.Column>
                      <Header as="h1" textAlign="center">
                          <Icon name="doctor"/>
                          Wep page analyser
                      </Header>
                  </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                  <Grid.Column>
                    <AnalyserForm handler={ this.handleUrl } />
                  </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                  <Grid.Column>
                    { display }
                  </Grid.Column>
              </Grid.Row>
          </Grid>
      </Container>
    )
  }
}

export default WepPageAnalyser
