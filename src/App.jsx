import React, { Component } from 'react';
import StuffList from './components/stuffList.jsx';


export default class App extends Component {
    render() {
        return (
            <div className="app">
                <StuffList />
            </div>
        );
    }
}
