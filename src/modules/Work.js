import React, { Component } from "react";
 
class Work extends Component {

  componentDidMount() {
    document.title = "TaDavidYu | Work";
  }

  render() {
    return (
      <div>
        <h2>My Works</h2>
        <ol>
          <li>Gerritory</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
      </div>
    );
  }
}
 
export default Work;