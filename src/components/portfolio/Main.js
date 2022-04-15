import React, { Component } from "react"
import { Grid } from "@material-ui/core";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Constants from "./Constants";
import ProjectListPage from "./ProjectListPage";
import ProjectPage from "./ProjectPage";
import PageTab from "./PageTab";
import withWindowSize from '../withWindowSize';

import "../../css/Portfolio.css";

const GridOffset = (props) => { return <Grid item></Grid>; }

const about = (<div>
    <div className="subheader-text">game developer, game programmer</div>
    <div className="about-text">
        <p>
            Hello! I am a game developer/programmer from Taiwan. I have a bachelor's degree in <span className="about-text-h">Computer Science</span> 
            <br />Currently studying <span className="about-text-h">B.A. Digital Games</span> in Cologne Game Lab, Germany
        </p>
        <p>
            My main interests are <span className="about-text-h">gameplay programming</span> and making <span className="about-text-h">tools</span> to improve the development process for my team,
            <br />Besides that, I also enjoy creating <span className="about-text-h">juicy visual feedbacks & procedural animations</span>
        </p>
        <p>
            I specialize in Unity and have been making games with it for more than <span className="about-text-h">5 years</span>, 
            <br />I have experience in shipping games on <span className="about-text-h">Steam</span> + porting games to <span className="about-text-h">Nintendo Switch</span>
            <br />And I gained some experience in <span className="about-text-h">Xbox</span> development while working as a programming intern at <span className="about-text-h">Codeglue</span>.
        </p>
        
        You can check out my resume <a href="./download/TaDavidYu_GameProgrammer_CV.pdf">here</a>

        <div>--</div>
        <span className="following-text">Following are some of my games & tools & artworks <br />(roughly in order of completeness)</span>
    </div>
</div>);

class Main extends Component {

    constructor(props) {
        super(props);
        
        this.handleOnClickLongTermPageTab = this.handleOnClickLongTermPageTab.bind(this);
        this.handleOnClickExperimentalPageTab = this.handleOnClickExperimentalPageTab.bind(this);
        this.handleOnClickMiscPageTab = this.handleOnClickMiscPageTab.bind(this);
        this.handleOnClickHomeButton = this.handleOnClickHomeButton.bind(this);
        this.handleOnClickOnWorkListItem = this.handleOnClickOnWorkListItem.bind(this);

        const initialPageType = Constants.PageType.ProjectList;
        const initialListName = Constants.ProjectCategory.LongTerm;
        this.state = { 
            currPageType: initialPageType,
            currListName: initialListName,
            currWorkData: ""
        };
    }

    handleOnClickLongTermPageTab()
    {
        this.setState(
            {
                currPageType: Constants.PageType.ProjectList, 
                currListName: Constants.ProjectCategory.LongTerm
            }
        );
    }

    handleOnClickExperimentalPageTab()
    {
        this.setState(
            {
                currPageType: Constants.PageType.ProjectList, 
                currListName: Constants.ProjectCategory.Experimental
            }
        );
    }

    handleOnClickMiscPageTab()
    {
        this.setState(
            {
                currPageType: Constants.PageType.ProjectList, 
                currListName: Constants.ProjectCategory.Art
            }
        );
    }

    handleOnClickHomeButton()
    {
        this.setState(
            {
                currPageType: Constants.PageType.ProjectList
            }
        );
    }

    handleOnClickOnWorkListItem(workData)
    {
        this.setState(
            {
                currPageType: Constants.PageType.Project,
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
                            <div className="center-align">
                                {about}
                            </div>
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
                                {(currPageType === Constants.PageType.ProjectList) &&
                                    <div>
                                        <PageTab tabName={Constants.ProjectCategory.LongTerm} imgName="game" isActive={currListName === Constants.ProjectCategory.LongTerm} onClick={this.handleOnClickLongTermPageTab} />
                                        <PageTab tabName={Constants.ProjectCategory.Experimental} imgName="tool" isActive={currListName === Constants.ProjectCategory.Experimental} onClick={this.handleOnClickExperimentalPageTab} />
                                        <PageTab tabName={Constants.ProjectCategory.Art} imgName="art" isActive={currListName === Constants.ProjectCategory.Art} onClick={this.handleOnClickMiscPageTab} />
                                    </div>
                                }
                                {currPageType === Constants.PageType.Project &&
                                    <div>
                                        <PageTab tabName={Constants.PageType.ProjectList} imgName="home" isActive={false} onClick={this.handleOnClickHomeButton} />
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
                                {currPageType === Constants.PageType.ProjectList && <ProjectListPage currListName={currListName} onClickOnListItem={this.handleOnClickOnWorkListItem}/>}
                                {currPageType === Constants.PageType.Project && <ProjectPage currWorkData={currWorkData}/>}
                            </div>
                        </CSSTransition>
                    </TransitionGroup>

                </div>
                <footer>
                    website designed & created by Ta David Yu ~ <span/>
                    <a className="footer-link" href="https://github.com/ta-david-yu/about-me">view source</a>
                    
                    <br/>
                    
                    fonts made by <span/>
                    <a className="footer-link" href="https://managore.itch.io/">Daniel Linssen</a>, social icons made by <span/>
                    <a className="footer-link" href="https://kronbits.itch.io/matriax-free-assets">Davit Masia</a>
                </footer>
            </div>
        );
    }
}

export default withWindowSize(Main);