import React from "react";
import ReactDOM from "react-dom";
import Header from "./Layouts/Header";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="app">
                <Header />
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("app")
);