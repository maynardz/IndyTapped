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
                            <option value="Half Moon">Half Moon</option>
                            <option value="Heavenly Goat Brewing Co.">Heavenly Goat Brewing Co.</option>
                            <option value="Hoosier Brewing Co.">Hoosier Brewing Co.</option>
                            <option value="Hop River Brewing Co.">Hop River Brewing Co.</option>
                            <option value="HopLore Brewing Co.">HopLore Brewing Co.</option>
                            <option value="Hunter's Brewing Co.">Hunter's Brewing Co.</option>
                            <option value="Iechyd Da Brewing Co.">Iechyd Da Brewing Co.</option>
                            <option value="Indiana City Brewing Co.">Indiana City Brewing Co.</option>
                            <option value="Ironwood Brewing Co.">Ironwood Brewing Co.</option>
                            <option value="Junk Ditch Brewing Co.">Junk Ditch Brewing Co.</option>
                            <option value="Kopacetic Beer Factory">Kopacetic Beer Factory</option>
                            <option value="Lafayette Brewing Co.">Lafayette Brewing Co.</option>
                            <option value="LaOtto Brewing">LaOtto Brewing</option>
                            <option value="Mad Anthony Brewing Co.">Mad Anthony Brewing Co.</option>
                            <option value="Mashcraft Brewing">Mashcraft Brewing</option>
                            <option value="Metazoa Brewing Co.">Metazoa Brewing Co.</option>
                            <option value="Moontown Brewing Co.">Moontown Brewing Co.</option>
                            <option value="New Albanian Brewing Co.">New Albanian Brewing Co.</option>
                            <option value="New Corner Brewing Co.">New Corner Brewing Co.</option>
                            <option value="New Oberpfalz Brewing">New Oberpfalz Brewing</option>
                            <option value="Noble Order Brewing Co.">Noble Order Brewing Co.</option>
                            <option value="Norris English Pub">Norris English Pub</option>
                            <option value="Off Square Brewing">Off Square Brewing</option>
                            <option value="Orthocity Brewery & Smokehouse">Orthocity Brewery & Smokehouse</option>
                            <option value="Pax Verum Brewing">Pax Verum Brewing</option>
                            <option value="People's Brewing Co.">People's Brewing Co.</option>
                            <option value="Planetary Brewing Co.">Planetary Brewing Co.</option>
                            <option value="Pokro Brewing Co.">Pokro Brewing Co.</option>
                            <option value="Quaff On! Brewing Co.">Quaff On! Brewing Co.</option>
                            <option value="Raintree Brewing Co.">Raintree Brewing Co.</option>
                            <option value="Redemption Aleworks">Redemtion Aleworks</option>
                            <option value="Rock Bottom Brewing">Rock Bottom Brewing</option>
                            <option value="Round Town Brewing">Round Town Brewing</option>
                            <option value="Saint Benedict's Brew Works">Saint Benedict's Brew Works</option>
                            <option value="Salt Creek Brewery">Salt Creek Brewery</option>
                            <option value="Scarlet Lane Brewing">Scarlet Lane Brewing</option>
                            <option value="Schnitz Brewery & Pub">Schnitz Brewery & Pub</option>
                            <option value="Shale Creek Brewing">Shale Creek Brewing</option>
                            <option value="St. John Malt Brothers Brewing">St. John Malt Brothers Brewing</option>
                            <option value="St. Joseph Brewery">St. Joseph Brewery</option>
                            <option value="Summit City Brewerks">Summit City Brewerks</option>
                            <option value="Sun King Brewing Co.">Sun King Brewing Co.</option>
                            <option value="Taxman Brewing Co.">Taxman Brewing Co.</option>
                            <option value="Teays River Brewing & Public House">Teays River Brewing & Public House</option>
                            <option value="Terre Haute Brewing Co.">Terre Haute Brewing Co.</option>
                            <option value="The Devil's Trumpet Brewing Co.">The Devil's Trumpet Brewing Co.</option>
                            <option value="The Ram Restaurant & Brewery">The Ram Restaurant & Brewery</option>
                            <option value="The Seymour Brewing Co.">The Seymour Brewing Co.</option>
                            <option value="The Sour Note Brewing">The Sour Note Brewing</option>
                            <option value="The Tap">The Tap</option>
                            <option value="The Vincennes Brewing Co.">The Vincennes Brewing Co.</option>
                            <option value="Thr3e Wise Men Brewery">Thr3e Wise Men Brewery</option>
                            <option value="Three Floyds Brewing Co.">Three Floyds Brewing Co.</option>
                            <option value="Tin Man Brewing Co.">Tin Man Brewing Co.</option>
                            <option value="Triton Brewing">Triton Brewing</option>
                            <option value="Trubble Brewing">Trubble Brewing</option>
                            <option value="Twenty Below">Twenty Below</option>
                            <option value="TwoDEEP Brewing Co.">TwoDEEP Brewing Co.</option>
                            <option value="Union Brewing">Union Brewing</option>
                            <option value="Upland Brewing Co.">Upland Brewing Co.</option>
                            <option value="Urban Vines Brewery">Urban Vines Brewery</option>
                            <option value="Wabash Brewing Co.">Wabash Brewing Co.</option>
                            <option value="Wasser Brewing Co.">Wasser Brewing Co.</option>
                            <option value="Wooden Bear Brewing Co.">Wooden Bear Brewing Co.</option>
                            <option value="Zorn Brew Works Co.">Zorn Brew Works Co.</option>
                            <option value="Zwanzigz Pizza & Brewing">Zwanzigz Pizza & Brewing</option>
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