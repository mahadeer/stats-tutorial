import React from "react";
import ReactDOM from "react-dom";
import Header from "./Layouts/Header";
import Content from "./Layouts/Content";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="app">
                <Header />
                <Content />
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("app")
);