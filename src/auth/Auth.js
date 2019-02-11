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
/* iPhone 4 ----------- */
    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
    -moz-background-size: cover;
    -o-background-size: cover;
    overflow: hidden;    }
    
    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
    -moz-background-size: cover;
    -o-background-size: cover;
    overflow: hidden;    }
    
    /* iPhone 5 ----------- */
    @media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
    -moz-background-size: cover
    -o-background-size: cover;
    overflow: hidden;    }
    
    /* iPhone 6 ----------- */
    @media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
    -moz-background-size: cover;
    -o-background-size: cover;
    overflow: hidden;    }
    
    @media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
    -moz-background-size: cover;
    -o-background-size: cover;
    overflow: hidden;    }
    
    /* iPhone 6+ ----------- */
    @media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
    -moz-background-size: cover;
    -o-background-size: cover;
    overflow: hidden;    }
    
    @media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
    -moz-background-size: cover;
    -o-background-size: cover;
    overflow: hidden;    }
    
    /* Samsung Galaxy S3 ----------- */
    @media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
    -moz-background-size: cover;
    -o-background-size: cover;
    overflow: hidden;    }
    
    @media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
    -moz-background-size: cover;
    -o-background-size: cover;
    overflow: hidden;    }
    
    /* Samsung Galaxy S4 ----------- */
    @media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
    -moz-background-size: cover;
    -o-background-size: cover;
    overflow: hidden;    }
    
    @media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
    -moz-background-size: cover;
    -o-background-size: cover;
    overflow: hidden;    }
    
    /* Samsung Galaxy S5 ----------- */
    @media only screen and (min-device-width: 360px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
    -moz-background-size: cover;
    -o-background-size: cover;
    overflow: hidden;    }
    
    @media only screen and (min-device-width: 360px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
    -moz-background-size: cover;
    -o-background-size: cover;
    overflow: hidden;    }

    /* iPads (portrait and landscape) ----------- */
    @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
    -moz-background-size: cover;
    -o-background-size: cover;
    overflow: hidden;    }    
    
    /* iPads (landscape) ----------- */
    @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
    -moz-background-size: cover;
    -o-background-size: cover;
    overflow: hidden;    }    
    
    /* iPads (portrait) ----------- */
    @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {
    -moz-background-size: cover;
    -o-background-size: cover;
    overflow: hidden;    }    
    /**********
    iPad 3
    **********/
    @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
    -moz-background-size: cover;
    -o-background-size: cover;
    overflow: hidden;    }    
    
    @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
    -moz-background-size: cover;
    -o-background-size: cover;
    overflow: hidden;    }    
`;

const Logo = styled.img`
height: 55em;
width: 55em;
z-index: 1;
margin-left: 23em;
margin-top: -5em;

@media only screen and (min-width: 768px) {
    
}

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
/* iPhone 4 ----------- */
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
    display: block;
    margin: 0 auto;
    height: 10em;
    width: 10em;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
    display: block;
    margin: 0 auto;
    height: 10em;
    width: 10em;
}

/* iPhone 5 ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
    display: block;
    margin: 0 auto;
    height: 10em;
    width: 10em;
}

@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
    display: block;
    margin: 0 auto;
    height: 10em;
    width: 10em;
}

/* iPhone 6 ----------- */
@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
    display: block;
    margin: 0 auto;
    height: 10em;
    width: 10em;
}

@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
    display: block;
    margin: 0 auto;
    height: 10em;
    width: 10em;
}

/* iPhone 6+ ----------- */
@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
    display: block;
    margin: 0 auto;
    height: 10em;
    width: 10em;
}

@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
    display: block;
    margin: 0 auto;
    height: 10em;
    width: 10em;
}

/* Samsung Galaxy S3 ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
    display: block;
    margin: 0 auto;
    height: 10em;
    width: 10em;
}

@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
    display: block;
    margin: 0 auto;
    height: 10em;
    width: 10em;
}

/* Samsung Galaxy S4 ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
    display: block;
    margin: 0 auto;
    height: 10em;
    width: 10em;
}

@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
    display: block;
    margin: 0 auto;
    height: 10em;
    width: 10em;
}

/* Samsung Galaxy S5 ----------- */
@media only screen and (min-device-width: 360px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
    display: block;
    margin: 0 auto;
    height: 10em;
    width: 10em;
}

@media only screen and (min-device-width: 360px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
    display: block;
    margin: 0 auto;
    height: 10em;
    width: 10em;
}


/* iPads (portrait and landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
    display: block;
    margin: 0 auto;
    height: 10em;
    width: 10em;}

/* iPads (landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
    display: block;
    margin: 0 auto;
    height: 10em;
    width: 10em;}

/* iPads (portrait) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {
    display: block;
    margin: 0 auto;
    height: 10em;
    width: 10em;}
/**********
iPad 3
**********/
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
    display: block;
    margin: 0 auto;
    height: 10em;
    width: 10em;}

@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
    display: block;
    margin: 0 auto;
    height: 10em;
    width: 10em;}
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

/* iPhone 4 ----------- */
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
    font-size: 15px;
    margin-top: 5em;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
    font-size: 15px;
    margin-top: 5em;
}

/* iPhone 5 ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
    font-size: 15px;
    margin-top: 5em;
}

@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
    font-size: 15px;
    margin-top: 5em;
}

/* iPhone 6 ----------- */
@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
    font-size: 15px;
    margin-top: 5em;
}

@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
    font-size: 15px;
    margin-top: 5em;
}

/* iPhone 6+ ----------- */
@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
    font-size: 15px;
    margin-top: 5em;
}

@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
    font-size: 15px;
    margin-top: 5em;
}

/* Samsung Galaxy S3 ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
    font-size: 15px;
    margin-top: 5em;
}

@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
    font-size: 15px;
    margin-top: 5em;
}

/* Samsung Galaxy S4 ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
    font-size: 15px;
    margin-top: 5em;
}

@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
    font-size: 15px;
    margin-top: 5em;
}

/* Samsung Galaxy S5 ----------- */
@media only screen and (min-device-width: 360px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
    font-size: 15px;
    margin-top: 5em;
}

@media only screen and (min-device-width: 360px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
    font-size: 15px;
    margin-top: 5em;
}


/* iPads (portrait and landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
    font-size: 15px;
    margin-top: 5em;    }
    
    /* iPads (landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
    font-size: 15px;
    margin-top: 5em;    }
    
    /* iPads (portrait) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {
    font-size: 15px;
    margin-top: 5em;    }
    /**********
    iPad 3
    **********/
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
    font-size: 15px;
    margin-top: 5em;    }
    
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
    font-size: 15px;
    margin-top: 5em;    }
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

/* iPhone 4 ----------- */
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
    font-size: 15px;
    margin-top: 5em;
    width: 75%;
    display: block;
    margin: 0 auto;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
    font-size: 15px;
    margin-top: 5em;
    width: 75%;
    display: block;
    margin: 0 auto;
}

/* iPhone 5 ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
    font-size: 15px;
    margin-top: 5em;
    width: 75%;
    display: block;
    margin: 0 auto;
}

@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
    font-size: 15px;
    margin-top: 5em;
    width: 75%;
    display: block;
    margin: 0 auto;
}

/* iPhone 6 ----------- */
@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
    font-size: 15px;
    margin-top: 5em;
    width: 75%;
    display: block;
    margin: 0 auto;
}

@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
    font-size: 15px;
    margin-top: 5em;
    width: 75%;
    display: block;
    margin: 0 auto;
}

/* iPhone 6+ ----------- */
@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
    font-size: 15px;
    margin-top: 5em;
    width: 75%;
    display: block;
    margin: 0 auto;
}

@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
    font-size: 15px;
    margin-top: 5em;
    width: 75%;
    display: block;
    margin: 0 auto;
}

/* Samsung Galaxy S3 ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
    font-size: 15px;
    margin-top: 5em;
    width: 75%;
    display: block;
    margin: 0 auto;
}

@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
    font-size: 15px;
    margin-top: 5em;
    width: 75%;
    display: block;
    margin: 0 auto;
}

/* Samsung Galaxy S4 ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
    font-size: 15px;
    margin-top: 5em;
    width: 75%;
    display: block;
    margin: 0 auto;
}

@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
    font-size: 15px;
    margin-top: 5em;
    width: 75%;
    display: block;
    margin: 0 auto;
}

/* Samsung Galaxy S5 ----------- */
@media only screen and (min-device-width: 360px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
    font-size: 15px;
    margin-top: 5em;
    width: 75%;
    display: block;
    margin: 0 auto;
}

@media only screen and (min-device-width: 360px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
    font-size: 15px;
    margin-top: 5em;
    width: 75%;
    display: block;
    margin: 0 auto;
}


/* iPads (portrait and landscape) ----------- */
    @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
    font-size: 15px;
    margin-top: 5em;

    display: block;
    margin: 0 auto;
    }
    
    /* iPads (landscape) ----------- */
    @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
    font-size: 15px;
    margin-top: 5em;

    display: block;
    margin: 0 auto;
    }
    
    /* iPads (portrait) ----------- */
    @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {
    font-size: 15px;
    margin-top: 5em;

    display: block;
    margin: 0 auto;
    }
    /**********
    iPad 3
    **********/
    @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
    font-size: 15px;
    margin-top: 5em;

    display: block;
    margin: 0 auto;
    }
    
    @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
    font-size: 15px;
    margin-top: 5em;

    display: block;
    margin: 0 auto;
    }
`;

const YesNo = styled.div`
text-align: center;
}
`;

const Space = styled.div`
padding: 1em;
display: inline
`;

const Giphy = styled.div`
font-size: 20px;
font-family: 'Raleway', sans-serif;
text-align: center;
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
                <Giphy>
                    <Row>
                        <Col md="3">
                        </Col>
                        <Col md="6">
                            <p>Sorry, you're not old enough to view this webpage</p>
                        </Col>
                        <Col md="3">
                        </Col>
                    </Row>
                </Giphy>
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
                                <Space>
                                    <Button outline color="secondary" size="lg" onClick={this.isTwentyOne}>Yes</Button>
                                </Space>
                                <Space>
                                    <Button outline color="secondary" size="lg" onClick={this.isNotTwentyOne}>No</Button>
                                </Space>
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