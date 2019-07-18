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
            selected: this.props.selected,
            changed: false
        }
      }

    componentWillReceiveProps(newProps) {    
        this.setState({
            changed: false
        });
    }

    handleChange(time) {   
        let changed = time.getTime() !== this.props.selected.getTime();  
        this.setState({
            selected: time,
            changed: changed
        });           
    }

    render() {
        let btClassName = this.state.changed ? "btn btn-danger" : "btn";
        console.log(this.state.changed)
        return (
            <div id='component-button'>    
                <span>pick a date</span>
                <div id="buttons">
                    <DatePicker 
                        customInput={<ButtonInput />}
                        selected={this.state.selected}
                        onChange={(i) => this.handleChange(i)}      
                        title={moment(this.state.selected).format('LL')}
                        className='btn'
                    />
                    <DatePicker 
                        customInput={<ButtonInput />}
                        selected={this.state.selected}
                        onChange={(i) => this.handleChange(i)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeFormat="h:mm aa"
                        timeIntervals={15}
                        title={moment(this.state.selected).format('hh:mm A')}
                        className='btn'
                    />
                    <button className={btClassName} onClick={() => this.props.onClick(this.state.selected)}>Ok</button>
                </div>            
            </div>
            
        );
    }
}