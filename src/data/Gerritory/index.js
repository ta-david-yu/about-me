import React from 'react';
import Markdown from 'react-markdown';

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
        "src": "./img/work/gerritory-media-05.png",
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

linksInfo: 
<div>
    <a href="https://store.steampowered.com/app/1175720/Gerritory/"><img alt="steam-icon" src="./img/steam-x26.png" className="icon-26" /></a>
    <a href="https://www.nintendo.com/games/detail/gerritory-switch/"><img alt="switch-icon" src="./img/switch-x26.png" className="icon-26" /></a>
    <a href="https://partygoosestudio.wixsite.com/gerritorythegame"><img alt="globe-icon" src="./img/globe-x26.png" className="icon-26" /></a>
</div>,

information:
<div style={{textAlign: 'center'}}>
    <Markdown children={`
** Factsheet **

| | Information |
| --------- | ------- |
| Status | Released |
| Platforms | Windows PC, Nintendo Switch |
| Genre | 4-player online (steam only) & local party game |
| Made with | Unity |
| Team | Cheng-Kai Chiu (Programmer), Ta David Yu (Programmer/Artist), Yu-Han Lu (Programmer), Yun-Xuan Lin (Programmer/Artist) |
| Digital Crafter (Publisher) | Glen Zhang (Network Programmer), Ken Wei, Paus Chen |

** Some of the notable features I implemented **

|  | Description |
| --------- | ------- |
| Switch Porting | I optimized and ported Gerritory to nintendo switch in Unity. |
| Runtime Level Editor | I implemented an in-game level editor that has rect copying and undo/redo features using Command pattern. |
| Png Level Metadata | I used steganography to save level data inside the screenshot image of that level. It's similar to how [Spore](https://en.wikipedia.org/wiki/Spore_(2008_video_game)) stores creatures data in png files. Therefore it’s possible to know the level layout just by looking at the png file that stores the level data. |
| Tween Manager | I implemented a small tweening library simliar to DOTween but simplified, which allows users to play easing animation sequence in code easily. It makes use of object pooling to avoid unnecessary memory allocation. The library has been used in my several other projects since then. |
| Asynchronous Task Queue | I implemented a task queue system that users can push tasks into, which will then be executed during scene loading asynchronously. Most of these tasks would take a few seconds to complete such as loading assetbundles, decoding level data, or internet connection. |

** Other notable non-programming stuff I did **

|  | Description |
| --------- | ------- |
| Core Mechanics | I designed the core game mechanics and proposed to the team. |
| Level Design | I designed several built-in levels in the game. |
| Motion Design | I designed most of the UI animations and in-game dynamic visual elements. |
| 3D Modeling | I modeled some of the cubic models in blender. |
| Sound Design | I recorded & mixed several in-game sound effects. |
| Game Trailer Editing | I edited the game trailer using Adobe Premiere. |
`}/>
</div>,


description: 
<div style={{textAlign: 'left'}}>

    <div style={{fontWeight: 'bold'}}>
        <div>About Gerritory</div>
    </div>
    <div style={{margin: '12px'}} />

    Gerritory is a 4-player action party game with unique game rules and minimalistic visuals.
    You and your friends move cube characters in various levels and color tiles to score points.  
    <br/>
    <br/>

    <div style={{fontWeight: 'bold'}}>There are two rules in the game</div>

    <ol>
        <li>
        Get Your Territory: Move your cube character and color as many tiles as possible. The player who owns the most territory wins.
        </li>

        <li>
        Small > Big: Players with less territory can kill players with more territory by stepping on them.
        </li>
    </ol>

    <div>--</div>
    Gerritory was a hobby project made by three of my friends and me in our leisure time during our study at National Chiao Tung University. 
    It ended up becoming our first commercial project and has been released on both Steam and Nintendo Switch. 
    Since none of us is a specialized artist, we went for minimalistic aesthetics for the game. 
    Therefore another teammate and I managed to create a simple but consistent art style that makes the game look pleasant.
    Throughout the development, we worked one day a week remotely.
    
    <br/>
    <br/>
    <div>The soundtrack is composed by <a href="https://www.waterflame.com/">Waterflame</a>.</div>

    <br/>
    <Markdown children={`
** Awards & Recognition **  
[![trophy](./img/trophy-x13.png) 2018 Vision Get Wild - Sliver in PC game genre and several sponsor awards](https://dcaward-vgw.org.tw/About/AwardDetail/20838?year=2018&type=1052)  
[![trophy](./img/trophy-x13.png) 2018 IndiePlay China IGA - 2nd place in Best Student Game](https://www.ciga.me/blog/2018-indieplay?categoryId=80866)  
[![trophy](./img/trophy-x13.png) 2018 The MIX Indie Showcase At TGDF - Official Selection](https://www.mediaindieexchange.com/event/the-mix-indie-showcase-at-tgdf/)  
[![trophy](./img/trophy-x13.png) 2019 Taipei Game Show IGA - Best Design](http://tgs.tca.org.tw/indie_award_winners.php?b=2b_e)  `} />

</div>
,

oldDescription: 
`Gerritory is a multiplayer party game I made with three of my friends using Unity Engine. This is my first commercial project and will be released on Steam. 
Although four of us are all programmers, another teammate and I are also in charge of the art materials in the game.

The rules of Gerritory are simple:

1. Get your territory - Move your cube character and color as many tiles as possible. The player who owns the most territory wins.
2. Small > Big - Players with less territory can kill players with more territory by stepping on them.

Some of the notable features I implemented:

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
`
}