import React from "react";
import { Menu, Icon } from "semantic-ui-react";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.mainWindow = nw.Window.get();
    }

    componentDidMount() {
        this.mainWindow.on('close', () => {
            nw.App.closeAllWindows();
            nw.App.quit();
        });
    }

    onIconClick(iconName) {
        switch (iconName) {
            case 'min':
                this.mainWindow.minimize();
                break;
            case 'close':
                this.mainWindow.close();
                break;
        }
    }

    render() {
        return (
            <Menu className="fluid one item inverted">
                <Menu.Item header className="text draggable">My PC Stats</Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item header onClick={() => this.onIconClick('min')}>
                        <Icon link name="window minimize outline" />
                    </Menu.Item>
                    <Menu.Item header onClick={() => this.onIconClick('close')}>
                        <Icon link name='close' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}