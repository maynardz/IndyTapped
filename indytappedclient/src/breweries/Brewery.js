import React, { Component } from 'react';
import BreweryResults from './BreweryResults';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import BreweryCreate from './BreweryCreate';

const SearchInput = styled.input`  
margin-top: 1em;
width: 297px;
padding: 15px 0 15px 10px;
font-size: 16px;
border: 0 none;
height: 52px;
margin-right: 0;
outline: none;
float: left;
box-sizing: border-box;
transition: all 0.15s;
`;

const SearchBreweries = styled.h3`
color: white;
margin-top: 2em;
margin-left: 1.2em;
text-align: center;
float: left;
`

class Brewery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],
            filteredResults: []
        }
    }

    componentDidMount = () => {
        this.fetchBreweries();
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
        fetch(`http://localhost:3000/indytapped/breweries`)
            .then(response => {
                if (response.status !== 200) {
                    console.log('Error: ' + response.status);
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

    render() {
        return (
            <Container>
                <Row>
                    <form onSubmit={this.handleSubmit} id="form" autoComplete="off">
                        <Col md="5">
                            <SearchBreweries> Search Breweries </SearchBreweries>
                            <SearchInput onKeyUp={this.handleKeyUp} id="searchInput" className="searchBar" type="text" placeholder="Search by brewery or city" required />
                            <BreweryResults results={this.state.filteredResults} />
                        </Col>
                        <Col md="5">
                            <BreweryCreate token={this.props.token} />
                        </Col>
                    </form>
                </Row>
            </Container>
        );
    }
}

export default Brewery;
