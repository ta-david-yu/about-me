import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import '../css/About.css';

const GridOffset = (props) => { return <Grid item></Grid>; }

const skillTypeImgTable = {
  "ProgrammingLanguage": "box-blue",
  "Tools": "box-yellow",
  "Language": "box-red",
}

const about = <div>
    <div>My name is Ta Yu. You can call me David Yu.</div>
    <div>I am a game developer from Taiwan.</div>
    <p>
      I started to make games in high school using RPG maker. 
      After getting into college, I joined a game design club and began to use Unity3D as my primary game engine.
    </p>
    <p>Currently working on <a href="https://partygoosestudio.wixsite.com/gerritorythegame" target="_blank">Gerritory</a>, a multiplayer party game.</p>
  </div>;

const educations = [
  { 
      "Degree": "National Chiao Tung University - B.S. in Computer Science",
      "Duration": "2014.9-2018.6",
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
  }
];

const skills = [
  {
    "Name": "C/C++",
    "Description": "The mostly used language for non-Unity project",
    "Type": "ProgrammingLanguage"
  },
  {
    "Name": "C#",
    "Description": "As Unity scripting language",
    "Type": "ProgrammingLanguage"
  },
  {
    "Name": "GLSL/UnityShader",
    "Description": "With good understanding of Computer Graphics",
    "Type": "ProgrammingLanguage"
  },
  {
    "Name": "JavaScript",
    "Description": "So I made this webpage",
    "Type": "ProgrammingLanguage"
  },
  {
    "Name": "PHP",
    "Description": "Used in web backend, seldom used",
    "Type": "ProgrammingLanguage"
  },
  {
    "Name": "ReactJS",
    "Description": "So I made this webpage",
    "Type": "Tools"
  },
  {
    "Name": "Unity3D",
    "Description": "With 4+ years of development experience",
    "Type": "Tools"
  },
  {
    "Name": "git",
    "Description": "Yep, it's essential",
    "Type": "Tools"
  },
  {
    "Name": "SocketProgramming",
    "Description": "Have built a http server with C++ on Linux",
    "Type": "Tools"
  },
  {
    "Name": "VisualStudio",
    "Description": "The mostly used IDE for C++ & C#",
    "Type": "Tools"
  },
  {
    "Name": "SQL",
    "Description": "Usable",
    "Type": "Tools"
  },
  {
    "Name": "Chinese",
    "Description": "Native language",
    "Type": "Language"
  },
  {
    "Name": "English",
    "Description": "High-intermediate",
    "Type": "Language"
  },
  {
    "Name": "Japanese",
    "Description": "Elementary",
    "Type": "Language"
  },
  {
    "Name": "German",
    "Description": "Newborn baby",
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
          <a href={edu.Link} target="_blank">
            <Grid item lg md sm xs className="content box-white">
              <div className="main-text">
                <img alt="+" src="./img/link-x13.png" className="icon"/> {edu.Degree} ({edu.Duration})
              </div>
              <div className="sub-text">
                GPA {edu.GPA}
              </div>
            </Grid>
          </a>
        );
      }
    );

    this.experiences = experiences.map(
      (exp) => {
        return(
          <a href={exp.Link} target="_blank">
            <Grid item lg md sm xs className="content box-white">
              <div className="main-text">
                <img alt="+" src="./img/link-x13.png" className="icon"/> {exp.Title} - {exp.Company} ({exp.Duration})
              </div>
            </Grid>
          </a>
        );
      }
    );

    this.skills = skills.map(
      (skill) => {
        return(
          <Grid item>
            <div className={"main-text tooltip ".concat(skillTypeImgTable[skill.Type])}>
              {skill.Name} <span className="tooltip-text tooltip-content box-tooltip">{skill.Description}</span>
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
            {about}
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