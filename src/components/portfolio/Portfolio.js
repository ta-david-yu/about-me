import React, { Component } from "react"
import { Grid } from "@material-ui/core";
import { CSSTransition } from "react-transition-group";

import Page from "./Page";
import PageTab from "./PageTab";

import "../../css/Portfolio.css";

const GridOffset = (props) => { return <Grid item></Grid>; }

const about = (<div>
    <div className="subheader-text">game developer, game programmer</div>
    <div className="about-text">
        <p>
            Currently working on <a href="https://partygoosestudio.wixsite.com/gerritorythegame">Gerritory</a>, a multiplayer party game.
            <br />
            Following are some of my works
        </p>
    </div>
</div>);

class Portoflio extends Component {

    constructor(props) {
        super(props);
        this.changePage = this.changePage.bind(this);

        const initialPage = "game";
        this.state = { currPage: initialPage };
    }

    changePage(pageName)
    {
        this.setState(
            {
                currPage: pageName
            }
        );
    }

    render() {
        const currPage = this.state.currPage;

        return (
            <div>
                <div className="top-content">
                    <Grid 
                    container 
                    spacing={8}
                    direction="column"
                    justify="center"
                    alignItems="center">
                        <GridOffset/><GridOffset/><GridOffset/><GridOffset/>
                        <Grid item xs={12}>
                            <img alt="ta-david-yu" src="./img/ta-david-yu-mascot-x64.png" className="logo"/>
                        </Grid>
                        <Grid item xs={12}>
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
                    <CSSTransition
                    in={true}
                    appear={true}
                    timeout={600}
                    classNames="page-tab-transition">
                        <div className="center-align">
                            <PageTab pageName="game" isActive={currPage === "game"} onClick={this.changePage} />
                            <PageTab pageName="tool" isActive={currPage === "tool"} onClick={this.changePage} />
                        </div>
                    </CSSTransition>
                    <Page currPage={currPage}/>
                </div>
            </div>
        );
    }
}

export default Portoflio;