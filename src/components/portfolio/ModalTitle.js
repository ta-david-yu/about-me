import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import Markdown from 'react-markdown';

import withWindowSize from '../withWindowSize';
import CustomScrollbar from './CustomScrollbar';

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
        const length = this.props.mediaTable.length;
        if (length === 1) return;

        const stateObj = this.state;
        stateObj.currentMedia = (stateObj.currentMedia + 1) % length;
        stateObj.isVideoLoaded = false;

        this.setState(stateObj);
    }

    handleOnMediaLeft(e) {
        const length = this.props.mediaTable.length;
        if (length === 1) return;

        const stateObj = this.state;
        stateObj.currentMedia = (stateObj.currentMedia - 1);
        if (stateObj.currentMedia < 0)
        {
            stateObj.currentMedia += length;
        }
        stateObj.isVideoLoaded = false;

        this.setState(stateObj);
    }

    generateMediaJSX(mediaTable) {
        this.mediaJSX = [];
        this.mediaComment = [];
        const mediaClassName = (this.props.windowWidth < 720)? "sm" : (this.props.windowWidth < 1280)? "md" : "lg";

        const pageNumber = this.state.currentMedia;
        const pageCount = mediaTable.length;

        if (mediaTable.length > 0) {
            mediaTable.forEach(media => {
                let jsx = null;
                if (media.type === "video") {
                    jsx = 
                    <div className={"modal-media " + mediaClassName}>
                        <img alt={"left-btn"} src={"./img/left-arrow-inactive.png"} className="left-button" onClick={this.handleOnMediaLeft}/>
                        <img alt={"right-btn"} src={"./img/right-arrow-inactive.png"} className="right-button" onClick={this.handleOnMediaRight}/>
                        <span className={"media-page-number"}>{pageNumber + 1}/{pageCount}</span>

                        {!this.state.isVideoLoaded? 
                                <span className="modal-media-loading">loading video</span> :
                                <span className="modal-media-loading exit">loading video</span> }
                        <ReactPlayer
                        width={"100%"}
                        height={"100%"}
                        onProgress={this.handleOnVideoProgress}
                        onReady={this.handleOnVideoReady}
                        playing={true}
                        volume={0.3}
                        light={false}
                        url={media.src} />

                        {(typeof media.comment !== "undefined" && media.comment !== "")? <div className={"media-comment " + mediaClassName}>{media.comment}</div> : <div></div>}
                    </div>
                }
                else if (media.type === "image") {
                    jsx = 
                    <div className={"modal-media " + mediaClassName}>
                        <img alt={"left-btn"} src={"./img/left-arrow-inactive.png"} className="left-button" onClick={this.handleOnMediaLeft}/>
                        <img alt={"right-btn"} src={"./img/right-arrow-inactive.png"} className="right-button" onClick={this.handleOnMediaRight}/>
                        <span className={"media-page-number"}>{pageNumber + 1}/{pageCount}</span>

                        <img alt="work-img" src={media.src} className={"modal-img " + mediaClassName} />
                        
                        {(typeof media.comment !== "undefined" && media.comment !== "")? <div className={"media-comment " + mediaClassName}>{media.comment}</div> : <div></div>}
                    </div>;
                }

                this.mediaJSX.push(jsx);
            });
        }
        else {
            this.mediaJSX.push(
                <div className={"modal-media " + mediaClassName}></div>);
        }
    }

    render() {
        this.generateMediaJSX(this.props.mediaTable);

        const isSmallScreen = this.props.windowWidth < 720;
        const size = (this.props.windowWidth < 720)? "sm" : (this.props.windowWidth < 1280)? "md" : "lg";

        return (!isSmallScreen?
            <div>
                <div className={"modal-media-box box-s-other-left " + size}>
                    {this.mediaJSX[this.state.currentMedia]}
                    <div className="modal-game-title">
                        {this.props.title}
                    </div>
                    <div className="modal-job">
                        {this.props.job}
                    </div>
                    <div className="center-align">
                        <span className="modal-date">
                            <img alt="date-icon" src="./img/clock-x13.png" className="modal-time-icon"/>
                            {this.props.date} 
                        </span>
                        <span className="modal-team-size">
                            <img alt="date-icon" src="./img/person-x13.png" className="modal-team-icon"/>
                            {(parseInt(this.props.team) > 1)? this.props.team + "-person team" : "Solo"} 
                        </span>
                    </div>
                    <div className="modal-information">{this.props.information}</div>
                </div>
                <div className={"modal-description-box box-s-other-right " + size}>
                    <CustomScrollbar>
                        <Markdown source={this.props.description} className="modal-description"/>
                    </CustomScrollbar>
                </div>
            </div> : 
            <div>
                <div className={"modal-media-box " + size}>
                    {this.mediaJSX[this.state.currentMedia]}
                    <div className="modal-game-title">
                        {this.props.title}
                    </div>
                    <div className="modal-job">
                        {this.props.job}
                    </div>
                    <div className="center-align">
                        <span className="modal-date">
                            <img alt="date-icon" src="./img/clock-x13.png" className="modal-time-icon"/>
                            {this.props.date} 
                        </span>
                        <span className="modal-team-size">
                            <img alt="date-icon" src="./img/person-x13.png" className="modal-team-icon"/>
                            {(parseInt(this.props.team) > 1)? this.props.team + "-person team" : "Solo"} 
                        </span>
                    </div>
                    <div className="modal-information">{this.props.information}</div>
                </div>
                <div className={"modal-description-box " + size}>
                    <CustomScrollbar>
                        <Markdown source={this.props.description} className="modal-description"/>
                    </CustomScrollbar>
                </div>
            </div>
        );
    }
}

ModalTitle.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    mediaTable: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    information: PropTypes.object.isRequired
};

export default withWindowSize(ModalTitle);
