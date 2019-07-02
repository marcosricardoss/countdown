import React from "react";
import PropTypes from 'prop-types';

export default class ButtonInput extends React.Component {
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