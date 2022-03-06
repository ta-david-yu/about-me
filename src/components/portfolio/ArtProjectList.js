import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import withWindowSize from '../withWindowSize';
import { ReactPhotoCollage } from "react-photo-collage";

import Constants from "./Constants";

import '../../css/Portfolio.css';

/** 
 * A component that shows a list of artworks in a collage, used by ProjectListPage
 */
class ArtProjectList extends Component {

    render() {
        
        const collageMaxWidth = 720;
        const collageTopMaxHeight = 384;

        let collageWidth = collageMaxWidth;
        let collageTopHeight = collageTopMaxHeight;

        if (window.innerWidth * 0.8 < collageMaxWidth)
        {
            collageWidth = window.innerWidth * 0.8;
            collageTopHeight = collageTopMaxHeight * 0.8;
        }

        const artCollage = {
            width: collageWidth + 'px',
            height: [collageTopHeight + 'px', '192px'],
            layout: [1, 4],
            photos: [
                { src: "./img/art/Wolf-Fullmoon-Lowerx4.png"},
                { src: "./img/art/TreeMoonCat.png"},
                { src: "./img/art/stranded-social-media.png"},
                { src: "./img/art/MissYouDayNNight-social-media-x2.png"},
                { src: "./img/art/ootm-social-media-x2.png"}
            ]
        }

        let lgContainerSpan = (this.props.windowWidth > 1600)? 7 : 12;

        return (
            <div>
                <Grid 
                container
                spacing={16}
                direction="column"
                justify="center"
                alignItems="center">
                    <Grid item lg={lgContainerSpan} md={12} sm={12} xs={12}>
                        <div>
                            <div className="page-title left show">artworks</div>
                            <div className="page-description">some pixel art pieces I drew</div>
                        </div>
                    </Grid>
                    <Grid item lg={lgContainerSpan} md={12} sm={12} xs={12}>
                        <ReactPhotoCollage {...artCollage}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withWindowSize(ArtProjectList);