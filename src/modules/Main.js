import React, { Component } from "react"
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Tabs, Tab, MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

import '../css/Main.css';

const theme = createMuiTheme(
    {
        typography: {
            fontFamily: "m6x11",
            fontSize: 32
        }
    }
)

class Main extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <HashRouter>
                    <div>
                        <h1 className="header">
                            Ta David Yu
                        </h1>

                        <ul className="header">
                            <li><NavLink to="/">About</NavLink></li>
                            <li><NavLink to="/work">Work</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                        <Tabs>
                            <Tab label="About" component={NavLink} to="/"/>
                            <Tab label="Work" component={NavLink} to="/work"/>
                            <Tab label="Contact" component={NavLink} to="/contact"/>
                        </Tabs>
                        <div className="content">
                            <Route exact path="/" component={About} />
                            <Route path="/work" component={Work} />
                            <Route path="/contact" component={Contact} />
                        </div>
                    </div>
                </HashRouter>
            </MuiThemeProvider>
        );
    }
}

export default Main;