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
        const hasGif = !(work.gif === "");
        const imgSrc = (this.state.isHovered)? (hasGif)? work.gif : work.img : work.img;

        return (
            <Grid item lg={3} md={3} sm={4} xs={12}>
                <Grid container direction="column" alignItems="center">
                    <div className="work-box" onPointerEnter={this.handleOnPointerEnter} onPointerLeave={this.handleOnPointerLeave}>
                        <Grid item className="work-title">
                            <img alt="+" src={imgSrc} className="work-img"/>
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