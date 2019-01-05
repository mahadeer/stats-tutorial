import React from "react";
import { Grid } from 'semantic-ui-react';
import StatSegment from "./StatSegment";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            CPP: 0,
            Rust: 0
        }
    }

    componentDidMount() {
        window.addEventListener("ModulesReady", function (event) {
            this.setState({
                CPP: event.detail.CPP.toFixed(2),
                Rust: event.detail.Rust.toFixed(2)
            });
        }.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("ModulesReady");
    }

    render() {
        return (
            <Grid className="container" columns='equal'>
                <Grid.Row>
                    <Grid.Column>
                        <StatSegment name="C++" value={this.state.CPP} />
                    </Grid.Column>
                    <Grid.Column>
                        <StatSegment name="Rust" value={this.state.Rust} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
} 