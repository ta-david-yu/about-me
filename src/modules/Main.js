import React, { Component } from "react"
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Grid, Paper, Button } from "@material-ui/core";

import '../css/Main.css';

import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

const contentList = [
    { 
        "Component": About, 
        "Link": "/",
        "LinkExact": true,
        "Header": "About" 
    },
    { 
        "Component": Work, 
        "Link": "/work",
        "LinkExact": false,
        "Header": "Work" 
    },
    { 
        "Component": Contact, 
        "Link": "/contact",
        "LinkExact": false,
        "Header": "Contact" 
    }
];

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
                            <Grid item xs={1}>
                                <Button id="btn-border-light" component={NavLink} to={obj.Link}>
                                    {obj.Header}
                                </Button>
                            </Grid>);
            tabRouteItems.push(<Route exact={obj.LinkExact} key={obj.Header} path={obj.Link} component={obj.Component} />);
        }

        return (
                 <HashRouter>
                    
                    <div>
                        <Grid 
                        container 
                        spacing={12}
                        direction="column"
                        justify="center"
                        alignItems="center">
                            <Grid item xs={12} className="header-padding">
                                <img src="./img/ta-david-yu-mascot-x64.png" className="pixel-art"/>
                            </Grid>
                            <Grid item xs={12}>
                                <div className="header-text">ta david yu</div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className="subheader-text">game developer, game programmer</div>
                            </Grid>
                        </Grid>
                        <Grid container spacing={36} direction="row" justify="center">
                            {tabListItems}
                        </Grid>
                        <Grid>
                            <div className="content" id="border-light">
                                {tabRouteItems}
                            </div>
                        </Grid>
                    </div>
                </HashRouter>
        );
    }
}

export default Main;