import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Grid } from "@material-ui/core";

import '../../css/Portfolio.css';

class WorkPanel extends Component {

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
        this.props.onClick(this.props.information);
    }

    render() {
        const work = this.props.information;
        const boxClassName = "work-box box-other";

        const hasImg = (work.img !== "");
        const hasGif = (work.gif !== "");
        const imgSrc = work.img;
        const gifSrc = work.gif;
        
        const isHovered = this.state.isHovered;
        const gifClassName = "work-img-cover" + (isHovered? " hover" : "");

        const span = this.props.span;

        return (
            <Grid item lg={span} md={span} sm={span} xs={12}>
                <Grid container direction="column" alignItems="center">
                    <div className={boxClassName} 
                    onClick={this.handleOnClick} onPointerEnter={this.onPointerEnter} onPointerLeave={this.onPointerLeave}>
                        <div className="work-img-container">
                            {(hasImg)? <img alt={work.title} src={imgSrc} className={(hasGif)? gifClassName : "work-img"} /> : <div className="work-empty-img"><div className="work-empty-img-text">no preview image</div></div>}
                            {(hasGif)? <img alt={work.title} src={gifSrc} className="work-gif" /> : <div className="work-gif"></div>}
                            {hasGif && (isHovered? <div className="work-gif-note hover">GIF</div> : <div className="work-gif-note">GIF</div>)}
                        </div>
                        <div className="work-title">
                            {work.title}
                        </div>
                        <div className="work-job">
                            {work.job}
                        </div>
                        <Grid container direction="row">
                            <Grid item xs={3} className="work-team">
                                <img alt={work.team} src="./img/person-x13.png" className="team-icon" />
                                {work.team}
                            </Grid>
                            <Grid item xs={6} className="work-date">
                                {work.date}
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

WorkPanel.propTypes = {
    information: PropTypes.object.isRequired,
    span: PropTypes.number.isRequired,
    onClick: PropTypes.func
};

export default WorkPanel;