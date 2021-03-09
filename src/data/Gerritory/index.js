import React from 'react';
import Markdown from 'react-markdown';
import Collapsible from 'react-collapsible';

const spec = `

Factsheet  

| | Information |
| --------- | ------- |
| Status | Released |
| Platforms | Windows PC, Nintendo Switch |
| Genre | 4-player online (steam only) & local party game |
| Made with | Unity3D |
| Team | Ta David Yu, Cheng-Kai Chiu, Yu-Han Lu, Yun-Xuan Lin |
| Additional Developers | Glen Zhang, Paus Chen, Ken Wei, Waterflame |

Some of the notable features implemented by me  

| Feature   | Description |
| --------- | ------- |
| Switch Porting | Optimize and port Gerritory to nintendo switch in Unity. |
| Tween Manager | A small library simliar to DOTween but simplified. Allow users to play easing animation sequence easily. Make use of object pooling to improve performance. |
| Layered Audio System | Sort audio sources into layers so player can adjust volume for different layers. Make use of event queue to avoid duplicated sound effects in the same frame. |
| Collectables Editor | Make use of the Unity Editor API to create a custom editor for editing in-game collectables. |
| Asynchronous Task Queue | Users can push tasks to task queue which will be executed during scene loading asynchronously. Most of these tasks would take over a second to complete such as loading assetbundles, procedural content generation, internet connection. |
| Level Editor Undo / Redo function | Implement Undo / Redo feature in Level Editor with Command pattern. |
| Shader Effects | Some special effects using UnityShader. |

Other notable non-programming stuff  

| Feature   | Description |
| --------- | ------- |
| Core Mechanics | Design the core game mechanics. |
| Level Design | Design some of the built-in levels in game. |
| Visual Feedback | Add subtle motions in game to make it feel juicy. |
| 3D Modeling | Model some of the cubic models with blender. |
| Sound Design | Record & mix several in-game sound effects. |
| Game Trailer Editing | Edit the game teaser using Adobe Premiere. |
`;

export default {
medias: [
    {
        "type": "video",
        "src": "https://youtu.be/IvNOn7oHE7s"
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
| Runtime Level Editor | Implement an in-game level editor with undo / redo feature using Command pattern. |
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
<div style={{textAlign: 'center'}}>
    <div>
        <a href="https://store.steampowered.com/app/1175720/Gerritory/"><img alt="steam-icon" src="./img/steam-x26.png" className="icon-26" /></a>
        <a href="https://www.nintendo.com/games/detail/gerritory-switch/"><img alt="switch-icon" src="./img/switch-x26.png" className="icon-26" /></a>
        <a href="https://partygoosestudio.wixsite.com/gerritorythegame"><img alt="globe-icon" src="./img/globe-x26.png" className="icon-26" /></a>
    </div>
    <div>Gerritory is a 4-player action party game with unique game rules and minimalistic visuals.</div>
    <div>You and your friends move cube characters in various levels and color tiles to score points.</div>

    <span style={{margin: '50px'}} />
    <div style={{fontWeight: 'bold'}}>There are two rules in the game</div>

    <div>- Get Your Territory -</div>
    <div>Move your cube character and color as many tiles as possible.</div>
    <div>The player who owns the most territory wins.</div>

    <div>- Small > Big -</div>
    <div>Players with less territory can kill players with more territory by stepping on them.</div>

    <Markdown children={`
** Awards & Recognition **  
[![trophy](./img/trophy-x13.png) 2018 Vision Get Wild - Sliver in PC game genre and several sponsor awards](https://dcaward-vgw.org.tw/About/AwardDetail/20838?year=2018&type=1052)  
[![trophy](./img/trophy-x13.png) 2018 IndiePlay China IGA - 2nd place in Best Student Game](https://www.ciga.me/blog/2018-indieplay?categoryId=80866)  
[![trophy](./img/trophy-x13.png) 2018 The MIX Indie Showcase At TGDF - Official Selection](https://www.mediaindieexchange.com/event/the-mix-indie-showcase-at-tgdf/)  
[![trophy](./img/trophy-x13.png) 2019 Taipei Game Show IGA - Best Design](http://tgs.tca.org.tw/indie_award_winners.php?b=2b_e)  `} />

    <div>--</div>
    <div>Gerritory is made by three of my friends and I made using Unity Engine. </div>
    <div>This is my first commercial project and has been released on both Steam and Switch. </div>

    <span style={{margin: '50px'}} />
    <div style={{textAlign: 'left', fontSize: '16px'}}>
        <Collapsible 
        trigger="more information +" 
        triggerWhenOpen="more information -"
        transitionTime='100'
        transitionCloseTime='100'>
            <Markdown children={spec}/>
        </Collapsible>
    </div>
</div>
}