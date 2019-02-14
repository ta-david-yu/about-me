import React, { Component } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

import WorkPanel from "./WorkPanel";

import works from "../../data/works"

import '../../css/Portfolio.css';

class Page extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalShown: false,
            modalContent: ""
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.generateWorksItem(props.currPage);
    }

    openModal(work) {
        this.setState({isModalShown: true, modalContent: 
            <div>{work.title}</div>
        })
    }

    closeModal() {
        this.setState({ isModalShown: false })
    }

    generateWorksItem(pageName) {
        const worksTable = [];

        works.forEach((work) => {
            if (work.type === pageName) {
                worksTable.push(work);
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
                        {currPage === "tool" && <div className="page-title right show">tools</div>}
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
                isOpen={this.state.isModalShown}
                onRequestClose={this.closeModal}
                shouldCloseOnOverlayClick={true}
                className="modal box-other"
                overlayClassName="modal-overlay"
                closeTimeoutMS={300}>
                    {this.state.modalContent}
                </Modal>
            </div>
        );
    }
}

Page.propTypes = {
    currPage: PropTypes.string.isRequired,
};

export default Page;