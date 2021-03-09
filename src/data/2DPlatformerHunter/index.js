import React from 'react';

export default {
medias: [
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

description: 
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

`,

information:
<div>
    <div style={{textAlign: 'center'}}>
        <a href="https://github.com/ta-david-yu/2D-Platformer-Hunter"><img alt="gh-icon" src="./img/github-x26.png" className="icon-26-no-hover" /></a>
    </div>
</div>
}