import React from "react";
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ButtonPanel.css";

class ButtonInput extends React.Component {
    render () {
        return (
        <button
            className="example-custom-input"
            onClick={this.props.onClick}>
            {this.props.value}
        </button>
        )
    }
}

ButtonInput.propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string
};

export default class ButtonPanel extends React.Component {
    render() {
        return (
            <div>                
                <DatePicker 
                    customInput={<ButtonInput />}
                    selected={this.props.date}
                    onChange={this.props.onChange}
                    showTimeSelect
                    timeFormat="HH:mm"
                />
            </div>
        );
    }
}