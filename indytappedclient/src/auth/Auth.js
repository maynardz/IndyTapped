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
`;

const Logo = styled.img`
height: 55em;
width: 55em;
margin: 0 auto:
display: block;
z-index: 1;
`;

const Confirm = styled.p`
margin-top: -14em
margin-left: 12.75em;
font-size: 25px;
`;

const LogSign = styled.div`
margin-top: -27em;
`

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
                            <Signup setToken={this.props.setToken} />
                        </Col>
                        <Col md="3" className="login-col">
                            <Login setToken={this.props.setToken} />
                        </Col>
                    </Row>
                </LogSign>
            )
        } else if (this.state.isNot21) {
            return (
                <p>sorry</p>
            )
        } else {
            return (
                <div>
                    <div>
                        <Confirm>Please confirm that you are over 21 years old.</Confirm>
                    </div>
                    <div>
                        <Button outline color="secondary" size="lg" onClick={this.isTwentyOne}>Yes</Button>
                        <Button outline color="secondary" size="lg" onClick={this.isNotTwentyOne}>No</Button>
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