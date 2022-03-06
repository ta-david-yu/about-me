import React, { Component } from "react";
import PropTypes from 'prop-types';

var globalImgurEmbedScriptTagId = "globalImgurEmbedScriptTag";

class ImgurEmbed extends Component {

  render() {
    return (<div>
      {
        React.createElement('blockquote', {
          className: 'imgur-embed-pub',
          lang: 'en',
          'data-id': this.props.id,
          'data-context': true
          }
        )
      }
    </div>);
  }

  componentDidMount() {
    var newScriptTag = document.createElement('script');
    newScriptTag.id = globalImgurEmbedScriptTagId;
    newScriptTag.src = "//s.imgur.com/min/embed.js";
    newScriptTag.type = "text/javascript";
    newScriptTag.async = true;

    var bodyElement = document.querySelector('body');
    bodyElement.appendChild(newScriptTag);
  }
}

ImgurEmbed.propTypes = {
  id: PropTypes.string.isRequired
};


export default ImgurEmbed;