import React from 'react';
import Markdown from 'react-markdown';

export default {
medias: [
    {
        "type": "video",
        "src": "https://youtu.be/lXxcVxRcWvw",
    },
    {
        "type": "image",
        "src": "./img/work/nsshaft-media-00.png",
        "comment": "2-player mode"
    },
    {
        "type": "image",
        "src": "./img/work/nsshaft-media-01.png",
        "comment": "title menu"
    },
    {
        "type": "image",
        "src": "./img/work/nsshaft-media-02.png",
        "comment": "game manual"
    },
],

linksInfo:
<div>
    <a href="https://functionoverflu.itch.io/ns-shaft-console"><img alt="itch-icon" src="./img/itchio-x26.png" className="icon-26" /></a>
</div>
,

information:
<div style={{textAlign: 'center'}}>
    <Markdown children={`
** Factsheet **

| | Information |
| --------- | ------- |
| Status | Released |
| Platforms | Windows PC |
| Genre | ASCII endless platformer |
| Made with | C# |
| Team | Ta David Yu |

`}/>
</div>,

description: 
<div style={{textAlign: 'center'}}>

    <div style={{fontWeight: 'bold'}}>
        <div>About NS-Shaft console</div>
    </div>

    <div>A recreation / demake of the famous arcade game - NS-Shaft.</div>
    <div>Originally made by Akihiko Kusanagi.</div>
    <div>(UNDER CONSTRUCTION RIP)</div>
    
    <span style={{margin: '50px'}} />
    <div>--</div>
    <div>Original game by <a href="https://www.nagi-p.com/v1/eng/">Nagi-P Software</a></div>
</div>,
}