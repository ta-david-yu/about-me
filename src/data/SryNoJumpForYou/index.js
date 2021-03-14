import React from 'react';
import Markdown from 'react-markdown';

export default {
medias: [
    {
        "type": "video",
        "src": "https://youtu.be/YSH--V63RQ8",
    },
    {
        "type": "image",
        "src": "./img/work/sry-nojumpforyou-00.png",
    },
    {
        "type": "image",
        "src": "./img/work/sry-nojumpforyou-01.png",
        "comment": ""
    },
    {
        "type": "image",
        "src": "./img/work/sry-nojumpforyou-02.png",
        "comment": ""
    },
],

linksInfo: 
<div>
            <a href="https://functionoverflu.itch.io/sorry-no-jump-for-you"><img alt="itch-icon" src="./img/itchio-x26.png" className="icon-26" /></a>
</div>,

information:
<div style={{textAlign: 'center'}}>
    <Markdown children={`
** Factsheet **

| | Information |
| --------- | ------- |
| Status | Prototype |
| Platforms | Windows PC |
| Genre | 2D puzzle platformer |
| Made with | Unity |
| Team | Ta David Yu |

** Notable features **

|  | Description |
| --------- | ------- |
| Raycast-based character controller | Use the character controller [plugin](https://github.com/ta-david-yu/2D-Platformer-Hunter) that I made myself for the objects/characters that could move in game. |

`}/>
</div>,

description:
<div style={{textAlign: 'center'}}>

    <div style={{fontWeight: 'bold'}}>
        <div>About Sorry, No Jump For You</div>
    </div>

    <div>A 10-minute 2d puzzle platformer where you cannot jump but can rotate the level to move objects through gravity.</div>
    <div>The goal of each level is to reach the floating orb.</div>
    <div>There are currently 16 levels in the game.</div>

    <span style={{margin: '50px'}} />
    <div>--</div>
    <div>I made this in my leisure time during the first semester at CGL.</div>

    <span style={{margin: '50px'}} />
    <div>--</div>
    <div>Music by <a href="http://loyaltyfreakmusic.com/about">Monplaisir</a></div>
    <div>Font by <a href="https://managore.itch.io/">Daniel Linssen</a></div>
</div>,
}