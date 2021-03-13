import React, { Component } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import ProjectWorkContent from './ProjectWorkContent';
import withWindowSize from '../withWindowSize';

import '../../css/Portfolio.css';

Modal.setAppElement(document.getElementById("root"));

class WorkPage extends Component {

    render() {
        const currWorkData = this.props.currWorkData;
        return (
            <div>
                <ProjectWorkContent 
                    title={currWorkData.title}
                    type={currWorkData.type}
                    date={currWorkData.date}
                    team={currWorkData.team}
                    job={currWorkData.job}
                    mediaTable={currWorkData.mediaTable}
                    linksInfo={currWorkData.linksInfo}
                    description={currWorkData.description.src}
                    information={currWorkData.information.src}
                    SmallFormat={false}
                />
            </div>
        );
    }
}

WorkPage.propTypes = {
    currWorkData: PropTypes.object.isRequired,
};

export default withWindowSize(WorkPage);