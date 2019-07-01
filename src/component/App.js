import React from "react";
import Countdown from "./Countdown";
import ButtonPanel from "./ButtonPanel"
import "./App.css";

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {    
      now: new Date(), 
      timeTo: new Date(new Date(0, 0, 1).setFullYear(new Date().getFullYear() + 1))
    }
    this.handleChange.bind(this);
  }


  componentDidMount() {
    this.timerID = setInterval(
        () => this.timer(),
        1000
    );
  }

  componentWillUnmount() {
      clearInterval(this.timerID);
  }

  timer() {    
    this.setState({       
      now: new Date()
    });
  }

  handleChange(time) {
    if (time > new Date()) {
      this.setState({
        timeTo: time
      });
    }    
  }

  render() {
    return (
      <div className="component-app">
        <Countdown now={this.state.now} timeTo={this.state.timeTo} />
        <ButtonPanel date={this.state.timeTo} onChange={(i) => this.handleChange(i)} />
      </div>
    );
  }  
}