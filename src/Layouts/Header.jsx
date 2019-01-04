import React from "react";
import { Menu, Dropdown, DropdownDivider, Icon } from "semantic-ui-react";

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Menu>
                <Menu.Item header>Our Company</Menu.Item>
                <Dropdown item text="File" icon={null}>
                    <Dropdown.Menu>
                        <Dropdown.Item>New</Dropdown.Item>
                        <DropdownDivider />
                        <Dropdown.Item>Open</Dropdown.Item>
                        <Dropdown.Item>Exit</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Menu position='right'>
                    <Menu.Item header>
                        <Icon link name='close' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}