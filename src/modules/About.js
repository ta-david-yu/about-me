import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import '../css/About.css';

const GridOffset = (props) => { return <Grid item></Grid>; }

const educations = [
  { 
      "Degree": "National Chiao Tung University - B.S. in Computer Science",
      "Duration": "2014-2018",
      "GPA": "3.97/4.3",
      "Link": "https://www.cs.nctu.edu.tw/"
  }
];

class About extends Component {

  componentDidMount() {
    document.title = "TaDavidYu | About";
  }

  componentWillMount() {
    this.generateEducation();
  }

  generateEducation() {
    this.educations = educations.map(
      (edu) => {
        return(
          <Grid item lg md sm xs className="content box-g255">
            <div className="degree">
              <a href={edu.Link} target="_blank">
              <img alt="+" src="./img/link-x13.png" className="icon"/>
              </a> {edu.Degree} ({edu.Duration})
            </div>
            <div className="gpa">
              GPA {edu.GPA}
            </div>
          </Grid>
        );
      }
    );
  }

  render() {
    return (
      <Grid container 
      direction="column" 
      spacing={24}
      justify="center"
      alignItems="center">
        
        <Grid container direction="column" lg={8} spacing={8}>
          <Grid item lg md sm xs className="content-header">
            I make games
          </Grid>
          <Grid item lg md sm xs className="content">
            <div>My name is Ta Yu. You can call me David Yu.</div>
            <div> I am a game developer from Taiwan.</div>
            <p>Currently working on Gerritory, a multiplayer party game.</p>
          </Grid>
        </Grid>

        <Grid container direction="column" lg={8} spacing={8}>
          <Grid item lg md sm xs className="content-header">
            education
          </Grid>
          {this.educations}
        </Grid>

        <GridOffset></GridOffset>

        <Grid container direction="column" lg={8} spacing={8}>
          <Grid item lg md sm xs className="content-header">
            experience
          </Grid>
          <Grid item lg md sm xs className="content">
          </Grid>
        </Grid>

      </Grid>
    );
  }
}
 
export default About;