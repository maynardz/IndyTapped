import React from 'react';
import { Table, Button, Col, Row } from 'reactstrap';
import styled from 'styled-components';

const Title = styled.h3`
text-align: center;
font-family: 'Raleway', sans-serif;
margin-top: 1em;
`;

const BreweryTable = (props) => {
    return (
        <div>
            <Row>
                <Col md="3">
                </Col>
                <Col md="6">
                    <Title>Breweries I've Visited</Title>
                    <hr />
                    <Table striped>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Brewery</th>
                                <th>Rating</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.userbreweries.map((userbreweries, id) => {
                                    return (
                                        <tr key={id}>
                                            <th scope="row">{userbreweries.id}</th> 
                                            <td>{userbreweries.brewery}</td>
                                            <td>{userbreweries.rating}</td>
                                            <td>
                                                <Button id={userbreweries.id} onClick={props.delete} outline color="secondary">Delete</Button>
                                                <Button id={userbreweries.id} onClick={e => props.update(e, userbreweries)} outline color="secondary">Update</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
                <Col md="3">
                </Col>
            </Row>
        </div>
    )
}

export default BreweryTable;