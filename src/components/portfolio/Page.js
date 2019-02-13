import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { CSSTransition } from "react-transition-group";

import WorkPanel from "./WorkPanel";
import PageTab from "./PageTab";

import works from "../../data/works"

import '../../css/Portfolio.css';

class Page extends Component {

    constructor(props) {
        super(props);
        this.changePage = this.changePage.bind(this);

        const initialPage = "game";

        const worksTable = this.generateWorksItem(initialPage);
        this.state = { currPage: initialPage, worksTable: worksTable };
    }

    changePage(pageName)
    {
        const worksTable = this.generateWorksItem(pageName);
        this.setState(
            {
                currPage: pageName,
                worksTable: worksTable
            }
        );
    }

    generateWorksItem(pageName) {
        const worksTable = [];

        works.forEach((work) => {
            if (work.type === pageName) {
                worksTable.push(work);
            }
        });
        
        return worksTable;
    }

    render() {
        const currPage = this.state.currPage;
        const worksTable = this.state.worksTable;

        const itemSpan = (worksTable.length >= 3)? 4 : 6;
        const worksItem = worksTable.map((work) => {
            return <WorkPanel key={work.title} information={work} span={itemSpan} />
        });

        return (
            <Grid 
            container
            spacing={16}
            direction="column"
            justify="center"
            alignItems="center">
                <Grid item xs={12}>

                    <CSSTransition
                    in={true}
                    appear={true}
                    timeout={600}
                    classNames="page-tab-transition">
                        <div>
                            <PageTab pageName="game" isActive={currPage === "game"} onClick={this.changePage} />
                            <PageTab pageName="tool" isActive={currPage === "tool"} onClick={this.changePage} />
                        </div>
                    </CSSTransition>
                </Grid>
                <Grid item lg={6} md={10} sm={12} xs={12}>
                    <CSSTransition
                    in={true}
                    appear={true}
                    timeout={600}
                    classNames="page-transition">
                        <div>
                            {currPage === "game"? <div className="page-title left show">games</div> : <div className="page-title left">games</div>}
                            {currPage === "tool"? <div className="page-title right show">tools</div> : <div className="page-title right">tools</div>}
                            <Grid 
                            container
                            spacing={16}
                            direction="row">
                                {worksItem}
                            </Grid>
                        </div>
                    </CSSTransition>

                </Grid>
            </Grid>
        );
    }
}

export default Page;