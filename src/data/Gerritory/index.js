import React from 'react';

export default {
medias: [
    {
        "type": "video",
        "src": "https://youtu.be/wZ_4xxnEhlU"
    },
    {
        "type": "image",
        "src": "./img/work/gerritory-media-00.png",
        "comment": "One of the levels in the game with Blackout environment. The light is being turned off"
    },
    {
        "type": "image",
        "src": "./img/work/gerritory-media-02.png",
        "comment": "In-game level editor"
    },
    {
        "type": "image",
        "src": "./img/work/gerritory-media-03.png",
        "comment": "Game results"
    },
    {
        "type": "image",
        "src": "./img/work/gerritory-media-01.png",
        "comment": ""
    },
    {
        "type": "image",
        "src": "./img/work/gerritory-media-04.png",
        "comment": ""
    },
],

description: 
`Gerritory is a multiplayer party game I made with three of my friends using Unity Engine. This is my first commercial project and will be released on Steam. 
Although four of us are all programmers, another teammate and I are also in charge of the art materials in the game.

The rules of Gerritory are simple:

1. Get your territory - Move your cube character and color as many tiles as possible. The player who owns the most territory wins.
2. Small > Big - Players with less territory can kill players with more territory by stepping on them.

Some of the notable features implemented by me:

| Feature   | Description |
| --------- | ------- |
| Switch Porting | Optimize and port Gerritory to nintendo switch in Unity. |
| Tween Manager | A small library simliar to DOTween but simplified. Allow users to play easing animation sequence easily. Make use of object pooling to improve performance. |
| Layered Audio System | Sort audio sources into layers so player can adjust volume for different layers. Make use of event queue to avoid duplicated sound effects in the same frame. |
| Collectables Editor | Make use of the Unity Editor API to create a custom editor for editing in-game collectables. |
| Asynchronous Task Queue | Users can push tasks to task queue which will be executed during scene loading asynchronously. Most of these tasks would take over a second to complete such as loading assetbundles, procedural content generation, internet connection. |
| Level Editor Undo / Redo function | Implement Undo / Redo feature in Level Editor with Command pattern. |
| Shader Effects | Some special effects using UnityShader. |

Other notable non-programming stuff:

| Feature   | Description |
| --------- | ------- |
| Core Mechanics | Design the core game mechanics. |
| Level Design | Design some of the built-in levels in game. |
| Visual Feedback | Add subtle motions in game to make it feel juicy. |
| 3D Modeling | Model some of the cubic models with blender. |
| Sound Design | Record & mix several in-game sound effects. |
| Game Trailer Editing | Edit the game teaser using Adobe Premiere. |

Gerritory has won several game awards since its debut:  
[![trophy](./img/trophy-x13.png) 2018 Vision Get Wild - Sliver in PC game genre and several sponsor awards](https://dcaward-vgw.org.tw/About/AwardDetail/20838?year=2018&type=1052)  
[![trophy](./img/trophy-x13.png) 2018 IndiePlay China IGA - 2nd place in Best Student Game](https://www.ciga.me/blog/2018-indieplay?categoryId=80866)  
[![trophy](./img/trophy-x13.png) 2019 Taipei Game Show IGA - Best Design](http://tgs.tca.org.tw/indie_award_winners.php?b=2b_e)  

Some in-game icons are from [Flaticon](https://www.flaticon.com/).  
UI sound effects are bought from Unity Asset Store.  
In-game musics are composed by [Waterflame](https://www.waterflame.com/) with a non-exclusive license.
`,

information:
<div>
    <div style={{textAlign: 'center'}}>
        <a href="https://twitter.com/gerritory"><img alt="tw-icon" src="./img/twitter-x26.png" className="icon-26" /></a>
        <a href="https://www.facebook.com/Gerritory/"><img alt="fb-icon" src="./img/facebook-x26.png" className="icon-26" /></a>
        <a href="https://partygoosestudio.wixsite.com/gerritorythegame"><img alt="globe-icon" src="./img/globe-x26.png" className="icon-26" /></a>
    </div>
    <div>Gerritory is a multiplayer party game three of my friends and I made using Unity Engine. This is my first commercial project and has been released on both Switch and Steam. 
        Although four of us are all programmers, another teammate and I were also in charge of the art assets in the game.</div>
    <span style={{margin: '50px'}} />
    <div>The rules of Gerritory are simple:</div>
    <div>1. Get your territory - Move your cube character and color as many tiles as possible. The player who owns the most territory wins.</div>
    <div>2. Small > Big - Players with less territory can kill players with more territory by stepping on them.</div>
</div>
}