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

** Notable features **

|  | Description |
| --------- | ------- |
| Component-based ASCII Rendering Framework | I made a custom ASCII rendering framework that utilizes tree structure and component-based system. |
| Grid-based collision detection | I used ray marching technique with the unit size of ASCII character to do collision detection. |
`}/>
</div>,

description: 
<div style={{textAlign: 'left'}}>

    <div style={{fontWeight: 'bold'}}>
        <div>About NS-Shaft console</div>
    </div>

    <div style={{margin: '12px'}} />

    A recreation / demake of the famous arcade plaform game - <a href="https://en.wikipedia.org/wiki/NS-Shaft">NS-Shaft</a>.
    <br/>
    <br/>

    The original NS-Shaft is created by <a href="https://www.nagi-p.com/v1/eng/">Nagi-P Software</a>.
    In the game, the player attempts to descend into a cave by moving left and right.
    The platforms move up the screen at a slowly accelerating rate.
    A ceiling of spikes hovers at the top of the screen.
    The goal is to fall from platform to platform rapidly enough to not be hit by the ceiling spikes, but slowly enough not to fall off the bottom of the screen. - Wikipedia
    
    <br/>
    <br/>
    <div>--</div>
    This project is an individual academic project made for the programming lecture in my first semester at CGL.
    The original requirement is to make a game where the player can move an ASCII character around in a level in the console window. Therefore I ported the plaform game that was once very famous in Taiwan to console!
    It replicates most of the features the original game have (including exploits).
</div>,
}