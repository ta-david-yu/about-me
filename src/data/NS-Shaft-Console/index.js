import React from 'react';
import Markdown from 'react-markdown';
import Collapsible from 'react-collapsible';

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

information:
<div>
    <div style={{textAlign: 'center'}}>
        <div>
            <a href="https://functionoverflu.itch.io/ns-shaft-console"><img alt="itch-icon" src="./img/itchio-x26.png" className="icon-26" /></a>
        </div>
        <div>A recreation / demake of the famous arcade game - NS-Shaft.</div>
        <div>Originally made by Akihiko Kusanagi.</div>
        <div>(UNDER CONSTRUCTION RIP)</div>
    </div>
    
    <div style={{textAlign: 'center', fontSize: '16px'}}>
        <div>--</div>
        <div>Original game by <a href="https://www.nagi-p.com/v1/eng/">Nagi-P Software</a></div>
    </div>

    <span style={{margin: '50px'}} />
    <div style={{textAlign: 'left', fontSize: '16px'}}>
        <Collapsible 
        trigger="more information +" 
        triggerWhenOpen="more information -"
        transitionTime='100'
        transitionCloseTime='100'>
            <Markdown children={`

Factsheet  

| | Information |
| --------- | ------- |
| Status | Released |
| Platforms | Windows PC |
| Genre | ASCII endless platformer |
| Made with | C# |
| Team | Ta David Yu |

`}/>
        </Collapsible>
    </div>
</div>,

description: 
``,
}