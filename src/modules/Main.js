import React, { Component } from "react"
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";

import '../css/Main.css';

import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

const contentList = [
    { 
        "Component": About, 
        "Link": "/",
        "LinkExact": true,
        "Header": "about" 
    },
    { 
        "Component": Work, 
        "Link": "/work",
        "LinkExact": false,
        "Header": "work" 
    },
    { 
        "Component": Contact, 
        "Link": "/blog",
        "LinkExact": false,
        "Header": "blog" 
    },
    { 
        "Component": Contact, 
        "Link": "/contact",
        "LinkExact": false,
        "Header": "contact" 
    }
];

const GridOffset = (props) => { return <Grid item></Grid>; }

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = { m_CurrentTabIndex: 0 };
    }

    handleOnClickTab(e) {
        this.state = { m_CurrentTabIndex: e.target.value };
    }

    render() {

        const tabListItems = [];
        const tabRouteItems = [];

        for (let i = 0; i < contentList.length; i++)
        {
            const obj = contentList[i];
            tabListItems.push(
                <Grid item xs={12 / contentList.length} className="border-round-grey-x33 menu">
                    <NavLink className="menu-bottom" exact={obj.LinkExact} to={obj.Link}>
                        {obj.Header}
                    </NavLink>
                </Grid>);
            tabRouteItems.push(<Route exact={obj.LinkExact} key={obj.Header} path={obj.Link} component={obj.Component} />);
        }

        return (
                 <HashRouter>
                    <div className="background">
                        <Grid 
                        container 
                        spacing={8}
                        direction="column"
                        justify="center"
                        alignItems="center">
                            <GridOffset/><GridOffset/><GridOffset/><GridOffset/>
                            <Grid item>
                                <img src="./img/ta-david-yu-mascot-x64.png" className="logo"/>
                            </Grid>
                            <Grid item>
                                <div className="header-text">ta david yu</div>
                            </Grid>
                            <Grid item>
                                <div className="subheader-text">game developer, game programmer</div>
                            </Grid>
                            <Grid xs={4} container direction="row" justify="center">
                                {tabListItems}
                            </Grid>
                        </Grid>

                        
                        <Grid container direction="row" justify="center">
                            <Grid item xs={7} className="border-block-grey-x33">
                                <div className="content">
                                    {tabRouteItems}
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </HashRouter>
        );
    }
}

export default Main;