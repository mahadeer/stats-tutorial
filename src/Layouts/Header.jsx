import React from "react";
import { Menu, Icon } from "semantic-ui-react";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMaximized: false
        }
        this.mainWindow = nw.Window.get();
        this.menuRef = React.createRef();
    }

    componentDidMount() {
        this.mainWindow.on('close', () => {
            nw.App.closeAllWindows();
            this.mainWindow.close(true);
        });
        this.mainWindow.on('move', function (x, y) {
            if (x > 0 && y > 0 && this.state.isMaximized) {
                this.setState({ isMaximized: false });
            }
        }.bind(this));
    }

    onIconClick(iconName) {
        switch (iconName) {
            case 'min':
                this.mainWindow.minimize();
                break;
            case 'unmax':
                this.setState({ isMaximized: false });
                this.mainWindow.unmaximize();
                break;
            case 'max':
                this.setState({ isMaximized: true });
                this.mainWindow.maximize();
                break;
            case 'close':
                this.mainWindow.close();
                break;
        }
    }

    render() {
        return (
            <Menu className="fluid one item inverted">
                <Menu.Item header className="text draggable" ref={this.menuRef}>My PC Stats</Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item header onClick={() => this.onIconClick('min')}>
                        <Icon link name="window minimize outline" />
                    </Menu.Item>
                    {this.state.isMaximized ?
                        <Menu.Item header onClick={() => this.onIconClick('unmax')}>
                            <Icon link name='window restore outline' />
                        </Menu.Item> :
                        <Menu.Item header onClick={() => this.onIconClick('max')}>
                            <Icon link name='window maximize outline' />
                        </Menu.Item>
                    }
                    <Menu.Item header onClick={() => this.onIconClick('close')}>
                        <Icon link name='close' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}