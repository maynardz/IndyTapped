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
        console.log(this.state)
        fetch('http://localhost:3000/indytapped/userbreweries', {
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
                        <Input id="brewery" type="select" name="brewery" value={this.state.Brewery} placeholder="Select a brewery" onChange={this.handleChange} >
                            <option>Choose a Brewery</option>
                            <option value="18th St Brewery">18th St Brewery</option>
                            <option value="450 North Brewing Co.">450 North Brewing Co.</option>
                            <option value="Back Road Brewery">Back Road Brewery</option>
                            <option value="Backstep Brewing Co.">Backstep Brewing Co.</option>
                            <option value="Bad Bad Brewery">Bad Dad Brewery</option>
                            <option value="Bare Hands Brewery">Bare Hands Brewery</option>
                            <option value="Barley Island Brewing Co.">Barley Island Brewing Co.</option>
                            <option value="Basket Case Brewing Co.">Basket Case Brewing Co.</option>
                            <option value="Bier Brewery & Taproom">Bier Brewery & Taproom</option>
                            <option value="Big Leaf Brewing">Big Leaf Brewing</option>
                            <option value="Big Lug Canteen">Big Lug Canteen</option>
                            <option value="Big Woods">Big Woods</option>
                            <option value="Black Acre Brewing & Taproom">Black Acre Brewing & Taproom</option>
                            <option value="Black Circle Brewing Co.">Black Circle Brewing Co.</option>
                            <option value="Black Swan Brewpub">Black Swan Brewpub</option>
                            <option value="Blind Owl Brewery">Blind Owl Brewery</option>
                            <option value="Bloomington Brewing Co.">Bloomington Brewing Co.</option>
                            <option value="Brew Link Brewing Co.">Brew Link Brewing Co.</option>
                            <option value="Broad Ripple Brewpub">Broad Ripple Brewpub</option>
                            <option value="Burn 'Em Brewing">Burn 'Em Brewing</option>
                            <option value="Byway Brewing Co.">Byway Brewing Co.</option>
                            <option value="Cannon Ball Brewing Co.">Cannon Ball Brewing Co.</option>
                            <option value="Carson's Brewery">Carson's Brewery</option>
                            <option value="Cedar Creek Winery & Brewery">Cedar Creek Winery & Brewery</option>
                            <option value="Centerpoint Brewing Co.">Centerpoint Brewing Co.</option>
                            <option value="Chapman's Brewing Co.">Chapman's Brewing Co.</option>
                            <option value="Chilly Water Brewing Co.">Chilly Water Brewing Co.</option>
                            <option value="Crasian Brewing Co.">Crasian Brewing Co.</option>
                            <option value="Crooked Ewe">Crooked Ewe</option>
                            <option value="Crown Brewing">Crown Brewing</option>
                            <option value="Danny Boy Beer Works">Danny Boy Beer Works</option>
                            <option value="Daredevil Brewing Co.">Daredevil Brewing Co.</option>
                            <option value="Deer Creek Brewery">Deer Creek Brewery</option>
                            <option value="Deviate Brewery">Deviate Brewery</option>
                            <option value="Evansville Brewhouse">Evansville Brewhouse</option>
                            <option value="Evil Czech Brewery">Evil Czech Brewery</option>
                            <option value="Flat 12 Bierwerks">Flat 12 Bierwerks</option>
                            <option value="Flix Brewhouse">Flix Brewhouse</option>
                            <option value="Floyd County Brewing Company">Floyd County Brewing Company</option>
                            <option value="Fountain Square Brewing">Fountain Square Brewing</option>
                            <option value="Four Day Ray Brewing">Four Day Ray Brewing</option>
                            <option value="Function Brewing Co.">Function Brewing Co.</option>
                            <option value="GnomeTown Brewing Co.">GnomeTown Brewing Co.</option>
                            <option value="Goshen Brewing Co.">Goshen Brewing Co.</option>
                            <option value="Grand Junction Brewing Co.">Grand Junction Brewing Co.</option>
                        </Input>
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