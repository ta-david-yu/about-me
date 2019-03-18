import React, { Component } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import withWindowSize from '../withWindowSize';

import WorkPanel from "./WorkPanel";
import ModalContent from "./ModalContent";

import works from "../../data/works"

import '../../css/Portfolio.css';

Modal.setAppElement(document.getElementById("root"));

class Page extends Component {

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

    openModal(work) {
        const stateObj = this.state;
        stateObj.isModalShown = true;
        stateObj.currentModalWork = work;

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
        const currPage = this.props.currPage;
        const worksTable = this.generateWorksItem(currPage);

        const itemSpan = (worksTable.length >= 3)? 4 : 6;
        const worksItem = worksTable.map((work) => {
            return <WorkPanel key={work.title} information={work} span={itemSpan} onClick={this.openModal}/>
        });

        const isSpecialFormat = (typeof this.state.currentModalWork.isSmall !== "undefined" && this.state.currentModalWork.isSmall);
        let modalClassName = (isSpecialFormat)? "sp-modal-size" :
                               (this.props.windowWidth < 720)? "sm-modal-size" :
                               (this.props.windowWidth < 1280)? "md-modal-size" : "lg-modal-size";
        modalClassName += " modal";

        return (
            <div>
                <Grid 
                container
                spacing={16}
                direction="column"
                justify="center"
                alignItems="center">
                    <Grid item xs={12}>
                        {currPage === "game" && <div className="page-title left show">games</div>}
                        {currPage === "tool" && <div className="page-title right show">tools/other</div>}
                    </Grid>
                    <Grid item lg={7} md={10} sm={12} xs={12}>
                        <Grid 
                        container
                        spacing={16}
                        direction="row">
                            {worksItem}
                        </Grid>
                    </Grid>
                </Grid>
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
            </div>
        );
    }
}

Page.propTypes = {
    currPage: PropTypes.string.isRequired,
};

export default withWindowSize(Page);