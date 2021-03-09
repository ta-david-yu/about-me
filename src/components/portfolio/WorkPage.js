import React, { Component } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import ModalContent from './ModalContent';
import withWindowSize from '../withWindowSize';

import '../../css/Portfolio.css';

Modal.setAppElement(document.getElementById("root"));

class WorkPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const currWorkData = this.props.currWorkData;
        return (
            <div>
                <ModalContent 
                    title={currWorkData.title}
                    type={currWorkData.type}
                    date={currWorkData.date}
                    team={currWorkData.team}
                    job={currWorkData.job}
                    mediaTable={currWorkData.mediaTable}
                    description={currWorkData.description.src}
                    information={currWorkData.information.src}
                    SmallFormat={false}
                />
            </div>
        );
    }
}

WorkPage.propTypes = {
    currWorkData: PropTypes.string.isRequired,
};

export default withWindowSize(WorkPage);