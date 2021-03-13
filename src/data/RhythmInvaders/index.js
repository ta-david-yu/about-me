import React from 'react';
import Markdown from 'react-markdown';

export default {
medias: [
    {
        "type": "video",
        "src": "https://youtu.be/SpQ-0IjUEv0",
    },
    {
        "type": "image",
        "src": "./img/work/rhythm-invaders-00.png",
    },
],

linksInfo:
<div>
    <a href="https://functionoverflu.itch.io/rhythem-invaders"><img alt="itch-icon" src="./img/itchio-x26.png" className="icon-26" /></a>
</div>
,

information:
<div style={{textAlign: 'center'}}>
    <Markdown children={`
Factsheet  

| | Information |
| --------- | ------- |
| Status | Prototype |
| Platforms | Windows PC |
| Genre | Rhythm action |
| Made with | Unity |
| Team | Ta David Yu |

`}/>
</div>,

description: 
<div style={{textAlign: 'center'}}>
    <div style={{fontWeight: 'bold'}}>
        <div>About Rhythm Invaders</div>
    </div>
    <div>(UNDER CONSTRUCTION RIP)(UNDER CONSTRUCTION RIP)(UNDER CONSTRUCTION RIP)</div>
    <div>--</div>
    <div>Music from <a href="https://maoudamashii.jokersounds.com/">魔王魂</a></div>
</div>,
}