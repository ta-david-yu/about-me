import React, { Component } from "react";
 
class About extends Component {

  componentDidMount() {
    document.title = "TaDavidYu | About";
  }

  render() {
    return (
      <div>
        <h2>Game Developer, Programmer</h2>
      </div>
    );
  }
}
 
export default About;