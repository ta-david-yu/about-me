import React from 'react';
import Markdown from 'react-markdown';

export default {
medias: [
    {
        "type": "video",
        "src": "https://youtu.be/B7yiWtzCjZo",
        "comment": "Level 1 demo video"
    },
    {
        "type": "image",
        "src": "./img/work/hee-hoo-media-00.png",
        "comment": ""
    },
    {
        "type": "image",
        "src": "./img/work/hee-hoo-media-01.png",
        "comment": ""
    },
    {
        "type": "image",
        "src": "./img/work/hee-hoo-media-02.png",
        "comment": ""
    },
],

linksInfo:
<div>
    <a href="https://globalgamejam.org/2018/games/hee-x-hoo"><img alt="ggj-icon" src="./img/ggj-x26.png" className="icon-26" /></a>
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
| Genre | 2D action adventure |
| Made with | Unity |
| Team | Aier Geleisi (Sound Designer), A Wei (Sound Designer), Ian Wang (2D Artist), Littleear Ga (2D Artist), Ta David Yu (Programmer/Level Designer) |

** Notable features I implemented **

| Feature   | Description |
| --------- | ------- |
| Steering Behaviour AI | I made use of steering behaviours such as Pursuit and Wander to control autonomous characters in the game.  |

** Other non-programming stuff **

| Feature   | Description |
| --------- | ------- |
| Level Design | I designed 4 levels during game jam. |

`}/>
</div>,

description: 
<div style={{textAlign: 'left'}}>
    <div style={{fontWeight: 'bold'}}>
        <div>About Hee X Hoo</div>
    </div>

    <div style={{margin: '12px'}} />

    Hee X Hoo is a 2D adventure game made for Global Game Jam 2018 "TRANSMISSION".
    You play as a plankton that can only move by inhaling and exhaling.
    Throughout the journey, you will encounter several hostiles and obstacles. Your goal is to keep your plankton alive and reach the goal.
    
    <br/>
    <br/>
    <div>--</div>
    This is an alt-ctrl game using BOSS-ME-80, but it is also playable with a mouse & keyboard.
    I did most of the programming and level design.
    Besides me, there are two artists and two sound designers on our team.
</div>
,

oldDescription: 
`Hee X Hoo is a 2D adventure game made for Global Game Jam 2018 "TRANSMISSION" using Unity Engine.
This is an alt-ctrl game using BOSS-ME-80, but it is also playable with mouse & keyboard.
I did most of the programming and level design, reused systems I made for Gerritory, e.g., Audio System and Tween Manager.
Besides myself, there are two artists and two sound designers in our team.

In Hee X Hoo, you play as a plankton that can only move by inhaling and exhaling. Throughout the journey, you will encounter several hostiles and obstacles. 
Your goal is to keep your plankton alive and reach the goal.

| Feature   | Description |
| --------- | ------- |
| Steering Behaviour AI | Control autonomous characters using steering behaviours such as pursuit and wander.  |

Other non-programming stuff:

| Feature   | Description |
| --------- | ------- |
| Level Design | Design 4 levels during game jam. |

`,

}