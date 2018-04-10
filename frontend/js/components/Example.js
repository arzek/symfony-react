import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Test from './Test';
export default class Example extends Component {
    render() {
        return (
            <div>
                <h1>Heee!!!</h1>
                <Test></Test>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}