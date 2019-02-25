import React from 'react';

const works = [
    {
        "type": "game",
        "title": "Gerritory  (WIP)",
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
Some of the notable features implemented by me:

| Feature   | Description |
| --------- | ------- |
| Tween Manager | Simliar to DOTween but simplified, allow users to play easing animation sequence easily. |
| Layered Audio System | Sort audio into layers so player can adjust volume for different layers. |
| Collectables Editor | Make use of the Unity Editor API to create a custom editor for editing in-game collectables. |
| Asynchornous Task Queue | Users can push task to task queue which will be executed during scene loading asynchornously, e.g., loading assetbundles, procedural content generation, runtime navmesh baking. |
| Shader Effects | Some special effects using UnityShader. |

Other non-programming stuff:

| Feature   | Description |
| --------- | ------- |
| Gameplay Design | Design the core game mechanics. |
| Visual Design | In game model design & ui design. |
| Visual Feedback | Add subtle motions in game to make it feel juicy. |
| 3D Modeling | Some simple cubic character models made with blender. |
| Sound Effect | Audio recording & mixing for several in-game sound effects. |
| Game Trailer Editing | Using Adobe Premiere. |

Some in-game icons in Gerritory are from [Flaticon](https://www.flaticon.com/).  
Musics used in Gerritory are composed by [Waterflame](https://www.waterflame.com/) with a non-exclusive license.

`},
        "information": {
            "type": "file",
            "src": 
`MWB in Unity is an Unity tool made with two of my classmates as an academic project.
We implement an animation system in Unity Engine based on the paper [Many-worlds browsing for control of multibody dynamics](http://graphics.cs.cmu.edu/projects/mwb/). Users are able to transfer the simulated animation result into Unity built-in animation clip.
`}
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
Everything by myself using modern C++ and OpenCV. This is an alt-ctrl game using custom controller and a RGB camera.

| Feature   | Description |
| --------- | ------- |
| Component-based Engine | A simple component-based game engine all built from scratch. |
| RGB Camera Color Tracking | Track a custom controller as input using OpenCV. |
| Optimization using Multithreading | Separate input thread with game loop thread to avoid possible frame rate drops due to camera capturing delay. |
| 2D World Streaming | Split 2D tile worlds into chunks to improve performance. |

Some art assets are

`}
    },
    {
        "type": "game",
        "title": "Hee X Hoo",
        "img": "./img/work/hee-hoo-preview.png",
        "gif": "./img/work/hee-hoo-preview.gif",
        "date": "GGJ 2018",
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

| Feature   | Description |
| --------- | ------- |
| Steering AI | Control autonomous character using steering behaviour such as Pursuit and Wander. |

`}
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
`Boomeranger is a 3D action roguelike game made for 3D game programming class in college with two of my classmates using Unity Engine. 
My first attempt to implement a proper 3d character controller.

| Feature   | Description |
| --------- | ------- |
| Character Behaviour | Including a 3D raycast-based controller that can handle on-slope movement / external force physics and an airborne boss character controller. |
| Camera Controller | A 3D camera system that can be switched between MMORPG style camera and TPS style camera. |

Other non-programming stuff:

| Feature   | Description |
| --------- | ------- |
| Character Modeling | Character models using MagicaVoxel. |
| Character Animation | Character animations using Unity builtin animation system. |

`}
    },
    {
        "type": "game",
        "title": "Nothing Last Forever",
        "img": "./img/work/nothing-last-forever-preview.png",
        "gif": "./img/work/nothing-last-forever-preview.gif",
        "date": "GGJ 2016",
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
`Nothing Last Forever is a 2D platformer game made for Global Game Jam 2016 "RITUAL" using Unity Engine. My first game jam project.
Since there is only one artist in our team and the rest of us are programmers, I spent all my time implementing 2D lighting system.

| Feature   | Description |
| --------- | ------- |
| 2D dynamic lighting system | A raycast-based 2D lighting system. |

`}
    },
    {
        "type": "tool",
        "title": "DY Engine (WIP)",
        "img": "",
        "gif": "",
        "date": "2017.9 - present",
        "job": "Programmer",
        "team": "1",

        "mediaTable": [
            {
                "type": "video",
                "src": "https://youtu.be/wZ_4xxnEhlU"
            }
        ],
        "description": {
            "type": "file",
            "src": 
`DYEngine is a 3D/2D Game Engine written in C++ that I develop during my leisure time.
During the making of "Eagle Simulator & Rolling Rocker", I implemented a component-based engine. However, after some researches, I discovered the model I used is not a pure Entity-Component-System model. 
Therefore, I started this project to learn the core fundamentals of game engineering and the popular ECS model.

The project is still in an very early stage of development. 
Following are some of the finished / under construction features:

| Feature   | Description |
| --------- | ------- |
| Resource Manager | In charge of allocation and release of memory for game assets. Using reference counting technique to decide whether a resource should be released from memory. |
| Scene Graph | Game level is stored as Scene. Each scene has a tree structure with nodes representing object transforms. |
| Logging System | A custom text logger for debugging. |
| Entity-Component-System Model (WIP) | Currently logics and datas are both held by Components which are updated by Systems. Logics should be moved into Systems in later development process to achieve pure ECS model. |
| Object-oriented wrapper for OpenGL (WIP) | Wrap the functionality of OpenGL API into objects such as Shader Program, Material, Mesh, Uniform Variable, Rendering Context, Rendering Pipeline etc. |

Third-party libraries used in this project: [GLFW][glfw-link], [glad][glad-link], [glm][glm-link], [tinyxml2][tinyxml2-link], [stb][stb-link]

[glfw-link]: https://github.com/glfw/glfw
[glad-link]: https://github.com/Dav1dde/glad
[glm-link]: https://github.com/g-truc/glm
[tinyxml2-link]: https://github.com/leethomason/tinyxml2
[stb-link]: https://github.com/nothings/stb
`}
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
We implement an animation system in Unity Engine based on the paper [Many-worlds browsing for control of multibody dynamics](http://graphics.cs.cmu.edu/projects/mwb/). Users are able to transfer the simulated animation result into Unity built-in animation clip.

I'm in charge of UI of the tool. Following is my contribution to the project:

| Feature   | Description |
| --------- | ------- |
| Editor UI | Make use of Unity Editor API to create a user-friendly interface. Including a hierarchy window inside scene view for simulated object selection and a custom animation player window. |
| Lines Rendering using Geometry Shader | There are tons of line segments needed to be rendered during the use of this tool, therefore lines rendering is done in one geometry shader to imporve performance. |
| GPU-Accelerated Computing | In the system, users pick their desired worlds by selecting simulated path. Since there are thousands or even millions of possible worlds, there will also be the same amounts of lines representing each world. It's impossible to calculate which line users are currently selecting instantly on CPU. Therefore, line selection computation are moved to GPU using compute shader. |

Although the tool is not as powerful as the original implementation, I acquired a lot of knowledge about how to build a tool in Unity Editor.

Citation:
Christopher D. Twigg and Doug L. James. Many-worlds browsing for control of multibody dynamics. ACM Transactions on Graphics (SIGGRAPH 2007), 26(3), August 2007.
`}
    },
    {
        "type": "game",
        "title": "Chain Destroyer",
        "img": "./img/work/chain-destroyer-preview.png",
        "gif": "./img/work/chain-destroyer-preview.gif",
        "date": "2015.1 - 2015.1",
        "job": "UI Programmer",
        "team": "4",

        "mediaTable": [
            {
                "type": "image",
                "src": "./img/work/chain-destroyer-media-00.png"
            },
            {
                "type": "image",
                "src": "./img/work/chain-destroyer-media-01.png"
            },
            {
                "type": "image",
                "src": "./img/work/chain-destroyer-media-02.png"
            }
        ],
        "description": {
            "type": "file",
            "src": 
`Chain Destroyer is a strategy game with RPG element made with three of my friends in 1 week. The core game mechanic is based on Chinese Blind Chess. My first Unity project and also my first complete game.
I was quite new to Unity at the time so I only did UI programming and checkerboard system.

| Feature   | Description |
| --------- | ------- |
| UI animation | Make use of DOTween to animate UI elements. |

`}
    },
    {
        "type": "game",
        "title": "SurvivorQ",
        "img": "./img/work/survivor-q-preview.png",
        "gif": "./img/work/survivor-q-preview.gif",
        "date": "2016.1 - 2016.1",
        "job": "Designer, Programmer",
        "team": "4",

        "mediaTable": [
            {
                "type": "image",
                "src": "./img/work/survivor-q-media-00.png"
            },
            {
                "type": "image",
                "src": "./img/work/survivor-q-media-01.png"
            }
        ],
        "description": {
            "type": "file",
            "src": 
`SurvivorQ is a 1v1 3D fighting game made with three of my friends in 1 week. It is my second game made with Unity.

| Feature   | Description |
| --------- | ------- |
| 3D Character Controller | A simple raycast-based character controller. |

`}
    }
];

export default works;