import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class Login extends Component{
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
        fetch("http://localhost:3000/indytapped/login", {
            method: 'POST',
            body: JSON.stringify({user: this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(response => response.json())
        .then(data => this.props.setToken(data.sessionToken)) 
        //Save our token
        //Prevent default
        event.preventDefault()
}

    render() {
        return(
            <div>
                <h3>Login</h3>
                <hr />
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

export default Login;