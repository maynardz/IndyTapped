import React, { Component } from 'react';
import BreweryResults from './BreweryResults';
import styled from 'styled-components';
import { Form, FormGroup, Input, Col, Row } from 'reactstrap';
import BreweryCreate from './BreweryCreate';
import BreweryTable from './BreweryTable';
import BreweryEdit from './BreweryEdit';

const Padding = styled.div`
padding: 5em;
`;

const Title = styled.h3`
color: white;
text-align: center;
font-family: 'Raleway', sans-serif;
text-shadow: 1.5px 1.5px #000000
`;

class Brewery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],
            filteredResults: [],
            userbreweries: [],
            updatePressed: false,
            breweryToUpdate: {}
        }
    }

    componentDidMount = () => {
        this.fetchBreweries();
        this.fetchUserBreweries();
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleKeyUp = () => {
        let val = document.getElementById('searchInput').value;
        let results = this.state.results

        let filtered = results.filter(result => {
            if (result.Brewery.toLowerCase().includes(val.toLowerCase())) {
                return result
            } else if (result.City.toLowerCase().includes(val.toLowerCase()))
                return result
        })
        this.setState({ filteredResults: filtered, results: results })
    }

    fetchBreweries = () => {
        fetch(`https://zsm-indytapped.herokuapp.com/indytapped/breweries`, {
            method: 'GET'
        })
            .then(response => {
                if (response.status !== 200) {
                    console.log('Error: ' + response.status)
                    return;
                }
                response.json().then(data => {
                    console.log(data)
                    const results = data;
                    this.setState({ results: results })
                })
            })
            .catch(err => {
                console.log('Fetch Error:', err)
            })
    }

    fetchUserBreweries = () => {
        fetch(`https://zsm-indytapped.herokuapp.com/indytapped/userbreweries`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((userbreweriesData) => {
                return this.setState({ userbreweries: userbreweriesData })
            })
    }

    breweryDelete = (event) => {
        fetch(`https://zsm-indytapped.herokuapp.com/indytapped/userbreweries/${event.target.id}`, {
            method: 'DELETE',
            body: JSON.stringify({ userbreweries: { id: event.target.id } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => this.fetchUserBreweries())
    }

    breweryUpdate = (event, userbreweries) => {
        console.log(event.target.id)
        fetch(`https://zsm-indytapped.herokuapp.com/indytapped/userbreweries/${userbreweries.id}`, {
            method: 'PUT',
            body: JSON.stringify({ userbreweries: userbreweries }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => {
                this.setState({ updatePressed: false })
                this.fetchUserBreweries();
            })
    }

    setUpdatedBrewery = (event, userbreweries) => {
        this.setState({
            breweryToUpdate: userbreweries,
            updatePressed: true
        })
    }

    render() {
        return (
            <div>
                <Padding>
                    <Row>
                        <Col md="5">
                            <Form onSubmit={this.handleSubmit} id="form" autoComplete="off">
                                <FormGroup>
                                    <Title> Search for an Indiana brewery </Title>
                                    <hr />
                                    <Input onKeyUp={this.handleKeyUp} id="searchInput" className="searchBar" type="text" placeholder="Search by brewery or city" required />
                                    <BreweryResults results={this.state.filteredResults} />
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col md="2">
                        </Col>
                        <Col md="5">
                            <BreweryCreate token={this.props.token} updateBreweriesArray={this.fetchUserBreweries} />
                        </Col>
                    </Row>
                </Padding>
                <div>
                    <BreweryTable userbreweries={this.state.userbreweries} delete={this.breweryDelete} update={this.setUpdatedBrewery} />
                    <Col md="12">
                        {
                            this.state.updatePressed ? <BreweryEdit t={this.state.updatePressed} update={this.breweryUpdate} userbreweries={this.state.breweryToUpdate} />
                                : <div></div>
                        }
                    </Col>
                </div>
            </div>
        );
    }
}

export default Brewery;
