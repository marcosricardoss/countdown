import React from "react";
import PropTypes from 'prop-types';
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ButtonPanel.css";

class ButtonInput extends React.Component {
    render () {
        return (
        <button
            className="example-custom-input"
            onClick={this.props.onClick}>
            {this.props.title}
        </button>
        )
    }
}

ButtonInput.propTypes = {
    onClick: PropTypes.func,
    title: PropTypes.string
};

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
                    title={moment(this.state.selected).format('HH:mm')}
                />
                <button onClick={() => this.props.onClick(this.state.selected)}>Ok</button>
            </div>
            
        );
    }
}