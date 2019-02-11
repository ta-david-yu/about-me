import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Grid } from "@material-ui/core";

import '../css/Portfolio.css';

class WorkPanel extends Component {

    constructor(props) {
        super(props);

        this.handleOnPointerEnter = this.handleOnPointerEnter.bind(this);
        this.handleOnPointerLeave = this.handleOnPointerLeave.bind(this);

        this.state = {
            isHovered : false,
        }
    }

    handleOnPointerEnter(e) {
        this.setState({isHovered : true})
    }

    handleOnPointerLeave(e) {
        this.setState({isHovered : false})
    }

    render() {
        const work = this.props.information;
        const hasGif = (work.gif !== "");
        const imgSrc = work.img;
        const gifSrc = hasGif? work.gif : work.img;

        return (
            <Grid item lg={3} md={4} sm={4} xs={12}>
                <Grid container direction="column" alignItems="center">
                    <div className="work-box" onPointerEnter={this.handleOnPointerEnter} onPointerLeave={this.handleOnPointerLeave}>
                        <Grid item className="work-title">
                            <div className="work-img-container">
                                <img alt={work.title} src={imgSrc} className="work-img" />
                                <img alt={work.title} src={gifSrc} className="work-gif" />
                                {(hasGif) && <div className="work-gif-note">GIF</div>}
                            </div>
                        </Grid>
                        <Grid item className="work-title">
                            {work.title}
                        </Grid>
                        <Grid item className="work-job">
                            {work.job}
                        </Grid>
                        <Grid item className="work-description">
                            {work.description}
                        </Grid>
                        <Grid item className="work-team">
                            <img alt={work.team} src="./img/person-x13.png" className="team-icon" />
                            {work.team}
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

WorkPanel.propTypes = {
    information: PropTypes.object.isRequired,
};

export default WorkPanel;