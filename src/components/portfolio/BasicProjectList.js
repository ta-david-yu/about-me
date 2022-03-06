import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import withWindowSize from '../withWindowSize';

import Constants from "./Constants";
import ProjectListItem from "./ProjectListItem";

import works from "../../data/works"

import '../../css/Portfolio.css';

/** 
 * A component that shows a list of projects as items using ProjectListItem component, used by ProjectListPage
 */
class BasicProjectList extends Component {
    constructor(props) {
        super(props);
        this.generateWorksItem(props.currPage);
    }

    generateWorksItem(pageName) {
        const worksTable = [];

        works.forEach((work) => {
            if (work.type === pageName) {
                if (typeof work.ignore === "undefined" || work.ignore === false) {
                    worksTable.push(work);
                }
            }
        });
        
        return worksTable;
    }

    render() {
        const currListName = this.props.currListName;
        const worksTable = this.generateWorksItem(currListName);

        const itemSpan = (worksTable.length >= 3)? ((worksTable.length >= 4)? 3 : 4) : 6;
        const worksItem = worksTable.map((work) => {
            return <ProjectListItem key={work.title} workData={work} span={itemSpan} onClick={this.props.onClickOnListItem}/>
        });
        
        let lgContainerSpan = (this.props.windowWidth > 1600)? 7 : 12;

        return (
            <div>
                <Grid 
                container
                spacing={16}
                direction="column"
                justify="center"
                alignItems="center">
                    <Grid item lg={lgContainerSpan} md={12} sm={12} xs={12}>
                        {currListName === Constants.ProjectCategory.LongTerm && 
                            <div>
                                <div className="page-title left show">long-term projects</div>
                                <div className="page-description">a list of projects with longer development cycles or released commercially</div>
                            </div>}
                        {currListName === Constants.ProjectCategory.Experimental && 
                            <div>                                    <div className="page-title left show">small-but-sweet games</div>
                                <div className="page-description">a list of small/experimental games and prototypes,</div>
                                <div className="page-description">although not all of them are fully complete, I still want to show them because I think they are cool</div>
                            </div>}
                    </Grid>
                    <Grid item lg={lgContainerSpan} md={12} sm={12} xs={12}>                            
                        <Grid 
                        container
                        spacing={16}
                        direction="row">
                            {worksItem}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

BasicProjectList.propTypes = {
    currListName: PropTypes.string.isRequired,
    onClickOnListItem: PropTypes.func.isRequired,
};

export default withWindowSize(BasicProjectList);