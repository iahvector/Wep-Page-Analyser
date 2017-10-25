import React, { Component } from 'react';
import { Container, Grid, Header, Input, Loader, Message, Table, Icon } from 'semantic-ui-react'

class App extends Component {
    render() {
        return (
            <div className="App">
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
                                <Input fluid
                                    action={{ color: 'blue', labelPosition: 'right', icon: 'treatment', content: 'Analyse' }}
                                    placeholder="Enter a URL to a web page to analyse e.g. http://example.com"
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Loader active size="massive" inline="centered">Analysing...</Loader>
                                <Message error>
                                    <Message.Header>
                                        Unreachable Url!
                                    </Message.Header>
                                   This URL cannot be reached: http://example.com, Status:500 
                                </Message>
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
                                                Example
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell collapsing colSpan="2">
                                               HTML Version
                                            </Table.Cell>
                                            <Table.Cell textAlign="center">
                                                HTML 5
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell collapsing colSpan="2">
                                               Has login form?
                                            </Table.Cell>
                                            <Table.Cell textAlign="center">
                                                <Icon name="checkmark" size="big" color='green'/>
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
                                                3
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell collapsing>
                                                H2
                                            </Table.Cell>
                                            <Table.Cell textAlign="center">
                                                3
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell collapsing>
                                                H3
                                            </Table.Cell>
                                            <Table.Cell textAlign="center">
                                                3
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell collapsing>
                                                H4
                                            </Table.Cell>
                                            <Table.Cell textAlign="center">
                                                3
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell collapsing>
                                                H5
                                            </Table.Cell>
                                            <Table.Cell textAlign="center">
                                                3
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell collapsing>
                                                H6
                                            </Table.Cell>
                                            <Table.Cell textAlign="center">
                                                3
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
                                                9
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell collapsing>
                                                External
                                            </Table.Cell>
                                            <Table.Cell textAlign="center">
                                                3
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell collapsing>
                                                Internal
                                            </Table.Cell>
                                            <Table.Cell textAlign="center">
                                                3
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell collapsing>
                                                Inaccessible
                                            </Table.Cell>
                                            <Table.Cell textAlign="center">
                                                3
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default App;
