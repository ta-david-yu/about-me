import React, { Component } from "react";
import PropTypes from "prop-types";
import withWindowSize from '../withWindowSize';

import Constants from "./Constants";

import BasicProjectList from "./BasicProjectList";
import ArtProjectList from "./ArtProjectList";
import '../../css/Portfolio.css';

/** 
 * A page component that shows a list of projects
 */
class ProjectListPage extends Component {
    render() {
        const currListName = this.props.currListName;
        return (
            <div>
            {
                currListName !== Constants.ProjectCategory.Art?
                    <BasicProjectList currListName={currListName} onClickOnListItem={this.props.onClickOnListItem}/>
                    :
                    <ArtProjectList />
            }
            </div>
        );
    }
}

ProjectListPage.propTypes = {
    currListName: PropTypes.string.isRequired,
    onClickOnListItem: PropTypes.func.isRequired,
};

export default withWindowSize(ProjectListPage);