import React from 'react';
import styled from 'styled-components';

const Results = styled.ul`
overflow: scroll;
height: 25em;
width: 18.56em;
color: white;
::-webkit-scrollbar { 
    display: none; 
}
`;

const BreweryResults = ({ results }) => {
    const resultsFormatted = results.map((result) =>
        <li key={result}>
            <div>
                <p>{result.Brewery}</p>
                <p>{result.City}{', '}{result.State}</p>
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