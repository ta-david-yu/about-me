import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import ToggleButton from "./Button";
 
const works = [
  {
    "Title": "Gerritory",
    "Description": "Lead Designer, Programmer, Visual Design"
  },
  {
    "Title": "Test",
    "Description": "Description"
  },
  {
    "Title": "Test",
    "Description": "Description"
  },
  {
    "Title": "Test",
    "Description": "Description"
  }
];

class Work extends Component {

  componentDidMount() {
    document.title = "TaDavidYu | Work";
  }

  componentWillMount() {
    this.generateTable();
  }

  generateTable() {
    this.works = works.map(
      (work) => {
          return(
          <Grid item lg={4} md={6} xs={12} className="box-white">
            <Grid container direction="column">
              {work.Title} + {work.Description}
            </Grid>
          </Grid>
        );
      }
    );
  }

  render() {
    return (
      <div>
        <Grid container direction="row" spacing={16} justify="flex-start">
          {this.works}
        </Grid>
        <div>MY WORKS</div>
        <div>Following are some of the games I made:  D</div>
        <ul>
          <li>Gerritory</li>
          <li>Lead Designer and Programmer, Visual Feedback Design</li>
          <li>EasingSystem: something simliar to DOTween, let users play easing animation easily (put a gif to show it)</li>
          <li>LayeredAudioSystem: sort audio into layers so player can adjust volume for different layers (ex. sound effect, music)</li>
          <li>CollectablesEditor: make use of Unity Editor API to create a Custom Editor for editing in game collectables</li>
          <li>GenericFiniteStateMachine: base class for various systems that have complex state transitions</li>
          <li>SceneLoadingSystem: besides Unity built-in scene management, add a task manager that can handle tasks assigned from other system during scene loading (ex. procedurally generating level, syncing level across internet)</li>
          <li>Some special effects using shader</li>

          <li>Oh! By the way, I made this trailer using Adobe Premiere</li>
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