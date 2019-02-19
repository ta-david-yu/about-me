import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import ReactPlayer from 'react-player';

import withWindowSize from '../withWindowSize';

import '../../css/Portfolio.css';

class ModalTitle extends Component {
    constructor(props) {
        super(props);

        this.state = { isVideoLoaded: false, progressState: null, currentMedia: 0 };

        this.handleOnVideoProgress = this.handleOnVideoProgress.bind(this);
        this.handleOnVideoReady = this.handleOnVideoReady.bind(this);
        
        this.handleOnMediaRight = this.handleOnMediaRight.bind(this);
        this.handleOnMediaLeft = this.handleOnMediaLeft.bind(this);
    }
    
    handleOnVideoProgress(state) {
        const stateObj = this.state;
        stateObj.progressState = state;
        this.setState(stateObj);
    }

    handleOnVideoReady(e) {
        const stateObj = this.state;
        stateObj.isVideoLoaded = true;
        this.setState(stateObj);
    }

    handleOnMediaRight(e) {
        const stateObj = this.state;
        stateObj.currentMedia = (stateObj.currentMedia + 1) % this.props.mediaTable.length;
        this.setState(stateObj);
    }

    handleOnMediaLeft(e) {
        const stateObj = this.state;
        stateObj.currentMedia = (stateObj.currentMedia - 1);
        if (stateObj.currentMedia < 0)
            stateObj.currentMedia += this.props.mediaTable.length;

        this.setState(stateObj);
    }

    generateMediaJSX(mediaTable) {
        this.mediaJSX = [];
        const mediaClassName = (this.props.windowWidth < 1024)? "sm-media" : "lg-media";

        mediaTable.forEach(media => {
            let jsx = null;
            if (media.type === "video") {
                jsx = 
                <div className={"modal-title-media " + mediaClassName}>
                    {!this.state.isVideoLoaded? 
                            <div className="modal-media-loading">loading video</div> :
                            <div className="modal-media-loading exit">loading video</div> }
                    <ReactPlayer
                    width={"100%"}
                    height={"100%"}
                    onProgress={this.handleOnVideoProgress}
                    onReady={this.handleOnVideoReady}
                    light={false}
                    url={media.src} />
                </div>
            }
            else if (media.type === "image") {
                jsx = 
                <div className={"modal-title-media " + mediaClassName}>
                    <img alt="work-img" src={media.src} className="modal-title-img" />
                </div>;
            }

            this.mediaJSX.push(jsx);
        });
    }

    render() {
        this.generateMediaJSX(this.props.mediaTable);
        return (
            <div>
                <Grid container direction="column" justify="center" alignItems="center">
                    {this.mediaJSX[this.state.currentMedia]}
                    <div className="center-align">
                        <img alt={"left-btn"} src={"./img/game-button-active.png"} className="tool-button" onClick={this.handleOnMediaLeft}/>
                        <img alt={"right-btn"} src={"./img/game-button-active.png"} className="tool-button" onClick={this.handleOnMediaRight}/>
                    </div>
                    <Grid item>
                        <div className="work-title">{this.props.title}</div>
                        <div className="work-title">{this.props.type}</div>
                        <div className="work-title">{this.props.date}</div>
                        <div className="work-title">{this.props.team}</div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

ModalTitle.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    mediaTable: PropTypes.array.isRequired,
};

export default withWindowSize(ModalTitle);
