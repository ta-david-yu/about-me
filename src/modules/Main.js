import React, { Component } from "react"
import { Route, NavLink, HashRouter } from "react-router-dom";

import '../css/Main.css';

import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

class Main extends Component {
    render() {
        return (
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
                    <div className="content">
                        <Route exact path="/" component={About} />
                        <Route path="/work" component={Work} />
                        <Route path="/contact" component={Contact} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;