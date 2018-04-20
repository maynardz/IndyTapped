import React from 'react';
import background from '../assets/wood.jpg';
import logo from '../assets/indy_tapped_black.png';
import styled from 'styled-components';
import Brewery from '../breweries/Brewery';

const BackgroundImage = styled.div`
background-image: url(${background});
background-size: 100vw 100vh;
background-attachment: fixed;
background-repeat: no-repeat;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1000;
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