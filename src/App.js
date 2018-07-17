import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import { submitButton, editValue } from './logic';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <script src="./logic.js"></script>
          <img src={logo} className="App-logo" alt="logo" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"></link>
        </header>
        <div align="center">
        <h1>Todo List:</h1>
          <Button id="editbtn" onClick={editValue}>Edit</Button>
          <input id="inputbox" type="text" placeholder="New Task"></input>
          <Button onClick={submitButton}>Submit</Button>
        </div>
      </div>
    );
  }
}

export default App;
