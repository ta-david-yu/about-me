import React, { Component } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import ProjectPageContent from './ProjectPageContent';
import withWindowSize from '../withWindowSize';

import '../../css/Portfolio.css';

Modal.setAppElement(document.getElementById("root"));

/** 
 * A page component that shows the details of the given project
 */
class ProjectPage extends Component {

    render() {
        const currWorkData = this.props.currWorkData;
        return (
            <div>
                <ProjectPageContent 
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

ProjectPage.propTypes = {
    currWorkData: PropTypes.object.isRequired,
};

export default withWindowSize(ProjectPage);