import React, { Component } from "react";
 
class Contact extends Component {

  componentDidMount() {
    document.title = "TaDavidYu | Contact";
  }

  render() {
    return (
      <div>
        <h2>GOT QUESTIONS?</h2>
        <p>The easiest thing to do is post on
        our <a href="http://forum.kirupa.com">forums</a>.
        </p>
      </div>
    );
  }
}
 
export default Contact;