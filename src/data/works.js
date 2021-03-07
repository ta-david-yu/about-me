import React from 'react';

import Gerritory from './Gerritory';
import RollingRocker_EagleSimulator from './RollingRocker_EagleSimulator';
import HeeXHoo from './HeeXHoo';
import Boomeranger from './Boomeranger';
import TwoDPlatformerHunter from './2DPlatformerHunter';

const works = [
    {
        "type": "game",
        "title": "Gerritory",
        "img": "./img/work/gerritory-preview.png",
        "gif": "./img/work/gerritory-preview.gif",
        "date": "2017.1 - present",
        "job": "Designer, Programmer, Visual Design",
        "team": "4",

        "mediaTable": Gerritory.medias,
        "description": {
            "type": "file",
            "src": Gerritory.description
        },
        "information": {
            "type": "file",
            "src": Gerritory.information
        }
    },

    {
        "type": "game",
        "title": "Rolling Rocker & Eagle Simulator",
        "img": "./img/work/es-rr-preview.png",
        "gif": "./img/work/es-rr-preview.gif",
        "date": "2017.3 - 2017.4",
        "job": "Designer, Programmer",
        "team": "1",

        "mediaTable": RollingRocker_EagleSimulator.medias,
        "description": {
            "type": "file",
            "src": RollingRocker_EagleSimulator.description
        },
        "information": {
            "type": "file",
            "src": RollingRocker_EagleSimulator.information
        }
    },

    {
        "type": "game",
        "title": "Hee X Hoo",
        "img": "./img/work/hee-hoo-preview.png",
        "gif": "./img/work/hee-hoo-preview.gif",
        "date": "global game jam 2018",
        "job": "Level Designer, Programmer",
        "team": "5",

        "mediaTable": HeeXHoo.medias,
        "description": {
            "type": "file",
            "src": HeeXHoo.description
        },
        "information": {
            "type": "file",
            "src": HeeXHoo.information
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

        "mediaTable": Boomeranger.medias,
        "description": {
            "type": "file",
            "src": Boomeranger.description 
        },
        "information": {
            "type": "file",
            "src": Boomeranger.information
        }
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

        "mediaTable": [],
        "description": {
            "type": "file",
            "src": ""
        },
        "information": {
            "type": "file",
            "src": ""
        }
    },

    {
        "type": "tool",
        "title": "2D Platformer Hunter",
        "img": "./img/work/platformer-preview.png",
        "gif": "./img/work/platformer-preview.gif",
        "date": "2018.8 - present",
        "job": "Programmer",
        "team": "1",

        "mediaTable": TwoDPlatformerHunter.medias,
        "description": {
            "type": "file",
            "src": TwoDPlatformerHunter.description
        },
        "information": {
            "type": "file",
            "src": TwoDPlatformerHunter.information
        }
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

        "mediaTable": [],
        "description": {
            "type": "file",
            "src": ""
        },
        "information": {
            "type": "file",
            "src": ""
        }
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