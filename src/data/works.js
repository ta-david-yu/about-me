import React from 'react';

const works = [
    {
        "type": "game",
        "title": "Gerritory",
        "img": "./img/work/gerritory-preview.png",
        "gif": "./img/work/gerritory-preview.gif",
        "date": "2017.1 - present",
        "job": "Designer, Programmer, Visual Design",
        "team": "4",

        "mediaTable": [
            {
                "type": "video",
                "src": "https://youtu.be/wZ_4xxnEhlU"
            },
            {
                "type": "image",
                "src": "./img/work/gerritory-media-00.png"
            },
            {
                "type": "image",
                "src": "./img/work/gerritory-media-01.png"
            },
            {
                "type": "image",
                "src": "./img/work/gerritory-media-02.png"
            },
            {
                "type": "image",
                "src": "./img/work/gerritory-media-03.png"
            },
            {
                "type": "image",
                "src": "./img/work/gerritory-media-04.png"
            },
        ],
"description": {
    "type": "file",
    "src": 
`Gerritory is a multiplayer party game I made with three of my friends using Unity Engine. This is my first commercial project and will be released on Steam. 
Although four of us are all programmers, another teammate and I are also in charge of the in-game art materials.

The rules of Gerritory are simple:  
**1. Get your territory**: Move your cube character and color as many tiles as possible. The player who owns the most territory wins.   
**2. Small > Big**: Player with less territory can kill players with more territory by stepping on them.

Some of the notable features implemented by me:

| Feature   | Description |
| --------- | ------- |
| Tween Manager | A small library simliar to DOTween but simplified, allow users to play easing animation sequence easily. Make use of object pooling to improve performance. |
| Layered Audio System | Sort audio into layers so player can adjust volume for different layers. Make use of audio request queue to avoid overlapping sound effects. |
| Collectables Editor | Make use of the Unity Editor API to create a custom editor for editing in-game collectables. |
| Asynchornous Task Queue | Users can push task to task queue which will be executed during scene loading asynchornously, e.g., loading assetbundles, procedural content generation, runtime navmesh baking. |
| Shader Effects | Some special effects using UnityShader. |

Other notable non-programming stuff:

| Feature   | Description |
| --------- | ------- |
| Core Mechanics | Design the core game mechanics. |
| Visual Design | Design the overall visual style of the game including in-game model design & UI design. |
| Visual Feedback | Add subtle motions in game to make it feel juicy. |
| 3D Modeling | Model some of the cubic models with blender. |
| Sound Design | Record & mix several in-game sound effects. |
| Game Trailer Editing | Edit the game teaser using Adobe Premiere. |

Gerritory has won several game awards since making its debute:  
[![trophy](./img/trophy-x13.png) 2018 Vision Get Wild - Sliver in PC game genre and several sponsor awards](https://dcaward-vgw.org.tw/About/AwardDetail/20838?year=2018&type=1052)  
[![trophy](./img/trophy-x13.png) 2018 IndiePlay China IGA - 2nd place in Best Student Game](https://www.ciga.me/blog/2018-indieplay?categoryId=80866)  
[![trophy](./img/trophy-x13.png) 2019 Taipei Game Show IGA - Best Design](http://tgs.tca.org.tw/indie_award_winners.php?b=2b_e)  

Some in-game icons are from [Flaticon](https://www.flaticon.com/).  
UI sound effects are bought from Unity Asset Store.  
In-game musics are composed by [Waterflame](https://www.waterflame.com/) with a non-exclusive license.

`},
"information": {
    "type": "file",
    "src": 
    <div>
        <a href="https://twitter.com/gerritory"><img alt="tw-icon" src="./img/twitter-x26.png" className="icon-26-no-hover" /></a>
        <a href="https://www.facebook.com/Gerritory/"><img alt="fb-icon" src="./img/facebook-x26.png" className="icon-26-no-hover" /></a>
        <a href="https://partygoosestudio.wixsite.com/gerritorythegame"><img alt="globe-icon" src="./img/globe-x26.png" className="icon-26-no-hover" /></a>
    </div>}
    },
    {
        "type": "game",
        "title": "Eagle Simulator & Rolling Rocker",
        "img": "./img/work/es-rr-preview.png",
        "gif": "./img/work/es-rr-preview.gif",
        "date": "2017.3 - 2017.4",
        "job": "Designer, Programmer",
        "team": "1",

        "mediaTable": [
            {
                "type": "image",
                "src": "./img/work/es-rr-media-01.png"
            },
            {
                "type": "image",
                "src": "./img/work/es-rr-media-02.png"
            },
            {
                "type": "image",
                "src": "./img/work/es-rr-media-00.png"
            },
        ],
"description": {
    "type": "file",
    "src": 
`Eagle Simulator & Rolling Rocker is an acedmic project for my human-computer interaction class in college. It includes two arcade games.
Everything by myself using modern C++ and OpenCV. This is an alt-ctrl game using a custom wand controller and a RGB camera.
The wand controller can actaully be anything that has two colors. Each color acts as one end of the wand.

**Eagle Simulator** is a running game which you control a eagle to gather coins and avoid obstacles. The sooner you finish the level, the more extra points you get. 
The angle of the wand controller determines the moving direction of the eagle. Player can swing the wand controller to accelerate the eagle.

**Rolling Rocker** is an endless running game which you control a ball character on a stick by rotating the wand controller. 
Player has to balance and keep the ball from dropping into holes. The angle of the wand controller determines the angle of the stick.

| Feature   | Description |
| --------- | ------- |
| Component-based Engine | A simple component-based game engine all built from scratch. |
| RGB Camera Color Tracking | Track colored area as input using OpenCV. |
| Optimization using Multithreading | Separate input thread with main game loop thread to avoid possible frame rate drops due to camera capturing delay. |
| 2D World Streaming | Split 2D tile worlds into chunks to improve performance. |

Some art materials are free assets from the internet.

`},
"information": {
    "type": "file",
    "src":  
    <div>
        <a href="https://github.com/ta-david-yu/HCI_OpenCVproj"><img alt="gh-icon" src="./img/github-x26.png" className="icon-26-no-hover" /></a>
    </div>}
    },
    {
        "type": "game",
        "title": "Hee X Hoo",
        "img": "./img/work/hee-hoo-preview.png",
        "gif": "./img/work/hee-hoo-preview.gif",
        "date": "global game jam 2018",
        "job": "Level Designer, Programmer",
        "team": "5",

        "mediaTable": [
            {
                "type": "image",
                "src": "./img/work/hee-hoo-media-00.png"
            },
            {
                "type": "image",
                "src": "./img/work/hee-hoo-media-01.png"
            },
            {
                "type": "image",
                "src": "./img/work/hee-hoo-media-02.png"
            }
        ],
"description": {
    "type": "file",
    "src": 
`Hee X Hoo is a 2D adventure game made for Global Game Jam 2018 "TRANSMISSION" using Unity Engine.
This is an alt-ctrl game using BOSS-ME-80, but it is also playable with mouse & keyboard.
I did most of the programming and level design, reused some systems I made for Gerritory, e.g., Audio System and Tween Manager.
There are two artists, two sound designers in our team.

In Hee X Hoo, you play as a plankton that can only move by inhaling and exhaling. Throughout the journey, you will encounter several hostiles and obstacles. 
Your goal is to keep your plankton alive and reach the goal.

| Feature   | Description |
| --------- | ------- |
| Steering AI | Control autonomous character using steering behaviour such as Pursuit and Wander.  |

`},
"information": {
    "type": "file",
    "src": 
    <div>
        <a href="https://globalgamejam.org/2018/games/hee-x-hoo"><img alt="ggj-icon" src="./img/ggj-x26.png" className="icon-26-no-hover" /></a>
    </div>
}
    },
    {
        "type": "game",
        "title": "Boomeranger",
        "img": "./img/work/boomeranger-preview.png",
        "gif": "./img/work/boomeranger-preview.gif",
        "date": "2016.3 - 2016.6",
        "job": "Designer, Programmer",
        "team": "3",

        "mediaTable": [
            {
                "type": "image",
                "src": "./img/work/boomeranger-media-00.png"
            },
            {
                "type": "image",
                "src": "./img/work/boomeranger-media-01.png"
            },
            {
                "type": "image",
                "src": "./img/work/boomeranger-media-02.png"
            },
            {
                "type": "image",
                "src": "./img/work/boomeranger-media-03.png"
            },
        ],
"description": {
    "type": "file",
    "src": 
`Boomeranger is a 3D action roguelike game made for 3D game programming class in college with two of my classmates, which are both programmers, using Unity Engine. 
My first attempt to implement a proper 3d character controller.

You play as a bounty hunter who uses a boomerange as weapon, hunting powerful monsters in a procedurally generated dungeon.
In each playthrough, the dungeon is randomly generated. Once your character dies, you will have to start all over again in a new dungeon.

| Feature   | Description |
| --------- | ------- |
| Character Behaviour | Including a 3D raycast-based controller that can handle on-slope movement / external force physics and an airborne boss character controller. |
| Camera Controller | A 3D camera system that can be switched between MMORPG style camera and TPS style camera. |

Other non-programming stuff:

| Feature   | Description |
| --------- | ------- |
| Character Modeling | Character models using MagicaVoxel. |
| Character Animation | Character animations using Unity builtin animation system. |

Some art assets are from Unity Asset Store.

`},
"information": {
    "type": "file",
    "src": ``}
    },
    {
        "type": "game",
        "title": "Nothing Lasts Forever",
        "img": "./img/work/nothing-last-forever-preview.png",
        "gif": "./img/work/nothing-last-forever-preview.gif",
        "date": "global game jam 2016",
        "job": "Programmer",
        "team": "5",

        "mediaTable": [
            {
                "type": "image",
                "src": "./img/work/nothing-last-forever-media-00.png"
            },
            {
                "type": "image",
                "src": "./img/work/nothing-last-forever-media-01.png"
            },
            {
                "type": "image",
                "src": "./img/work/nothing-last-forever-media-02.png"
            }
        ],
"description": {
    "type": "file",
    "src": 
`Nothing Lasts Forever is a 2D platformer game made for Global Game Jam 2016 "RITUAL" using Unity Engine. My first game jam project.
Since there is only one artist and four programmers in our team, I spent all my time implementing 2D lighting system.

You play as a girl wandering in the forest. Every rule reverses under the light. Player shoot black bullets in shadow but white bullets in light. 
White monsters will be damaged by black bullets while healed by white bullets, and vice versa. Vines are harmful in shadow but elastic in light.

| Feature   | Description |
| --------- | ------- |
| 2D dynamic lighting system | A raycast-based 2D lighting system. A light area polygon is constructed by raycast hit points and triangulated to renderable mesh. |

`},
"information": {
    "type": "file",
    "src": 
    <div>
        <a href="https://globalgamejam.org/2016/games/nothing-lasts-forever"><img alt="ggj-icon" src="./img/ggj-x26.png" className="icon-26-no-hover" /></a>
    </div>}
    },
    {
        "type": "tool",
        "title": "MWB in Unity",
        "img": "./img/work/mwb-preview.png",
        "gif": "./img/work/mwb-preview.gif",
        "date": "2017.6 - 2018.6",
        "job": "Programmer",
        "team": "3",

        "mediaTable": [
            {
                "type": "image",
                "src": "./img/work/mwb-media-00.png"
            },
            {
                "type": "image",
                "src": "./img/work/mwb-media-01.png"
            }
        ],
"description": {
    "type": "file",
    "src": 
`MWB in Unity is an Unity tool made with two of my classmates as an academic project.
We implement an animation system in Unity Engine based on the paper [Many-worlds browsing for control of multibody dynamics](http://graphics.cs.cmu.edu/projects/mwb/).
In order to create physically plausible and desired animations in a multibody system, animators have to spend a lot of time tweaking and adjusting each objects. 
MWB uses physics engine to simulate numerous plausible examples parallelly for users to choose from. 

The algorithm is simple: on each collision, a simulation is forked into more simulations.
In each new simulation, the objects that are colliding are applied with a force with a slightly different direction and a small magnitude. 
The magnitude is so small that the collision is still plausible. However, after a sequence of collision, there will be a big difference between each simulation.
As a result, there will be a tons of plausible animation sequences for users to select and edit from. 
Each simulation is represented with lines indicating the moving path of objects. Users can choose a simulation result by selecting the path.

In this project, I am in charge of the UI/UX design. Following is my contribution to the project:

| Feature   | Description |
| --------- | ------- |
| Editor UI | Make use of Unity Editor API to create a user-friendly interface. Including a simulated object hierarchy window inside scene view and a custom animation player window. |
| Lines Rendering using Geometry Shader | Lines are rendered in one geometry shader to achieve better performance which further improves the user experience. |
| GPU-Accelerated Computing | Use compute shader to calculate line selection result in GPU to acieve better performance which further improves the user experience. |

Although the tool is not as powerful as the original implementation, I acquired a lot of knowledge about how to build a tool in Unity Editor.

Citation:
Christopher D. Twigg and Doug L. James. Many-worlds browsing for control of multibody dynamics. ACM Transactions on Graphics (SIGGRAPH 2007), 26(3), August 2007.
`},
"information": {
    "type": "file",
    "src": 
    <div>
        <a href="https://github.com/alan0201tw/Unity_Many-Worlds_Browsing"><img alt="gh-icon" src="./img/github-x26.png" className="icon-26-no-hover" /></a>
    </div>}
    }
];

export default works;