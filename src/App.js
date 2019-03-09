import React, { Component } from 'react';
import './App.css';
import OneComp from './Main Components/OneComp';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Hello My Friend'
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <br />
        <OneComp name={this.state.name} />
      </div>
    );
  }
}

export default App;
