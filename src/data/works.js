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
`Gerritory is a multiplayer party game I made with three of my friends using Unity Engine.
Some of the notable features implemented by me:

| Feature   | Description |
| --------- | ------- |
| Tween Manager | Simliar to DOTween but simplified, enable users to play easing animation sequence easily. |
| Layered Audio System | Sort audio into layers so player can adjust volume for different layers. |
| Collectables Editor | Make use of the Unity Editor API to create a custom editor for editing in-game collectables. |
| Asynchornous Task Queue | Users can push task to task queue which will be executed during loading scene asynchornously, e.g., loading assetbundles, procedural content generation. |
| Shader Effects | Some special effects using UnityShader. |

Other non-programming stuff:

| Feature   | Description |
| --------- | ------- |
| Gameplay Design | Design core game mechanics. |
| Visual Design | In game model design & ui design. |
| Visual Feedback | Add subtle motions in game to make it feel juicy. |
| 3D Modeling | Create game models using blender. |
| Sound Effect | Audio recording & mixing for several in-game sound effects. |
| Game Trailer Editing | Using Adobe Premiere. |

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
| Character Controller & AI | A generic character controller and enemy AI. |

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
| Camera Controller | A 3D camera system that can swapped between MMORPG style camera and TPS style camera. |

Other non-programming stuff:

| Feature   | Description |
| --------- | ------- |
| 3D Modeling | Character models using Magica Voxel. |
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
Since there is only one artist in our team and the rest of us are programmers, I spent all my time implmenting lighting system.

| Feature   | Description |
| --------- | ------- |
| 2D dynamic lighting system | A raycast-based lighting system. |

`}
    },
    {
        "type": "tool",
        "title": "DY Engine",
        "img": "./img/work/_temp-preview.png",
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
        "description": <div></div>
    },
    {
        "type": "tool",
        "title": "mwb in Unity",
        "img": "./img/work/_temp-preview.png",
        "gif": "",
        "date": "2017.6 - 2018.6",
        "job": "Programmer",
        "team": "2",

        "mediaTable": [
            {
                "type": "video",
                "src": "https://youtu.be/wZ_4xxnEhlU"
            }
        ],
        "description": <div></div>
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