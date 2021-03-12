import React from 'react';
import Markdown from 'react-markdown';
import Collapsible from 'react-collapsible';

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

information:
<div>
    <div style={{textAlign: 'center'}}>
        <div>
            <a href="https://functionoverflu.itch.io/rhythem-invaders"><img alt="itch-icon" src="./img/itchio-x26.png" className="icon-26" /></a>
        </div>
        <div>(UNDER CONSTRUCTION RIP)</div>
    </div>
    
    <div style={{textAlign: 'center', fontSize: '16px'}}>
        <div>--</div>
        <div>Music from <a href="https://maoudamashii.jokersounds.com/">魔王魂</a></div>
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
| Status | Prototype |
| Platforms | Windows PC |
| Genre | Rhythm action |
| Made with | Unity |
| Team | Ta David Yu |

`}/>
        </Collapsible>
    </div>
</div>,

description: 
``,
}