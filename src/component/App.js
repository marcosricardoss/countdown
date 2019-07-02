import React from "react";
import Countdown from "./Countdown";
import ButtonPanel from "./ButtonPanel"
import "./App.css";

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {    
      timeTo: new Date(new Date(0, 0, 1).setFullYear(new Date().getFullYear() + 1))
    }    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(time) {
    this.setState({
      timeTo: time
    });  
  }  

  render() {
    return (
      <div className="component-app">
        <Countdown 
           timeTo={this.state.timeTo} 
        />
        <ButtonPanel 
          selected={this.state.timeTo} 
          onClick={this.handleClick} 
        />
      </div>
    );
  }  
}