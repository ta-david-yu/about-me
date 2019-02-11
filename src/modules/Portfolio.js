import React, { Component } from "react"
import { Grid } from "@material-ui/core";
import WorkPanel from "./WorkPanel";

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
        "img": "./img/gerritory-preview.png",
        "gif": "./img/gerritory-preview.gif",
        "description": "2017.1 - present",
        "job": "Designer, Programmer, Visual Design",
        "modal": "<div></div>"
    },
    {
        "title": "Eagle Simulator & Rolling Rocker",
        "img": "./img/gerritory-preview.png",
        "gif": "",
        "description": "2017.3 - 2017.4",
        "job": "Designer, Programmer",
        "modal": "<div></div>"
    },
    {
        "title": "Chain Destroyer",
        "img": "./img/gerritory-preview.png",
        "gif": "",
        "description": "2015.1 - 2015.1",
        "job": "UI Programmer",
        "modal": "<div></div>"
    },
    {
        "title": "Boomeranger",
        "img": "./img/gerritory-preview.png",
        "gif": "",
        "description": "2016.3 - 2016.6",
        "job": "Designer, Programmer",
        "modal": "<div></div>"
    },
    {
        "title": "SurvivorQ",
        "img": "./img/gerritory-preview.png",
        "gif": "",
        "description": "2016.1 - 2016.1",
        "job": "Designer, Programmer",
        "modal": "<div></div>"
    },
    {
        "title": "Hee X Hoo",
        "img": "./img/gerritory-preview.png",
        "gif": "",
        "description": "GGJ 2018",
        "job": "Level Designer, Programmer",
        "modal": "<div></div>"
    },
    {
        "title": "Nothing Last Forever",
        "img": "./img/gerritory-preview.png",
        "gif": "",
        "description": "GGJ 2016",
        "job": "Programmer",
        "modal": "<div></div>"
    },

    {
        "title": "DY Engine",
        "img": "./img/gerritory-preview.png",
        "gif": "",
        "description": "2017.9 - present",
        "job": "Programmer",
        "modal": "<div></div>"
    },
    {
        "title": "Many-Worlds Browsing for Control of Multibody Dynamics in Unity",
        "img": "./img/gerritory-preview.png",
        "gif": "",
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
        this.worksTable = works.map( (work) => {
            return <WorkPanel information={work}/>;
        });
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