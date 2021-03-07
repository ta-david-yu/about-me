import React from 'react';

export default {
medias: [
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

description: 
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

`,

information:
<div>
    <a href="https://github.com/ta-david-yu/HCI_OpenCVproj"><img alt="gh-icon" src="./img/github-x26.png" className="icon-26-no-hover" /></a>
</div>
}