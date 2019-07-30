import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Countdown from "./Countdown";
import Sidebar from './Sidebar'
import "./App.css";

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {    
      timeTo: new Date(new Date(0, 0, 1).setFullYear(new Date().getFullYear() + 1)),
      isOpen: false
    }    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(time) {
    this.setState({
      timeTo: time,
      isOpen: false
    });  
  }

  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen
    });  
  }

  render() {
    let menuBtn = <a href="#" className="large show-menu-link" onClick={this.handleClick}>
                      <FontAwesomeIcon icon={faBars} />
                  </a>
    
    let sidebar = <Sidebar 
                    selected={this.state.timeTo} 
                    onSubmit={this.handleSubmit} 
                    onClick={this.handleClick} /> 
    return (
      <div id="component-app">
        { !this.state.isOpen && menuBtn}
        <Countdown timeTo={this.state.timeTo} />        
        { this.state.isOpen && sidebar }       

      </div>
    );
  }  
}