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
    render() {
        return (
            <div>                
                <DatePicker 
                    customInput={<ButtonInput />}
                    selected={this.props.date}
                    onChange={this.props.onChange}      
                    title={moment(this.props.date).format('DD-MM-YYYY')}
                />
                <DatePicker 
                    customInput={<ButtonInput />}
                    selected={this.props.date}
                    onChange={this.props.onChange}
                    showTimeSelect
                    showTimeSelectOnly
                    timeFormat="HH:mm"
                    title={moment(this.props.date).format('HH:mm')}
                />
            </div>
        );
    }
}