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

const experiences = [
  {
    "Title": "Game Programmer Summer Intern",
    "Company": "Akatsuki Inc.",
    "Duration": "2017.8-2017.9",
    "Link": "https://aktsk.com.tw/intern/"
  },
  {
    "Title": "Test",
    "Company": "Akatsuki Inc.",
    "Duration": "2017.8-2017.9",
    "Link": "https://aktsk.com.tw/intern/"
  }
];

const skills = [
  {
    "Name": "C/C++",
    "Description": "Good",
    "Type": "ProgrammingLanguage"
  },
  {
    "Name": "C#",
    "Description": "Good",
    "Type": "ProgrammingLanguage"
  },
  {
    "Name": "JavaScript",
    "Description": "Good",
    "Type": "ProgrammingLanguage"
  },
  {
    "Name": "PHP",
    "Description": "Good",
    "Type": "ProgrammingLanguage"
  },
  {
    "Name": "GLSL/UnityShader",
    "Description": "Good",
    "Type": "ProgrammingLanguage"
  },
  {
    "Name": "ReactJS",
    "Description": "Good",
    "Type": "Tools"
  },
  {
    "Name": "Unity3D",
    "Description": "Good",
    "Type": "Tools"
  },
  {
    "Name": "git",
    "Description": "Good",
    "Type": "Tools"
  },
  {
    "Name": "MySQL",
    "Description": "Good",
    "Type": "Tools"
  },
  {
    "Name": "VisualStudio",
    "Description": "Good",
    "Type": "Tools"
  },
  {
    "Name": "Chinese",
    "Description": "Good",
    "Type": "Language"
  },
  {
    "Name": "English",
    "Description": "Good",
    "Type": "Language"
  },
  {
    "Name": "Japanese",
    "Description": "Good",
    "Type": "Language"
  }
];

class About extends Component {

  componentDidMount() {
    document.title = "TaDavidYu | About";
  }

  componentWillMount() {
    this.generateTable();
  }

  generateTable() {
    this.educations = educations.map(
      (edu) => {
        return(
          <Grid item lg md sm xs className="content box-g255">
            <div className="main-text">
              <a href={edu.Link} target="_blank">
              <img alt="+" src="./img/link-x13.png" className="icon"/>
              </a> {edu.Degree} ({edu.Duration})
            </div>
            <div className="sub-text">
              GPA {edu.GPA}
            </div>
          </Grid>
        );
      }
    );

    this.experiences = experiences.map(
      (exp) => {
        return(
          <Grid item lg md sm xs className="content box-g255">
            <div className="main-text">
              <a href={exp.Link} target="_blank">
              <img alt="+" src="./img/link-x13.png" className="icon"/>
              </a> {exp.Title} - {exp.Company} ({exp.Duration})
            </div>
          </Grid>
        );
      }
    );

    this.skills = skills.map(
      (skill) => {
        return(
          <Grid item>
            <div className="main-text box-g255">
              {skill.Name}
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
          {this.experiences}
        </Grid>

        <GridOffset></GridOffset>

        <Grid container direction="column" lg={8} spacing={8}>
          <Grid item lg md sm xs className="content-header">
            skills
          </Grid>
          <Grid container direction="row" justify="center">
            {this.skills}
          </Grid>
        </Grid>
        
      </Grid>
    );
  }
}
 
export default About;