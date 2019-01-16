import React, { Component } from "react";
 
class About extends Component {

  componentDidMount() {
    document.title = "TaDavidYu | About";
  }

  render() {
    return (
      <div>
        <h2>ABOUT ME</h2>
        <p>My name is Ta Yu. You can call me David Yu.</p>
        <p>I am a game developer and a programmer.</p>
 
        <p>Hope you have a good day!</p>
      </div>
    );
  }
}
 
export default About;