import React, { Component } from "react"
import { Grid } from "@material-ui/core";

import '../css/Main.css';
import '../css/Button.css';

const GridOffset = (props) => { return <Grid item></Grid>; }

class Portoflio extends Component {
    render() {
        return (
            <div className="background">
                <Grid 
                container 
                spacing={8}
                direction="column"
                justify="center"
                alignItems="center">
                    <GridOffset/><GridOffset/><GridOffset/><GridOffset/>
                    <Grid item>
                        <img alt="Oops!" src="./img/ta-david-yu-mascot-x64.png" className="logo"/>
                    </Grid>
                    <Grid item>
                        <div className="header-text">ta david yu</div>
                    </Grid>
                    <Grid item>
                        <div className="subheader-text">game developer, game programmer</div>
                    </Grid>
                    <Grid lg={6} md={12} sm={12} xs container direction="row" justify="center">
                            {this.tabListItems}
                    </Grid>
                    <Grid container direction="row" justify="center">
                        <Grid item lg={6} md={12} sm={12} xs className="panel-border square-g204-x33">
                            <div className="panel-content">
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Portoflio;