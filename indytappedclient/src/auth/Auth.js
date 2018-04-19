import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import Login from './Login';
import Signup from './Signup';

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
                <Container className="auth-container">

                    <Row>
                        <Col md="6">
                            <Signup setToken={this.props.setToken}/>
                        </Col>
                        <Col md="6" className="login-col">
                            <Login setToken={this.props.setToken}/>
                        </Col>
                    </Row>
                </Container>
            )
        } else if (this.state.isNot21) {
            return (
                <p>sorry</p>
            )
        } else {
            return (
                <div>
                    <p>Please confirm that you are over 21 years old.</p>
                    <Button color="secondary" onClick={this.isTwentyOne}>Yes</Button>
                    <Button color="secondary" onClick={this.isNotTwentyOne}>No</Button>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.ageCheck()}
            </div>
        )
    }
}

export default Auth;