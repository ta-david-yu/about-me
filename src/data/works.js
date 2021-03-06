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
"description": {
    "type": "file",
    "src": 
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
        "title": "Rolling Rocker & Eagle Simulator",
        "img": "./img/work/es-rr-preview.png",
        "gif": "./img/work/es-rr-preview.gif",
        "date": "2017.3 - 2017.4",
        "job": "Designer, Programmer",
        "team": "1",

        "mediaTable": [
            {
                "type": "video",
                "src": "https://youtu.be/qq86Y2gozus"
            },
            {
                "type": "image",
                "src": "./img/work/es-rr-media-01.png",
                "comment": "Eagle Simulator"
            },
            {
                "type": "image",
                "src": "./img/work/es-rr-media-02.png",
                "comment": "Rolling Rocker"
            },
            {
                "type": "image",
                "src": "./img/work/es-rr-media-00.png",
                "comment": "Controller setup"
            },
        ],
"description": {
    "type": "file",
    "src": 
`Rolling Rocker & Eagle Simulator is a personal academic project for my human-computer interaction class in college. It includes two arcade games.
Everything was made by myself using modern C++ and OpenCV. This is an alt-ctrl game using a custom wand controller and an RGB camera.
The wand controller can actually be anything that has two colors. Each color acts as one end of the wand.

**Rolling Rocker** is an endless running game where you control a ball character on a stick by rotating the wand controller. 
Player has to balance and keep the ball from dropping into holes. The angle of the wand controller determines the angle of the stick.

**Eagle Simulator** is a running game where you control an eagle to gather coins and avoid obstacles. The sooner you finish the level, the more extra points you get. 
The angle of the wand controller determines the moving direction of the eagle. Players can swing the wand controller to accelerate the eagle.

| Feature   | Description |
| --------- | ------- |
| Component-based Engine | A simple component-based game engine all built from scratch. |
| RGB Camera Color Tracking | Track colored area as input using OpenCV. |
| Optimization using Multithreading | Separate input thread with main game loop thread to avoid possible frame rate drops due to camera capturing delay. |
| 2D World Streaming | Split 2D tile worlds into chunks to improve performance. |

Some art materials are assets from RPG maker forums.  
Music in the video is composed by [Monplaisir](http://loyaltyfreakmusic.com/about), Poupi Great Adventures : The Arcade Game

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
            }
        ],
"description": {
    "type": "file",
    "src": 
`Hee X Hoo is a 2D adventure game made for Global Game Jam 2018 "TRANSMISSION" using Unity Engine.
This is an alt-ctrl game using BOSS-ME-80, but it is also playable with mouse & keyboard.
I did most of the programming and level design, reused systems I made for Gerritory, e.g., Audio System and Tween Manager.
Besides myself, there are two artists and two sound designers in our team.

In Hee X Hoo, you play as a plankton that can only move by inhaling and exhaling. Throughout the journey, you will encounter several hostiles and obstacles. 
Your goal is to keep your plankton alive and reach the goal.

| Feature   | Description |
| --------- | ------- |
| Steering Behaviour AI | Control autonomous characters using steering behaviour such as Pursuit and Wander.  |

Other non-programming stuff:

| Feature   | Description |
| --------- | ------- |
| Level Design | Design 4 levels during game jam. |

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
                "type": "video",
                "src": "https://youtu.be/wDHdpRW1-F0",
                "comment": "Boss fight demo video"
            },
            {
                "type": "image",
                "src": "./img/work/boomeranger-media-00.png",
                "comment": "Main menu"
            },
            {
                "type": "image",
                "src": "./img/work/boomeranger-media-01.png",
                "comment": ""
            },
            {
                "type": "image",
                "src": "./img/work/boomeranger-media-02.png",
                "comment": ""
            },
            {
                "type": "image",
                "src": "./img/work/boomeranger-media-03.png",
                "comment": ""
            },
        ],
"description": {
    "type": "file",
    "src": 
`Boomeranger is a 3D action roguelike game made for 3D game programming class in college with two of my classmates, which are both programmers, using Unity Engine. 
My first attempt to implement a proper 3d character controller.

You play as a bounty hunter who uses a boomerang as the weapon, hunting powerful monsters in a procedurally generated dungeon.
In each playthrough, the dungeon is randomly generated. Once your character dies, you will have to start all over again in a new dungeon.

| Feature   | Description |
| --------- | ------- |
| 3D Character Controller | Including a custom 3D rigidbody controller that can handle on-slope movement / external force physics and an airborne boss character controller. |
| Camera Controller | A 3D camera system that can be switched between MMORPG style camera and TPS style camera. |

Other non-programming stuff:

| Feature   | Description |
| --------- | ------- |
| Character Modeling | Build character models using MagicaVoxel. |
| Character Animation | Create character animations using Unity built-in animation system. |

Dungeon floor texture is from [Stone Floor Texture](https://assetstore.unity.com/packages/2d/textures-materials/stone/stone-floor-texture-20336)  
Some dungeon props are from [PolyWorks: Free Pack (Sample)](https://assetstore.unity.com/packages/3d/environments/polyworks-free-pack-sample-58821) and [Voxel Dungeon Environment Set 1](https://assetstore.unity.com/packages/3d/environments/dungeons/voxel-dungeon-environment-set-1-57394)  
Musics and some sound effects are from the internet and [魔王魂](https://maoudamashii.jokersounds.com/)  

`},
"information": {
    "type": "file",
    "src": <div></div>}
    },

    {
        "ignore": true,
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
                "src": "./img/work/nothing-last-forever-media-00.png",
                "comment": "A reference to a famous sightseeing spot in Taiwan"
            },
            {
                "type": "image",
                "src": "./img/work/nothing-last-forever-media-01.png",
                "comment": "The altar at the end of the forest"
            },
            {
                "type": "image",
                "src": "./img/work/nothing-last-forever-media-02.png",
                "comment": "2D dynamic light system"
            }
        ],
"description": {
    "type": "file",
    "src": 
`Nothing Lasts Forever is a 2D platformer game made for Global Game Jam 2016 "RITUAL" using Unity Engine. My first game jam project.
Since there is only one artist and four programmers in our team, I spent all my time implementing 2D light system.

You play as a girl wandering in the forest. Every rule reverses under the light. Player shoot black bullets in shadow but white bullets in light. 
White monsters will be damaged by black bullets while healed by white bullets, and vice versa. Vines are harmful in shadow but elastic in light.

| Feature   | Description |
| --------- | ------- |
| 2D Dynamic Light System | A raycast-based 2D lighting system. A light area polygon is constructed by raycast hit points and triangulated to renderable mesh. |

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
        "title": "2D Platformer Hunter",
        "img": "./img/work/platformer-preview.png",
        "gif": "./img/work/platformer-preview.gif",
        "date": "2018.8 - present",
        "job": "Programmer",
        "team": "1",

        "mediaTable": [
            {
                "type": "video",
                "src": "https://youtu.be/wnalr3_RULU",
                "comment": ""
            },
            {
                "type": "image",
                "src": "./img/work/platformer-media-01.gif",
                "comment": "Moving Platform Controller (pink box) controlled by Player Input Driver can still carry other motor"
            },
            {
                "type": "image",
                "src": "./img/work/platformer-media-00.gif",
                "comment": "2D waypoint editor"
            },
            {
                "type": "image",
                "src": "./img/work/platformer-media-02.gif",
                "comment": "The same Character Controller with different animation"
            }
        ],
"description": {
    "type": "file",
    "src": 
`2D Platformer Hunter is a customizable 2D platformer controller using reliable raycast-based detection method for Unity Engine.
The code is well-structured and can be easily customized.

The code structure is based on a model that I call Input-Controller-Motor model. Each controller consists of three modules: Input, Controller and Motor.
Each module can be replaced with user-customized module to achieve various gameplay mechanics.

| Module   | Description |
| --------- | ------- |
| Input | It represents the brain of a controller. The brain can be player's input or an AI. Waypoint navigation for moving platform is also a type of Input module. |
| Controller | It represents the body of a controller. The body decides what a character can do, such as, double jumpping, dasing. |
| Motor | It represents the physics law of a controller. For example, a character motor collides with obstacles; a platform motor can carry other motors or transforms. |

Any other behaviours that do not belong to these three modules should instead be implemented in different components and listen to events sent by the three main modules.  

Example art materials is made by rvros - [Animated Pixel Adventurer](https://rvros.itch.io/animated-pixel-hero)  
Music in the video composed by [Monplaisir](http://loyaltyfreakmusic.com/about), Tale on the Late - The road we use to travel when we were kids

`},
"information": {
    "type": "file",
    "src": 
    <div>
        <a href="https://github.com/ta-david-yu/2D-Platformer-Hunter"><img alt="gh-icon" src="./img/github-x26.png" className="icon-26-no-hover" /></a>
    </div>}
    },

    {
        "ignore": true,
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
                "src": "./img/work/mwb-media-00.png",
                "comment": ""
            },
            {
                "type": "image",
                "src": "./img/work/mwb-media-01.png",
                "comment": ""
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
    },

    {
        "isSmall": true,
        "type": "tool",
        "title": "About This Website",
        "img": "./img/work/about-me-preview.png",
        "gif": "",
        "date": "2019.1 - 2019.3",
        "job": "Visual Designer, Programmer",
        "team": "1",

        "mediaTable": [
        ],
"description": {
    "type": "file",
    "src":
`After finishing my military service in January 2019,   
I began to learn JavaScript / ReactJS in one month in order to build this website. 
It is built from scratch without any page template code.  
Most of the pixel art icons are made by myself in Aseprite.

Most social media icons are made by [Davit Masia](https://kronbits.itch.io/matriax-free-assets)  
Retro fonts are made by [Daniel Linssen](http://daniellinssen.net/)  
`},
"information": {
    "type": "file",
    "src": 
    <div>
        <a href="https://github.com/ta-david-yu/about-me"><img alt="gh-icon" src="./img/github-x26.png" className="icon-26-no-hover" /></a>
    </div>}
    }
];

export default works;