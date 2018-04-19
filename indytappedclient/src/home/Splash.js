import React from 'react';
import background from '../assets/wood.jpg';
import logo from '../assets/indy_tapped_black.png';
import styled from 'styled-components';

const BackgroundImage = styled.div`
background-image: url(${background});
background-repeat: no-repeat;
background-size: 100%
display: block;
height: 55em;
margin: 0 auto;
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
                </BackgroundImage>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Splash;