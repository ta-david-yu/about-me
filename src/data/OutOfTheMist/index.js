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
<div style={{textAlign: 'left'}}>
    
    <div style={{fontWeight: 'bold'}}>
        <div>About Out Of The Mist</div>
    </div>

    <div style={{margin: '12px'}} />
    
    Out of The Mist is a unique game where you need to control the environment,
    and not your character, to complete challenging platforming levels. 
    Explore a world torn apart by a failed experiment with inter-dimensional crystals and learn more about the civilizations that once thrived.

    <br/>
    <br/>
    
    <div>--</div>
    Out Of The Mist is originally our first-semester project in Cologne Game Lab.
    After the first semester, we decided to keep working on the game together
    and possibly release it in the future.

    <br/>
    <br/>
    We are also one of the teams in CGL Incubator.
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
| Team | Arkadijs Gribacovs (3D Artist), Georgios Lindaris (Designer/Writer), Ta David Yu (Programmer), Trey Ramm (3D Artist/Project Manager), Vanessa Ptak (Concept Artist/2D Artist) |

** Notable features **

|  | Description |
| --------- | ------- |
| Level Tiles Editor | I extended the built-in tilemap editor in Unity to fit our needs. Due to the nature of our game, there could be 1000+ tile prefabs in one scene. Therefore, the level editor is also integrated with GPU Instancer so the tiles that share the same mesh and material can be instanced easily. |
| Scene Metadata & Editor | I implemented a system that creates per-scene metadata saving additional information of a scene (similar to lighting data). The metadata keeps tracks of the important objects of that scene which can be referenced by other different scenes/levels so the designer can connect related props across different scenes easily. |
`}/>
</div>
}