import React, { Component } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import withWindowSize from '../withWindowSize';
import { ReactPhotoCollage } from "react-photo-collage";

import WorkListItem from "./WorkListItem";

import works from "../../data/works"

import '../../css/Portfolio.css';

Modal.setAppElement(document.getElementById("root"));

class ListPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalShown: false,
            currentModalWork: works[0]
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.generateWorksItem(props.currPage);
    }

    openModal(workData) {
        const stateObj = this.state;
        stateObj.isModalShown = true;
        stateObj.currentModalWork = workData;

        this.setState(stateObj);
    }

    closeModal() {
        const stateObj = this.state;
        stateObj.isModalShown = false;

        this.setState(stateObj);
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
            return <WorkListItem key={work.title} workData={work} span={itemSpan} onClick={this.props.onClickOnListItem}/>
        });
        
        const collageMaxWidth = 720;
        const collageTopMaxHeight = 384;

        let collageWidth = collageMaxWidth;
        let collageTopHeight = collageTopMaxHeight;

        if (window.innerWidth * 0.8 < collageMaxWidth)
        {
            collageWidth = window.innerWidth * 0.8;
            collageTopHeight = collageTopMaxHeight * 0.8;
        }

        const artCollage = {
            width: collageWidth + 'px',
            height: [collageTopHeight + 'px', '192px'],
            layout: [1, 3],
            photos: [
                { src: "./img/art/TreeMoonCat.png"},
                { src: "./img/art/stranded-social-media.png"},
                { src: "./img/art/MissYouDayNNight-social-media-x2.png"},
                { src: "./img/art/ootm-social-media-x2.png"},
            ]
        }

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
                        {currListName === "long-term" && 
                            <div>
                                <div className="page-title left show">long-term projects</div>
                                <div className="page-description">a list of projects with longer development cycles or released commercially</div>
                            </div>}
                        {currListName === "experimental" && 
                            <div>
                                <div className="page-title left show">small-but-sweet games</div>
                                <div className="page-description">a list of small/experimental games and prototypes,</div>
                                <div className="page-description">although not all of them are fully complete, I still want to show them because I think they are cool</div>
                            </div>}
                        {currListName === "art" && 
                            <div>
                                <div className="page-title left show">artworks</div>
                                <div className="page-description">some pixel art pieces I drew</div>
                            </div>}
                    </Grid>
                    <Grid item lg={lgContainerSpan} md={12} sm={12} xs={12}>
                        {currListName !== "art"? 
                            <Grid 
                            container
                            spacing={16}
                            direction="row">
                                {worksItem}
                            </Grid> : 
                            <ReactPhotoCollage {...artCollage}/>}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

ListPage.propTypes = {
    currListName: PropTypes.string.isRequired,
    onClickOnListItem: PropTypes.func.isRequired,
};

export default withWindowSize(ListPage);