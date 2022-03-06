import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { Grid } from "@material-ui/core";

import withWindowSize from '../withWindowSize';

import '../../css/Portfolio.css';

const GridOffset = (props) => { return <Grid item></Grid>; }

class MediaDot extends Component {
    constructor(props) {
        super(props);

        this.handleOnClickImg = this.handleOnClickImg.bind(this);
    }

    handleOnClickImg(e) {
        this.props.onClickDot(this.props.index);
    }

    render() {
        return (<img 
                    key={this.props.index}
                    alt={"media-dot"} 
                    className={"media-index-dot"} 
                    src={"./img/media-index-dot-inactive.png"} 
                    onClick={this.handleOnClickImg}/>);
    }
}

MediaDot.propTypes = {
    index: PropTypes.number.isRequired,
    onClickDot: PropTypes.func
}

class ProjectPageContent extends Component {
    constructor(props) {
        super(props);

        this.state = { isMediaLoaded: false, progressState: null, currentMediaIndex: 0 };

        this.handleOnVideoProgress = this.handleOnVideoProgress.bind(this);
        this.handleOnMediaReady = this.handleOnMediaReady.bind(this);
        
        this.handleOnMediaRight = this.handleOnMediaRight.bind(this);
        this.handleOnMediaLeft = this.handleOnMediaLeft.bind(this);

        this.handleOnClickMediaDot = this.handleOnClickMediaDot.bind(this);
    }
    
    handleOnVideoProgress(state) {
        const stateObj = this.state;
        stateObj.progressState = state;
        this.setState(stateObj);
    }

    handleOnMediaReady(e) {
        const stateObj = this.state;
        stateObj.isMediaLoaded = true;
        this.setState(stateObj);
    }

    handleOnMediaRight(e) {
        const length = this.props.mediaTable.length;
        if (length === 1) return;

        const stateObj = this.state;
        stateObj.currentMediaIndex = (stateObj.currentMediaIndex + 1) % length;
        stateObj.isMediaLoaded = false;

        this.setState(stateObj);
    }

    handleOnMediaLeft(e) {
        const length = this.props.mediaTable.length;
        if (length === 1) return;

        const stateObj = this.state;
        stateObj.currentMediaIndex = (stateObj.currentMediaIndex - 1);
        if (stateObj.currentMediaIndex < 0)
        {
            stateObj.currentMediaIndex += length;
        }
        stateObj.isMediaLoaded = false;

        this.setState(stateObj);
    }

    handleOnClickMediaDot(index) {
        const stateObj = this.state;
        stateObj.currentMediaIndex = index;
        stateObj.isMediaLoaded = false;

        this.setState(stateObj);
    }

    generateMediaJSX(mediaTable) {
        this.mediaJSX = [];
        this.mediaComment = [];
        const mediaClassName = (this.props.windowWidth < 720 || this.props.SmallFormat)? "sm" : (this.props.windowWidth < 1280)? "md" : "lg";

        const pageNumber = this.state.currentMediaIndex;
        const pageCount = mediaTable.length;

        if (mediaTable.length > 0) {
            let index = 0;
            mediaTable.forEach(media => {
                let jsx = null;
                if (media.type === "video") {
                    jsx = 
                    <div id={index} className={"modal-media " + mediaClassName}>
                        {mediaTable.length > 1 && <span className={"media-page-number"}>{pageNumber + 1}/{pageCount}</span>}

                        {!this.state.isMediaLoaded? 
                                <span className={"modal-media-loading " + mediaClassName}>loading video</span> :
                                <span className={"modal-media-loading exit " + mediaClassName}>loading video</span> }
                        <ReactPlayer width={"100%"} height={"100%"}
                        onProgress={this.handleOnVideoProgress}
                        onReady={this.handleOnMediaReady}
                        playing={false}
                        volume={0.3}
                        light={false}
                        controls={true}
                        url={media.src} />

                        {(typeof media.comment !== "undefined" && media.comment !== "")? <div className={"media-comment " + mediaClassName}>{media.comment}</div> : <div></div>}
                    </div>
                }
                else if (media.type === "image") {
                    jsx = 
                    <div id={index} className={"modal-media " + mediaClassName}>
                        {mediaTable.length > 1 && <span className={"media-page-number"}>{pageNumber + 1}/{pageCount}</span>}

                        <img alt="work-img" src={media.src} onLoad={this.handleOnMediaReady} className={"modal-img " + mediaClassName} />
                        
                        {!this.state.isMediaLoaded? 
                                <span className={"modal-media-loading " + mediaClassName}>loading image</span> :
                                <span className={"modal-media-loading exit " + mediaClassName}>loading image</span> }

                        {(typeof media.comment !== "undefined" && media.comment !== "")? <div className={"media-comment " + mediaClassName}>{media.comment}</div> : <div></div>}
                    </div>;
                }

                this.mediaJSX.push(jsx);
                index += 1;
            });
        }
        else {
            this.mediaJSX.push(
                <div className={"modal-media " + mediaClassName}></div>);
        }
    }

    render() {
        this.generateMediaJSX(this.props.mediaTable);

        const mediaTable = this.props.mediaTable;
        const currentMediaIndex = this.state.currentMediaIndex;

        const mediaIndexDots = mediaTable.map((media, index) => { 
            return (index === currentMediaIndex)? 
                    <img key={index} alt={"media-dot"} className={"media-index-dot.active"} src={"./img/media-index-dot-active.png"} /> :
                    <MediaDot key={index} index={index} onClickDot={this.handleOnClickMediaDot} />;
        });

        const size = (this.props.windowWidth < 720 || this.props.SmallFormat)? "sm" : (this.props.windowWidth < 1280)? "md" : "lg";

        return  <div>
                    <Grid 
                    container 
                    spacing={8}
                    direction="column"
                    justify="center"
                    alignItems="center">
                        <GridOffset/><GridOffset/><GridOffset/><GridOffset/>
                        <Grid item className={"modal-media-box " + size}>
                            {this.mediaJSX[this.state.currentMediaIndex]}
                            <div className="media-index-set">
                                {mediaTable.length > 1 && <img alt={"left-btn"} className="media-left-button" src={"./img/left-arrow-inactive.png"} onClick={this.handleOnMediaLeft}/>}
                                {mediaTable.length > 1 && mediaIndexDots}
                                {mediaTable.length > 1 && <img alt={"right-btn"} className="media-right-button" src={"./img/right-arrow-inactive.png"} onClick={this.handleOnMediaRight}/>}
                            </div>
                            <div className="modal-game-title">
                                {this.props.title}
                            </div>
                            <div className="modal-job">
                                {this.props.job}
                            </div>
                            <div className="modal-date-team">
                                <span className="modal-date">
                                    <img alt="date-icon" src="./img/clock-x13.png" className="modal-time-icon"/>
                                    {this.props.date} 
                                </span>
                                <span className="modal-team-size">
                                    <img alt="date-icon" src="./img/person-x13.png" className="modal-team-icon"/>
                                    {(parseInt(this.props.team) > 1)? this.props.team + "-person team" : "Solo"} 
                                </span>
                            </div>
                            <div className="center-align">
                                {this.props.linksInfo}
                            </div>
                        </Grid>
                        <Grid item lg={10} md={10} sm={12} xs={12}>
                            <Grid 
                            container
                            spacing={32}
                            direction="row">
                                <Grid item lg={6}>
                                    <div className="modal-information">{this.props.information}</div>
                                </Grid>
                                <Grid item lg={6}>
                                    <span style={{margin: '50px'}} />
                                    <div className="modal-information">{this.props.description}</div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>;
    }
}

ProjectPageContent.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    linksInfo: PropTypes.object.isRequired,
    mediaTable: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    information: PropTypes.object.isRequired
};

export default withWindowSize(ProjectPageContent);
