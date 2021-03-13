import React from 'react';
import Markdown from 'react-markdown';

export default {
medias: [
    {
        "type": "video",
        "src": "https://youtu.be/eG3jI0byfn8"
    },
    {
        "type": "image",
        "src": "./img/work/ootm-media-00.png",
        "comment": ""
    },
    {
        "type": "image",
        "src": "./img/work/ootm-media-02.png",
        "comment": ""
    },
    {
        "type": "image",
        "src": "./img/work/ootm-media-03.png",
        "comment": ""
    },
],

linksInfo:
<div>
    <a href="https://deathbybroccoli.itch.io/out-of-the-mist"><img alt="itch-icon" src="./img/itchio-x26.png" className="icon-26" /></a>
    <a href="https://dbbstudio.com/"><img alt="globe-icon" src="./img/globe-x26.png" className="icon-26" /></a>
</div>
,

description: 
<div style={{textAlign: 'center'}}>
    
    <div style={{fontWeight: 'bold'}}>
        <div>About Out Of the Mist</div>
    </div>

    <div>Out of the Mist is a unique game where you need to control the environment,</div>
    <div>and not your character, to complete challenging platforming levels.</div>

    <span style={{margin: '50px'}} />
    <div>Explore a world torn apart by a failed experiment with inter-dimensional crystals and learn more about the civilizations that once thrived.</div>

    <span style={{margin: '50px'}} />
    <div>--</div>
    <div>Out Of the Mist is originally our first semester project in Cologne Game Lab.</div>
    <div>After the first semester, we decided to keep working on the game together </div>
    <div>and possibly release it in the future.</div>
    <div>We are also one of the teams in CGL Incubator.</div>
</div>,

information:
<div style={{textAlign: 'center'}}>
    <Markdown children={`
** Factsheet **

| | Information |
| --------- | ------- |
| Status | In Development |
| Platforms | Windows PC |
| Genre | Single-player exploration game |
| Made with | Unity |
| Team | Arkadijs Gribacovs, Georgios Lindaris, Ta David Yu, Trey Ramm, Vanessa Ptak |

** Notable features **

|  | Description |
| --------- | ------- |
| Level Tiles Editor | An offline level editor extended from Unity built-in Tilemap editor, allowing designers to place hexagonal tiles smoothly. It's also integrated with GPU Instancer so tiles that share the same material and mesh can be instanced. |
| Scene Metadata & Editor | A per-scene metadata saves addtional information of a scene (similar to lighting data). It also keeps tracks of the important objects of that scene which can be referenced by other different scenes/levels. |
`}/>
</div>
}