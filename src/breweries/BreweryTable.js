import React from 'react';
import { Table, Button, Col, Row } from 'reactstrap';
import styled from 'styled-components';

const Title = styled.h3`
text-align: center;
font-family: 'Raleway', sans-serif;
margin-top: 3em;
`;

const ButtonSpacer = styled.span`
margin-left: 5px;
`

const Width = styled.div`
overflow: hidden;
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 75%;
    display: block;
    margin: 0 auto;
}
@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : landscape) {
    width: 75%;
    display: block;
    margin: 0 auto;
}

/* iPads (portrait and landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
    display: block;
    margin: 0 auto; 
    margin-top: 10em:
}
    
    /* iPads (landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
    display: block;
    margin: 0 auto;    
    margin-top: 10em;
}
    
    /* iPads (portrait) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {
    display: block;
    margin: 0 auto;    
    margin-top: 10em;
}

    /**********
    iPad 3
    **********/
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
    display: block;
    margin: 0 auto;   
    margin-top: 10em;
}
    
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
    display: block;
    margin: 0 auto;
    margin-top: 10em;
}
`;

const BreweryTable = (props) => {
    return (
        <Width>
            <Row>
                <Col md="3">
                </Col>
                <Col md="6">
                    <Title>Breweries I've Visited</Title>
                    <hr />
                    <Table striped>
                        <thead>
                            <tr>
                                <th></th>
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
                                            <th scope="row"></th> 
                                            <td>{userbreweries.brewery}</td>
                                            <td>{userbreweries.rating}</td>
                                            <td>
                                                <Button id={userbreweries.id} onClick={props.delete} outline color="secondary">Delete</Button>
                                                <ButtonSpacer/>
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
        </Width>
    )
}

export default BreweryTable;