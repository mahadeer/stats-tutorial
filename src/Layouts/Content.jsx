import React from "react";
import { Grid, Segment } from 'semantic-ui-react'

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid className="container" columns='equal'>
                <Grid.Row>
                    <Grid.Column>
                        <Segment>1</Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>2</Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>3</Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>4</Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
} 