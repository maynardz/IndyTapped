import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import styled from 'styled-components';

const Title = styled.h4`
font-family: 'Raleway', sans-serif;
`;

class Signup extends Component{
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        //POST - fetch
        fetch("http://localhost:3000/indytapped/user", {
            method: 'POST',
            body: JSON.stringify({user: this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(response => response.json())
        .then(data => this.props.setToken(data.sessionToken))
        event.preventDefault();
    }

    validateSignUp = (event) => {
        this.setState({
            errorMessage: 'Fields must not be empty'
        })
        event.preventDefault();
    }

    render() {
        return(
            <div>
                <Title>Signup</Title>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Input name="username" type="text" placeholder="enter username" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" outline color="secondary">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default Signup;