import React from "react";
import Countdown from "./Countdown";
import ButtonPanel from "./ButtonPanel"
import "./App.css";

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {     
      dateTo: new Date(new Date(0, 0, 1).setFullYear(new Date().getFullYear() + 1))
    }
    this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({    
      dateTo: date
    });
  }

  render() {
    return (
      <div className="component-app">
        <Countdown dateTo={this.state.dateTo} />
        <ButtonPanel date={this.state.dateTo} onChange={(i) => this.handleChange(i)} />
      </div>
    );
  }  
}