import React, { Component } from "react";import './App.css';

import Dashboard from'./dashboard/dashboard'
import Display from './display/display'

class App extends Component() {
  state = {
    player:'JimBob',
    balls:0,
    strikes:0
  }
 
  resetHandler = e => {
    this.setState({
      balls: 0,
      strikes: 0
    });
  };

  hitHandler = e =>{
    this.resetHandler(e)
  }

}

export default App;
