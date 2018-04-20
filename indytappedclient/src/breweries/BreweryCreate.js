import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class BreweryCreate extends Component {
    constructor() {
        super()
        this.state = {
            brewery: '',
            rating: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log(this.state)
        fetch('http://localhost:3000/indytapped/userbreweries', {
            method: 'POST',
            body: JSON.stringify({ userbreweries: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then(response => response.json())
            .then(data => console.log(data));
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h3>Enter a Brewery You'd Like to Visit</h3>
                <hr />
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="brewery">Brewery</Label>
                        <Input id="brewery" type="text" name="brewery" value={this.state.Brewery} placeholder="enter a brewery" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="rating">Rating</Label>
                        <Input type="select" name="rating" id="rating" value={this.state.Rating} onChange={this.handleChange} placeholder="Type">
                            <option></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Input>
                    </FormGroup>
                    <Button type="submit" color="primary"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default BreweryCreate;