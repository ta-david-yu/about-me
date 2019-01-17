import React, { Component } from "react"
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Grid } from "@material-ui/core";

import '../css/Main.css';
import '../css/Button.css';

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

    componentWillMount() {
        this.generateItems();
    }

    handleOnClickTab(e) {
        this.state = { redirectTo: e.target.value };
    }

    generateItems() {
        this.tabListItems = [];
        this.tabRouteItems = [];

        for (let i = 0; i < contentList.length; i++)
        {
            const obj = contentList[i];

            this.tabListItems.push(
                <Grid item lg xs={12} className="panel-border round-g204-x33 menu">
                    <NavLink className="menu-bottom" exact={obj.LinkExact} to={obj.Link}>
                        {obj.Header}
                    </NavLink>
                </Grid>);

            this.tabRouteItems.push(
                <Route exact={obj.LinkExact} key={obj.Header} path={obj.Link} component={obj.Component} />);
        }
    }

    render() {
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
                            <Grid lg={6} md={12} sm={12} xs container direction="row" justify="center">
                                {this.tabListItems}
                            </Grid>
                            <Grid container direction="row" justify="center">
                                <Grid item lg={6} md={12} sm={12} xs className="panel-border square-g204-x33">
                                    <div className="content">
                                        {this.tabRouteItems}
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </HashRouter>
        );
    }
}

export default Main;