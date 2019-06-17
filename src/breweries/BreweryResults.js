import React from 'react';
import styled from 'styled-components';

const Results = styled.ul`
overflow: scroll;
height: 30em;
// width: 34.25em;
margin-top: 1em;
border-radius: 5px;
color: black;
background-color: white;
font-size: 17px;
font-family: 'Raleway', sans-serif;
::-webkit-scrollbar {
    display: none;
}
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    height: 18em;
    width: 13em;
}
@media only screen and (min-width : 321px) {
    height: 20em;
    }
`;

const Bold = styled.p`
font-weight: bold;
`

const BreweryResults = ({ results }) => {
    const resultsFormatted = results.map((result) =>
        <li key={result}>
            <div>
                <Bold>{result.Brewery}</Bold>
                <p>{result.Address}</p>
                <p>{result.City}{', '}{result.State}{' '}{result.ZipCode}</p>
            </div>
        </li>
    );
    return (
        <Results id="results">
            {resultsFormatted}
        </Results>
    );
}
export default BreweryResults;