import React, { Component } from "react";import './App.css';

import Dashboard from'./dashboard/dashboard'
import Display from './display/display'

class App extends Component() {
  state = {
    player:'JimBob',
    balls:0,
    strikes:0
  }
 //reset logic
  resetHandler = e => {
    this.setState({
      balls: 0,
      strikes: 0
    });
  };
//hit logic
  hitHandler = e =>{
    this.resetHandler(e)
  }

  //strike logic
  strikeHandler = e =>{
    if(this.state.strikes < 2){
this.setState(previousState =>{
  return {strikes:previousState.strikes + 1}
})
    }
else{
  this.resetHandler(e)
}
  }

//foul logic
foulHandler = e => {
  if (this.state.strikes < 2) {
    this.setState(prevState => {
      return { strikes: prevState.strikes + 1 };
    });
  }
};

//Ball logic

ballhandler = e => {
  if (this.state.balls < 3) {
    this.setState(prevState => {
      return { balls: prevState.balls + 1 };
    });
  } else this.handleReset(e);
};
render(){
  return(
    <div className="app-wrapper">
    <Display reset={this.resetHandler} BatterUP={this.state}/>
    <Dashboard
            ball={this.ballhandler}
            strike={this.strikeHandler}
            foul={this.foulHandler}
            hit={this.hitHandler}
          />

    </div>
  )
}
};







export default App;
