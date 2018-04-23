import React from 'react';
import { Button, Row, Col } from 'reactstrap';
import Login from './Login';
import Signup from './Signup';
import styled from 'styled-components';
import background from '../assets/wood.jpg';
import logo from '../assets/indy_tapped.png';

const BackgroundImage = styled.div`
background-image: url(${background});
background-repeat: no-repeat;
background-size: 100%
display: block;
margin: 0 auto;
z-index: 0;
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    -moz-background-size: cover;
    -o-background-size: cover;
    overflow: hidden;
}
@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : landscape) {
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
`;

const Logo = styled.img`
height: 55em;
width: 55em;
z-index: 1;
position: relative;
margin-left: 23em;
margin-top: -5em;
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display: block;
    margin: 0 auto;
    height: 10em;
    width: 10em;
}
@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : landscape) {
    display: block;
    margin: 0 auto;
    height: 10em;
    width: 10em;
}
`;

const Confirm = styled.p`
margin-top: -2em;
font-size: 25px;
text-align: center;
font-family: 'Raleway', sans-serif;
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 15px;
    margin-top: 5em;
}
@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : landscape) {
    font-size: 15px;
    margin-top: 5em;
}
`;

const LogSign = styled.div`
text-align: center
margin-top: -7em;
z-index: 2;
position: relative;
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 15px;
    margin-top: 5em;
    width: 75%;
    display: block;
    margin: 0 auto;
}
@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : landscape) {
    font-size: 15px;
    margin-top: 5em;
    width: 75%;
    display: block;
    margin: 0 auto;
}
`;

const YesNo = styled.div`
text-align: center;
}
`;

const Giphy = styled.p`
position: absolute;
top: 90%;
left: 37%;
margin: -25px 0px 0px -25px;
margin-top: -5.5em;
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    top: 43%;
    left: 0%;
}
@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : landscape) {
    top: 75%;
    left: 20%;
}
`;

class Auth extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            is21: false,
            isNot21: false
        }
    }

    isTwentyOne = () => {
        this.setState({ is21: true })
    }

    isNotTwentyOne = () => {
        this.setState({ isNot21: true })
    }

    ageCheck = () => {
        if (this.state.is21) {
            return (
                <LogSign>
                    <Row>
                        <Col md="3">
                        </Col>
                        <Col md="3">
                            <Signup setToken={this.props.setToken} />
                        </Col>
                        <Col md="3" className="login-col">
                            <Login setToken={this.props.setToken} />
                        </Col>
                        <Col md="3">
                        </Col>
                    </Row>
                </LogSign>
            )
        } else if (this.state.isNot21) {
            return (
                <Giphy><iframe src="https://giphy.com/embed/JyW51lx5XMDgQ" width="480" height="280" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/john-wayne-JyW51lx5XMDgQ"></a></p></Giphy>
            )
        } else {
            return (
                <div>
                    <div>
                    <Col lg="12">
                        <Confirm>Please confirm that you are over 21 years old.</Confirm>
                    </Col>
                    <YesNo>
                    <Col lg="12">
                        <Button outline color="secondary" size="lg" onClick={this.isTwentyOne}>Yes</Button>
                        <Button outline color="secondary" size="lg" onClick={this.isNotTwentyOne}>No</Button>
                    </Col>
                    </YesNo>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <BackgroundImage >
                    <Logo src={logo} />
                </BackgroundImage>

                {this.ageCheck()}
            </div>
        )
    }
}

export default Auth;