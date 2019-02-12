import React, { Component } from "react";
import PropTypes from 'prop-types';

import '../css/Portfolio.css';

class PageTab extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isHovered : false,
        }

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(e) {
        this.props.onClick(this.props.pageName);
    }
 
    render() {
        const pageName = this.props.pageName;
        const className = pageName + "-button".concat(this.props.isActive? " is-active" : "");

        return (
            <img alt={pageName.concat("-tab")} src={"./img/game-button-active.png"} className={className} onClick={this.handleOnClick}/>
        );
    }
}

PageTab.propTypes = {
    pageName: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default PageTab;