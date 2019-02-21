import React from 'react';

const works = [
    {
        "type": "game",
        "title": "Gerritory",
        "img": "./img/work/gerritory-preview.png",
        "gif": "./img/work/gerritory-preview.gif",
        "date": "2017.1 - NOW",
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
        "modal": 
        <div>
            <div>EasingSystem: something simliar to DOTween, let users play easing animation easily (put a gif to show it)</div>
            <div>LayeredAudioSystem: sort audio into layers so player can adjust volume for different layers (ex. sound effect, music)</div>
            <div>CollectablesEditor: make use of Unity Editor API to create a Custom Editor for editing in game collectables</div>
            <div>GenericFiniteStateMachine: base class for various systems that have complex state transitions</div>
            <div>SceneLoadingSystem: besides Unity built-in scene management, add a task manager that can handle tasks assigned from other system during scene loading (ex. procedurally generating level, syncing level across internet)</div>
            <div>Some special effects using shader</div>
            <div>Oh! By the way, I made this trailer using Adobe Premiere</div>
        </div>
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
        "modal": <div></div>
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
        "modal": <div></div>
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
        "modal": <div></div>
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
        "modal": <div></div>
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
        "modal": <div></div>
    },
    {
        "type": "tool",
        "title": "Many-Worlds Browsing for Control of Multibody Dynamics in Unity",
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
        "modal": <div></div>
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
        "modal": <div></div>
    },
    {
        "type": "game",
        "title": "SurvivorQ",
        "img": "./img/work/survivor-q-preview.png",
        "gif": "./img/work/survivor-q-preview.gif",
        "date": "2016.1 - 2016.1",
        "job": "Designer, Programmer",
        "team": "3",

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
        "modal": <div></div>
    }
];

export default works;