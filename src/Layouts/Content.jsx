import React from "react";
import { Grid, Segment, Statistic, Header } from 'semantic-ui-react';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid className="container" columns='equal'>
                <Grid.Row>
                    <Grid.Column>
                        <Segment className="center">
                            <Header as='h3' block>
                                C++
                            </Header>
                            <Statistic size="large">
                                <Statistic.Value>95.24%</Statistic.Value>
                                <Statistic.Label>Memory used</Statistic.Label>
                            </Statistic>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment className="center">
                            <Header as='h3' block>
                                Rust
                            </Header>
                            <Statistic size="large">
                                <Statistic.Value>97.6%</Statistic.Value>
                                <Statistic.Label>Memory used</Statistic.Label>
                            </Statistic>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
} 