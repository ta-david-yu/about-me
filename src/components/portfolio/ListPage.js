import React, { Component } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import withWindowSize from '../withWindowSize';

import WorkListItem from "./WorkListItem";
//import ModalContent from "./ModalContent";

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

        const itemSpan = (worksTable.length >= 3)? ((worksTable.length >= 4)? 3 : 4) : 
        6;
        const worksItem = worksTable.map((work) => {
            //return <WorkListItem key={work.title} workData={work} span={itemSpan} onClick={this.openModal}/>
            return <WorkListItem key={work.title} workData={work} span={itemSpan} onClick={this.props.onClickOnListItem}/>
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
                        {currListName === "long-term" && 
                            <div>
                                <div className="page-title left show">long-term projects</div>
                                <div className="page-description">a list of projects with longer development cycles or released commercially</div>
                            </div>}
                        {currListName === "experimental" && 
                            <div>
                                <div className="page-title left show">small-but-sweet games</div>
                                <div className="page-description">a list of small/experimental games and prototypes,</div>
                                <div className="page-description">although not all of them are complete, I still want to show them because I think they are cool</div>
                            </div>}
                        {currListName === "art" && 
                            <div>
                                <div className="page-title left show">artworks</div>
                                <div className="page-description">some pixel art pieces I made (UNDER CONSTRUCTION RIP)</div>
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
            /*
                <Modal 
                contentLabel={"work-modal"}
                isOpen={this.state.isModalShown}
                onRequestClose={this.closeModal}
                shouldCloseOnOverlayClick={true}
                className={modalClassName}
                overlayClassName="modal-overlay"
                closeTimeoutMS={300}>
                        <div>
                            {this.state.currentModalWork && 
                                <ModalContent 
                                title={this.state.currentModalWork.title}
                                type={this.state.currentModalWork.type}
                                date={this.state.currentModalWork.date}
                                team={this.state.currentModalWork.team}
                                job={this.state.currentModalWork.job}
                                mediaTable={this.state.currentModalWork.mediaTable}
                                description={this.state.currentModalWork.description.src}
                                information={this.state.currentModalWork.information.src}
                                SmallFormat={isSpecialFormat}
                                />}
                        </div>
                        <img alt="return" className={isSpecialFormat? "sp-modal-close-button" : "modal-close-button"} onClick={this.closeModal} src="./img/return-btn.png" />
                </Modal>
            */
        );
    }
}

ListPage.propTypes = {
    currListName: PropTypes.string.isRequired,
    onClickOnListItem: PropTypes.func.isRequired,
};

export default withWindowSize(ListPage);