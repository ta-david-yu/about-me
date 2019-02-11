import React, { Component } from "react"
import { Grid } from "@material-ui/core";

import '../css/Portfolio.css';

const GridOffset = (props) => { return <Grid item></Grid>; }

const about = (<div>
    <div className="subheader-text">game developer, game programmer</div>
    <p className="about-text">
        <div>Currently working on <a href="https://partygoosestudio.wixsite.com/gerritorythegame">Gerritory</a>, a multiplayer party game.</div>
        <div>Following are some of my works (roughly in order from best to worst)</div>
    </p>
</div>);

const works = [
    {
        "title": "Gerritory",
        "image": "./img/gerritory-gif-00.gif",
        "description": "2017.1 - present",
        "job": "Designer, Programmer, Visual Design",
        "modal": "<div></div>"
    },
    {
        "title": "Eagle Simulator & Rolling Rocker",
        "image": "./img/gerritory-gif-00.gif",
        "description": "2017.3 - 2017.4",
        "job": "Designer, Programmer",
        "modal": "<div></div>"
    },
    {
        "title": "Chain Destroyer",
        "image": "./img/gerritory-gif-00.gif",
        "description": "2015.1 - 2015.1",
        "job": "UI Programmer",
        "modal": "<div></div>"
    },
    {
        "title": "Boomeranger",
        "image": "./img/gerritory-gif-00.gif",
        "description": "2016.3 - 2016.6",
        "job": "Designer, Programmer",
        "modal": "<div></div>"
    },
    {
        "title": "SurvivorQ",
        "image": "./img/gerritory-gif-00.gif",
        "description": "2016.1 - 2016.1",
        "job": "Designer, Programmer",
        "modal": "<div></div>"
    },
    {
        "title": "Hee X Hoo",
        "image": "./img/gerritory-gif-00.gif",
        "description": "GGJ 2018",
        "job": "Level Designer, Programmer",
        "modal": "<div></div>"
    },
    {
        "title": "Nothing Last Forever",
        "image": "./img/gerritory-gif-00.gif",
        "description": "GGJ 2016",
        "job": "Programmer",
        "modal": "<div></div>"
    },

    {
        "title": "DY Engine",
        "image": "./img/gerritory-gif-00.gif",
        "description": "2017.9 - present",
        "job": "Programmer",
        "modal": "<div></div>"
    },
    {
        "title": "Many-Worlds Browsing for Control of Multibody Dynamics in Unity",
        "image": "./img/gerritory-gif-00.gif",
        "description": "2017.6 - 2018.6",
        "job": "Programmer",
        "modal": "<div></div>"
    },
];

class Portoflio extends Component {

    componentWillMount() {
        this.generateItems();
    }

    generateItems() {
        this.worksTable = [];
        
        for (let i = 0; i < works.length; i++)
        {
            const work = works[i];
            this.worksTable.push(
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
                </Grid>);
        }
    }

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
                    <Grid item lg={6} md={12} sm={12} xs>
                        <div className="center-align">{about}</div>
                    </Grid>
                    <Grid item lg={9} xs={12}>
                        <Grid 
                        container
                        spacing={16}
                        direction="row">
                            {this.worksTable}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Portoflio;