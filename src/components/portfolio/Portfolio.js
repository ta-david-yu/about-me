import React, { Component } from "react"
import { Grid } from "@material-ui/core";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import ListPage from "./ListPage";
import WorkPage from "./WorkPage";
import PageTab from "./PageTab";
import withWindowSize from '../withWindowSize';

import "../../css/Portfolio.css";

const GridOffset = (props) => { return <Grid item></Grid>; }

const about = (<div>
    <div className="subheader-text">game developer, game programmer</div>
    <div className="about-text">
        <p>
            <span className="following-text">
                Hello! I am from Taiwan. I have a bachelor's degree in Computer Science (NCTU) 
                <br />Currently studying B.A. Digital Games in Cologne Game Lab
            </span>
        </p>
        <p>
            <span className="following-text">
                I've been using Unity3D to make games for over 4 years, 
                <br />and have experience in shipping games on Steam + porting games to Nintendo Switch
            </span>
        </p>
        <p>
            <span className="following-text">Following are some of my games & tools & artworks <br />(roughly in order of completeness)</span>
        </p>
    </div>
</div>);

class Portoflio extends Component {

    constructor(props) {
        super(props);
        
        this.changePageType = this.changePageType.bind(this);
        this.changeListName = this.changeListName.bind(this);
        this.handleOnClickOnWorkListItem = this.handleOnClickOnWorkListItem.bind(this);

        const initialPageType = "list";
        const initialListName = "game";
        this.state = { 
            currPageType: initialPageType,
            currListName: initialListName,
            currWorkData: ""
        };
    }

    changePageType(pageType)
    {
        this.setState(
            {
                currPageType: pageType
            }
        );
    }

    changeListName(listName)
    {
        this.setState(
            {
                currListName: listName
            }
        );
    }

    handleOnClickOnWorkListItem(workData)
    {
        this.setState(
            {
                currPageType: "work",
                currWorkData: workData
            }
        );
    }

    render() {
        const currPageType = this.state.currPageType;
        const currListName = this.state.currListName;
        const currWorkData = this.state.currWorkData;

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
                            <a href="https://github.com/ta-david-yu"><img alt="github" src="./img/github-x26.png" className="icon-26"/></a>
                            <a href="https://www.linkedin.com/in/ta-david-yu/"><img alt="linkedin" src="./img/linkedin-x26.png" className="icon-26"/></a>
                            <a href="mailto: ta.yu.gamedev@gmail.com"><img alt="email" src="./img/gmail-x26.png" className="icon-26"/></a>
                        </Grid>
                        <Grid item lg={6} md={12} sm={12} xs>
                            <div className="center-align">{about}</div>
                        </Grid>
                    </Grid>
                </div>
                <div className="bot-content">
                    {this.props.windowWidth < 720 && <div className="device-warning">** Browsing website on desktop device is recommended. **</div> }
                    
                    <TransitionGroup>
                        <CSSTransition
                        key={currPageType}
                        in={true}
                        appear={true}
                        timeout={{
                            appear: 600,
                            enter: 300,
                            exit: 0
                        }}
                        classNames="page-tab-transition">
                            <div className="center-align">
                                {currPageType === "list" &&
                                    <div>
                                        <PageTab tabName="game" imgName="game" isActive={currListName === "game"} onClick={this.changeListName} />
                                        <PageTab tabName="tool" imgName="tool" isActive={currListName === "tool"} onClick={this.changeListName} />
                                        <PageTab tabName="art" imgName="art" isActive={currListName === "art"} onClick={this.changeListName} />
                                    </div>
                                }
                                {currPageType === "work" &&
                                    <div>
                                        <PageTab tabName="list" imgName="home" isActive={false} onClick={this.changePageType} />
                                    </div>
                                }
                            </div>
                        </CSSTransition>
                    </TransitionGroup>

                    <TransitionGroup>
                        <CSSTransition
                        key={currPageType + currListName}
                        appear={true}
                        timeout={{
                            enter: 300,
                            exit: 0
                        }}
                        classNames={currPageType + "-page-transition"}>
                            <div>
                                {currPageType === "list" && <ListPage currListName={currListName} onClickOnListItem={this.handleOnClickOnWorkListItem}/>}
                                {currPageType === "work" && <WorkPage currWorkData={currWorkData}/>}
                            </div>
                        </CSSTransition>
                    </TransitionGroup>

                </div>
                <footer>website designed & created by Ta David Yu ~ <span/>
                    <a className="footer-link" href="https://github.com/ta-david-yu/about-me"> view source</a>
                </footer>
                <footer>fonts made by <span/>
                    <a className="footer-link" href="https://managore.itch.io/">Daniel Linssen</a>, social icons made by <span/>
                    <a className="footer-link" href="https://kronbits.itch.io/matriax-free-assets">Davit Masia</a>
                </footer>
            </div>
        );
    }
}

export default withWindowSize(Portoflio);