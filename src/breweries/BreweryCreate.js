import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import styled from 'styled-components';

const Title = styled.h3`
color: white;
text-align: center;
font-family: 'Raleway', sans-serif;
text-shadow: 1.5px 1.5px #000000
`;

const Center = styled.div`
text-align: center;
`;

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
        fetch('https://zsm-indytappedclient.herokuapp.com/indytapped/userbreweries', {
            method: 'POST',
            body: JSON.stringify({ userbreweries: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((userbreweriesData) => {
                this.props.updateBreweriesArray()
                this.setState({
                    brewery: '',
                    rating: ''
                })
            })
            event.preventDefault()
    }

    render() {
        return (
            <div>
                <Title> Add it to your list of visited breweries </Title>
                <hr />
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Input id="brewery" type="text" name="brewery" value={this.state.Brewery} placeholder="Enter a brewery" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="select" name="rating" id="rating" value={this.state.Rating} onChange={this.handleChange} placeholder="Type">
                            <option>Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Input>
                    </FormGroup>
                    <Center>
                    <Button type="submit" color="secondary"> Submit </Button>
                    </Center>
                </Form>
            </div>  
        )
    }
}

export default BreweryCreate;