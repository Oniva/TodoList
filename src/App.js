import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Inputs from './Inputs.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"></link>
          <link rel="shortcut icon" type="image/x-icon" href="../public/favicon.ico"/>
        </header>
        <div align="center">
        <h1 className="heading">Todo List:</h1>
        <Inputs />
        </div>
      </div>
    );
  }
}

export default App;
