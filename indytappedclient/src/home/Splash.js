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
/* iPhone 5 ----------- */
    @media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;    }
    
    @media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;    }
    
    /* iPhone 6 ----------- */
    @media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;    }
    
    @media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;    }
    
    /* iPhone 6+ ----------- */
    @media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;    }
    
    @media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;    }
    
    /* Samsung Galaxy S3 ----------- */
    @media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;    }
    
    @media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;    }
    
    /* Samsung Galaxy S4 ----------- */
    @media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;    }
    
    @media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;    }
    
    /* Samsung Galaxy S5 ----------- */
    @media only screen and (min-device-width: 360px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;    }
    
    @media only screen and (min-device-width: 360px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;    }
`;

const Logo = styled.img`
display: block;
height: 17em;
width: 17em;
margin: 0 auto
`;

const Splash = (props) => {
    return (
        <div>
            <div>
                <Logo src={logo} />
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