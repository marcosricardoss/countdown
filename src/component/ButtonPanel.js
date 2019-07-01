import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ButtonPanel.css";

export default class ButtonPanel extends React.Component {
    render() {
        return (
            <div>
                <DatePicker 
                    selected={this.props.date}
                    onChange={this.props.onChange}
                />
            </div>
        );
    }
}