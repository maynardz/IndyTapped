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