import React, { Component } from "react";
import PropTypes from 'prop-types';

class ToggleButton extends Component {
    render() {
        const isHighlighted = (this.props.isHighlighted)? " highlighted" : "";
        return (
            <button
                value={this.props.value}
                type={this.props.type}
                onClick={this.props.onClick}
                className={this.props.className + isHighlighted}>
                {this.props.text}
            </button>
        )
    }
}

ToggleButton.PropTypes = {
    value: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string
};

export default ToggleButton;