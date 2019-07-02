import React from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ButtonInput from "./ButtonInput"
import "./ButtonPanel.css";

export default class ButtonPanel extends React.Component {
    constructor(props){
        super(props)
        this.state = {    
            selected: this.props.selected
        }
      }

    handleChange(time) {        
        this.setState({
            selected: time
        });           
    }

    render() {
        return (
            <div>                
                <DatePicker 
                    customInput={<ButtonInput />}
                    selected={this.state.selected}
                    onChange={(i) => this.handleChange(i)}      
                    title={moment(this.state.selected).format('DD-MM-YYYY')}
                />
                <DatePicker 
                    customInput={<ButtonInput />}
                    selected={this.state.selected}
                    onChange={(i) => this.handleChange(i)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    title={moment(this.state.selected).format('HH:mm')}
                />
                <button onClick={() => this.props.onClick(this.state.selected)}>Ok</button>
            </div>
            
        );
    }
}