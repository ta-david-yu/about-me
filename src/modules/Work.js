import React, { Component } from "react";
 
class Work extends Component {

  componentDidMount() {
    document.title = "TaDavidYu | Work";
  }

  render() {
    return (
      <div>
        <h2>MY WORKS</h2>
        <p>Following are some of the games I made:</p>
        <ul>
          <li>Gerritory</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
          <li>Id porttitor</li>
          <li>Id porttitor</li>
          <li>Id porttitor</li>
          <li>Id porttitor</li>
        </ul>
      </div>
    );
  }
}
 
export default Work;