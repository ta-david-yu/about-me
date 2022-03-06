import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Grid } from "@material-ui/core";

import '../../css/Portfolio.css';

class ProjectListItem extends Component {

    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
        this.onPointerEnter = this.onPointerEnter.bind(this);
        this.onPointerLeave = this.onPointerLeave.bind(this);

        this.state = { isHovered : false };
    }

    onPointerEnter() {
        this.setState({ isHovered: true });
    }

    onPointerLeave() {
        this.setState({ isHovered: false });
    }

    handleOnClick(e) {
        this.props.onClick(this.props.workData);
    }

    render() {
        const workData = this.props.workData;
        const boxClassName = "work-box box-other";

        const hasImg = (workData.img !== "");
        const hasGif = (workData.gif !== "");
        const imgSrc = workData.img;
        const gifSrc = workData.gif;
        
        const isHovered = this.state.isHovered;
        const gifClassName = "work-img-cover" + (isHovered? " hover" : "");

        const span = this.props.span;

        return (
            <Grid item lg={span} md={span} sm={span} xs={12}>
                <Grid container direction="column" alignItems="center">
                    <div className={boxClassName} 
                    onClick={this.handleOnClick} onPointerEnter={this.onPointerEnter} onPointerLeave={this.onPointerLeave}>
                        <div className="work-img-container">
                            {(hasImg)? <img alt={workData.title} src={imgSrc} className={(hasGif)? gifClassName : "work-img"} /> : <div className="work-empty-img"><div className="work-empty-img-text">no preview image</div></div>}
                            {(hasGif)? <img alt={workData.title} src={gifSrc} className="work-gif" /> : <div className="work-gif"></div>}
                            {hasGif && (isHovered? <div className="work-gif-note hover">GIF</div> : <div className="work-gif-note">GIF</div>)}
                        </div>
                        <div className="work-title">
                            {workData.title}
                        </div>
                        <div className="work-job">
                            {workData.job}
                        </div>
                        <Grid container direction="row">
                            <Grid item xs={2} className="work-team">
                                <img alt={workData.team} src="./img/person-x13.png" className="team-icon" />
                                {workData.team}
                            </Grid>
                            <Grid item xs={8} className="work-date">
                                {workData.date}
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

ProjectListItem.propTypes = {
    workData: PropTypes.object.isRequired,
    span: PropTypes.number.isRequired,
    onClick: PropTypes.func
};

export default ProjectListItem;