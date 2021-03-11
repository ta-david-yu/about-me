import React from 'react';
import Markdown from 'react-markdown';
import Collapsible from 'react-collapsible';

export default {
medias: [
    {
        "type": "video",
        "src": "https://youtu.be/Vsg9K_Cnhaw",
    },
    {
        "type": "image",
        "src": "./img/work/sry-nojumpforyou-00.png",
    },
    {
        "type": "image",
        "src": "./img/work/sry-nojumpforyou-01.png",
        "comment": ""
    },
    {
        "type": "image",
        "src": "./img/work/sry-nojumpforyou-02.png",
        "comment": ""
    },
],

information:
<div>
    <div style={{textAlign: 'center'}}>
        <div>
            <a href="https://functionoverflu.itch.io/sorry-no-jump-for-you"><img alt="itch-icon" src="./img/itchio-x26.png" className="icon-26" /></a>
        </div>
        <div>A 10-minute 2d puzzle platformer where you cannot jump.</div>
        <div>There are currently 16 levels in the game.</div>
        <div>I made this during my first semester at CGL.</div>
    </div>
    
    <div style={{textAlign: 'center', fontSize: '16px'}}>
        <div>--</div>
        <div>Music by <a href="http://loyaltyfreakmusic.com/about">Monplaisir</a></div>
        <div>Font by <a href="https://managore.itch.io/">Daniel Linssen</a></div>
    </div>


    <span style={{margin: '50px'}} />
    <div style={{textAlign: 'left', fontSize: '16px'}}>
        <Collapsible 
        trigger="more information +" 
        triggerWhenOpen="more information -"
        transitionTime='100'
        transitionCloseTime='100'>
            <Markdown children={`

Factsheet  

| | Information |
| --------- | ------- |
| Status | Prototype |
| Platforms | Windows PC |
| Genre | 2D puzzle platformer |
| Made with | Unity |
| Team | Ta David Yu |

`}/>
        </Collapsible>
    </div>
</div>,

description: 
``,
}