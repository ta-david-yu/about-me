import React, { Component } from "react"
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Grid, Row, Col, Media } from "react-bootstrap";

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
            tabListItems.push(<li key={obj.Header}><NavLink to={obj.Link}>{obj.Header}</NavLink></li>);
            tabRouteItems.push(<Route exact={obj.LinkExact} key={obj.Header} path={obj.Link} component={obj.Component} />);
        }
/*
        const tabListItems = contentList.map(
            (obj) => <li key={obj.Header}><NavLink to={obj.Link}>{obj.Header}</NavLink></li>
        );

        const tabRouteItems = contentList.map(
            (obj) => <Route exact={obj.LinkExact} key={obj.Header} path={obj.Link} component={obj.Component} />
        );
*/
        return (
                 <HashRouter>
                    <Grid>
                        <Row>
                            <img src="./img/ta-david-yu-mascot-x64.png" className="pixel-art logo-img"/>
                        </Row>

                        <Row>
                            <p className="title logo-text">ta david yu</p>
                        </Row>
                        <Row className="logo">
                            <p className="subheader">ta david yu</p>
                        </Row>
                        
                        <Row>
                            <ul className="header">
                                {tabListItems}
                            </ul>
                        </Row>

                        <Row>
                            <div className="content">
                                {tabRouteItems}
                            </div>
                        </Row>
                        
                    </Grid>
                </HashRouter>
        );
    }
}

export default Main;