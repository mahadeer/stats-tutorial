import React from "react";
import { Segment, Statistic, Header } from 'semantic-ui-react';

export default (props) => {
    const percentage = props.value + "%";
    return (
        <Segment className="center">
            <Header as='h3' block>
                {props.name}
            </Header>
            <Statistic size="large">
                <Statistic.Value>{percentage}</Statistic.Value>
                <Statistic.Label>Memory used</Statistic.Label>
            </Statistic>
        </Segment>
    );
}