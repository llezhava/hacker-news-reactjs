import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./home/index.js"

class App extends Component {
  render() {
    return (
      <div className="App">
       <HomePage />
      </div>
    );
  }
}

export default App;
