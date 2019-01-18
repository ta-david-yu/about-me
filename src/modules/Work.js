import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import ToggleButton from "./Button";
 
class Work extends Component {

  componentDidMount() {
    document.title = "TaDavidYu | Work";
  }

  render() {
    return (
      <div>
        <div>MY WORKS</div>
        <div>Following are some of the games I made:</div>
        <ul>
          <li>Gerritory</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ul>
        <Grid 
          container 
          spacing={8}
          direction="row"
          justify="center"
          alignItems="center"
          className>
            <Grid item xs>
              <ToggleButton text="PREV" className="round-g255-btn" /> 
            </Grid>
            <Grid item xs>
              <ToggleButton text="NEXT" className="round-g255-btn" /> 
            </Grid>
            <Grid item xs>
              <ToggleButton text="NEXT" className="round-g255-btn" /> 
            </Grid>
            <Grid item xs>
              <ToggleButton text="NEXT" className="round-g255-btn" /> 
            </Grid>
            <Grid item xs>
              <ToggleButton text="NEXSDSDT" className="round-g255-btn" /> 
            </Grid>

        </Grid>
      </div>
    );
  }
}
 
export default Work;