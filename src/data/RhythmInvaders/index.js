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
    {
        "type": "image",
        "src": "./img/work/rhythm-invaders-01.png",
        "comment": "level editor in Unity"
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
** Factsheet ** 

| | Information |
| --------- | ------- |
| Status | Prototype |
| Platforms | Windows PC |
| Genre | Rhythm action |
| Made with | Unity |
| Team | Ta David Yu |

** Notable features **

|  | Description |
| --------- | ------- |
| Level editor | I implemented a level editor in Unity that lets the user insert actions or events on beats. |

`}/>
</div>,

description: 
<div style={{textAlign: 'left'}}>

    <div style={{fontWeight: 'bold'}}>
        <div>About Rhythm Invaders</div>
    </div>

    <div style={{margin: '12px'}} />

    A rhythm game where you have to bring down the enemy spaceships before they reach the end of the track.
    The player has to observe the enemies' action patterns and deflect the laser beam on-beat to take them down.

    <br/>
    <br/>
    <div>--</div>
    This project is an individual academic project made for the programming lecture in my first semester at CGL.
    The original requirement is to remake Space Invader in Unity.
    I always wanted to try out making rhythm games after playing Vectronom and Rhythm Doctor's demo, 
    so I put my own spin on the original Space Invader and made it into a rhythm action game.

    <br/>
    <br/>
    The music is from <a href="https://maoudamashii.jokersounds.com/">魔王魂</a>.
</div>,
}