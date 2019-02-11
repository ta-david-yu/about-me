import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Grid } from "@material-ui/core";

import '../css/Portfolio.css';

class WorkPanel extends Component {
    
    render() {
        const work = this.props.information;
        return (
            <Grid item lg={3} md={3} sm={4} xs={12}>
                <Grid container direction="column" alignItems="center">
                    <div className="work-box">
                        <Grid item className="work-title">
                            <img alt="+" src={work.image} className="work-img"/>
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