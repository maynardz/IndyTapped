import React from 'react';
import background from '../assets/wood.jpg';
import logo from '../assets/indy_tapped_black.png';
import styled from 'styled-components';
import Brewery from '../breweries/Brewery';

const BackgroundImage = styled.div`
background-image: url(${background});
background-repeat: no-repeat;
background-size: 100%;
display: block;
height: 55em;
margin: 0 auto;
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : landscape) {
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

/* iPhone 4 ----------- */
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
    
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
    
    /* iPhone 5 ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
    
@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

/* iPads (portrait and landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
    
    /* iPads (landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
    
    /* iPads (portrait) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
    /**********
    iPad 3
    **********/
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
    
    @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
`;

const Logo = styled.img`
vertical-align: middle;
height: 17em;
width: 17em;
margin: 0 auto

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    height: 100px;
    width: 100px;
}

@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : landscape) {
    height: 100px;
    width: 100px;
}

/* iPhone 4 ----------- */
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
    height: 100px;
    width: 100px;
}
    
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
    height: 100px;
    width: 100px;
}
    
    /* iPhone 5 ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
    height: 100px;
    width: 100px;
}
    
@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
    height: 100px;
    width: 100px;
}

/* iPads (portrait and landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
    height: 100px;
    width: 100px;
}
    
    /* iPads (landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
    height: 100px;
    width: 100px;
}
    
    /* iPads (portrait) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {
    height: 100px;
    width: 100px;
}

    /**********
    iPad 3
    **********/
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
    height: 100px;
    width: 100px;
}
    
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
    height: 100px;
    width: 100px;
}
`;

const ItemsLeft = styled.p`
display: inline;
font-family: 'Raleway', sans-serif;
font-size: 30px;
margin-left: 3.75em;
margin-right: 3.75em;

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 12px;
    justify-content: center;
    margin-left: 1.2em;
    margin-right: 1.2em;
}

@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : landscape) {
    font-size: 12px;
    text-align: center;
    margin-left: 1.2em;
    margin-right: 1.2em;
}

/* iPhone 4 ----------- */
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
    font-size: 12px;
    text-align: center;
    margin-left: 1.2em;
    margin-right: 1.2em;
}
    
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
    font-size: 12px;
    text-align: center;
    margin-left: 1.2em;
    margin-right: 1.2em;
}
    
    /* iPhone 5 ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
    font-size: 12px;
    text-align: center;
    margin-left: 1.2em;
    margin-right: 1.2em;
}
    
@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
    font-size: 12px;
    text-align: center;
    margin-left: 1.2em;
    margin-right: 1.2em;
}

/* iPads (portrait and landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
    font-size: 12px;
    text-align: center;
    margin-left: 1.2em;
    margin-right: 1.2em;
}
    
    /* iPads (landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
    font-size: 12px;
    text-align: center;
    margin-left: 1.2em;
    margin-right: 1.2em;
}
    
    /* iPads (portrait) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {
    font-size: 12px;
    text-align: center;
    margin-left: 1.2em;
    margin-right: 1.2em;
}

    /**********
    iPad 3
    **********/
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
    font-size: 12px;
    text-align: center;
    margin-left: 1.2em;
    margin-right: 1.2em;
}
    
    @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
        font-size: 12px;
        text-align: center;
        margin-left: 1.2em;
        margin-right: 1.2em;
}
`;

const ItemsRight = styled.p`
display: inline;
font-family: 'Raleway', sans-serif;
font-size: 30px;
margin-left: 3.75em;
margin-right: 3.75em;

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 12px;
    margin-left: 1.2em;
    margin-right: 1.2em;
}

@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : landscape) {
    font-size: 12px;
    margin-left: 1.2em;
    margin-right: 1.2em;
}

/* iPhone 4 ----------- */
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
    font-size: 12px;
    margin-left: 1.2em;
    margin-right: 1.2em;
}
    
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
    font-size: 12px;
    margin-left: 1.2em;
    margin-right: 1.2em;
}
    
    /* iPhone 5 ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
    font-size: 12px;
    margin-left: 1.2em;
    margin-right: 1.2em;
}
    
@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
    font-size: 12px;
    margin-left: 1.2em;
    margin-right: 1.2em;
}

/* iPads (portrait and landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
    font-size: 12px;
    margin-left: 1.2em;
    margin-right: 1.2em;
}
    
    /* iPads (landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
    font-size: 12px;
    margin-left: 1.2em;
    margin-right: 1.2em;
}
    
    /* iPads (portrait) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {
    font-size: 12px;
    margin-left: 1.2em;
    margin-right: 1.2em;
}

    /**********
    iPad 3
    **********/
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
    font-size: 12px;
    margin-left: 1.2em;
    margin-right: 1.2em;
}
    
    @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
        font-size: 12px;
        margin-left: 1.2em;
        margin-right: 1.2em; 
}
`;

const Splash = (props) => {
    return (
        <div>
            <div>
                <ItemsLeft>Breweries</ItemsLeft>
                <ItemsLeft>News</ItemsLeft>
                    <Logo src={logo} />
                <ItemsRight>About</ItemsRight>
                <ItemsRight>Events</ItemsRight>
            </div>
            <div>
                <BackgroundImage >
                    <Brewery token={props.token} />
                </BackgroundImage>
            </div>
        </div>
    )
}

export default Splash;