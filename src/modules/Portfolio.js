import React, { Component } from "react"
import { Grid } from "@material-ui/core";
import WorkPanel from "./WorkPanel";
import PageTab from "./PageTab";

import '../css/Portfolio.css';

const GridOffset = (props) => { return <Grid item></Grid>; }

const about = (<div>
    <div className="subheader-text">game developer, game programmer</div>
    <p className="about-text">
        <div>Currently working on <a href="https://partygoosestudio.wixsite.com/gerritorythegame">Gerritory</a>, a multiplayer party game.</div>
        <div>Following are some of my works</div>
    </p>
</div>);

const works = [
    {
        "type": "game",
        "title": "Gerritory",
        "img": "./img/gerritory-preview.png",
        "gif": "./img/gerritory-preview.gif",
        "description": "2017.1 - NOW",
        "job": "Designer, Programmer, Visual Design",
        "team": "4",
        "modal": "<div></div>"
    },
    {
        "type": "game",
        "title": "Eagle Simulator & Rolling Rocker",
        "img": "./img/gerritory-preview.png",
        "gif": "",
        "description": "2017.3 - 2017.4",
        "job": "Designer, Programmer",
        "team": "1",
        "modal": "<div></div>"
    },
    {
        "type": "game",
        "title": "Chain Destroyer",
        "img": "./img/gerritory-preview.png",
        "gif": "",
        "description": "2015.1 - 2015.1",
        "job": "UI Programmer",
        "team": "4",
        "modal": "<div></div>"
    },
    {
        "type": "game",
        "title": "SurvivorQ",
        "img": "./img/gerritory-preview.png",
        "gif": "",
        "description": "2016.1 - 2016.1",
        "job": "Designer, Programmer",
        "team": "3",
        "modal": "<div></div>"
    },
    {
        "type": "game",
        "title": "Boomeranger",
        "img": "./img/gerritory-preview.png",
        "gif": "",
        "description": "2016.3 - 2016.6",
        "job": "Designer, Programmer",
        "team": "3",
        "modal": "<div></div>"
    },
    {
        "type": "game",
        "title": "Hee X Hoo",
        "img": "./img/gerritory-preview.png",
        "gif": "",
        "description": "GGJ 2018",
        "job": "Level Designer, Programmer",
        "team": "5",
        "modal": "<div></div>"
    },
    {
        "type": "game",
        "title": "Nothing Last Forever",
        "img": "./img/gerritory-preview.png",
        "gif": "",
        "description": "GGJ 2016",
        "job": "Programmer",
        "team": "5",
        "modal": "<div></div>"
    },
    {
        "type": "tool",
        "title": "DY Engine",
        "img": "./img/gerritory-preview.png",
        "gif": "",
        "description": "2017.9 - present",
        "job": "Programmer",
        "team": "1",
        "modal": "<div></div>"
    },
    {
        "type": "tool",
        "title": "Many-Worlds Browsing for Control of Multibody Dynamics in Unity",
        "img": "./img/gerritory-preview.png",
        "gif": "",
        "description": "2017.6 - 2018.6",
        "job": "Programmer",
        "team": "2",
        "modal": "<div></div>"
    },
];

class Portoflio extends Component {

    constructor(props) {
        super(props);
        this.state = { currPage: "game"};
        this.changePage = this.changePage.bind(this);
    }

    componentWillMount() {
        this.generateItems();
    }

    changePage(pageName)
    {
        this.setState(
            {
                currPage: pageName
            }
        );
    }

    generateItems() {
        this.worksTable = works.map( (work) => {
            return <WorkPanel information={work}/>;
        });
    }

    render() {
        return (
            <div className="background">
                <div className="top-content">
                    <Grid 
                    container 
                    spacing={8}
                    direction="column"
                    justify="center"
                    alignItems="center">
                        <GridOffset/><GridOffset/><GridOffset/><GridOffset/>
                        <Grid item>
                            <img alt="ta-david-yu" src="./img/ta-david-yu-mascot-x64.png" className="logo"/>
                        </Grid>
                        <Grid item>
                            <div className="header-text">ta david yu</div>
                        </Grid>
                        <Grid item>
                            <a href="https://twitter.com/TaDavidYu"><img alt="twitter" src="./img/twitter-x26.png" className="icon-26"/></a>
                            <a href="https://www.facebook.com/david.yu.7739814"><img alt="facebook" src="./img/facebook-x26.png" className="icon-26"/></a>
                            <a href="https://github.com/ta-david-yu"><img alt="github" src="./img/github-x26.png" className="icon-26"/></a>
                        </Grid>
                        <Grid item lg={6} md={12} sm={12} xs>
                            <div className="center-align">{about}</div>
                        </Grid>
                    </Grid>
                </div>
                <div className="bot-content">
                    <Grid 
                    container
                    spacing={16}
                    direction="column"
                    justify="center"
                    alignItems="center">
                        <Grid item xs>
                            <PageTab pageName="game" isActive={this.state.currPage === "game"} onClick={this.changePage} />
                            <PageTab pageName="tool" isActive={this.state.currPage === "tool"} onClick={this.changePage} />

                            {this.state.currPage === "game"? <div className="page-title left show">games</div> : <div className="page-title left">games</div>}
                            {this.state.currPage === "tool"? <div className="page-title right show">tools</div> : <div className="page-title right">tools</div>}
                        </Grid>
                        <Grid item lg={6} md={12} sm={12} xs>
                            <Grid 
                            container
                            spacing={16}
                            direction="row">
                                {this.worksTable}
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Portoflio;