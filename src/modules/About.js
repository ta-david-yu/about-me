import React, { Component } from "react";
 
class About extends Component {

  componentDidMount() {
    document.title = "TaDavidYu | About";
  }

  render() {
    return (
      <div>
        <div>My name is Ta Yu. You can call me David Yu.</div>
        <div>I am a game developer and a programmer.</div>
        <div>I am a game developer and a programmer.</div>
        <div>I am a game developer and a programmer.</div>
      </div>
    );
  }
}
 
export default About;