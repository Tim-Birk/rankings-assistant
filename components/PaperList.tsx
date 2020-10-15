import React from "react";
import styled from "styled-components";

const StyledPaper = styled.div`
  ${({ theme }) => `
    @import url('https://fonts.googleapis.com/css?family=Lato:400,700,900');
    @import url('https://fonts.googleapis.com/css?family=Indie+Flower')

    width: 16em;
    padding: 1.2em 1em 2em 4em;
    background-color: #fff; 
    background-image: linear-gradient(90deg, transparent 3.65em, #97bdc4 3.65em, #97bdc4 3.75em, transparent  3.75em), linear-gradient(#e1e1e1 0.1em, transparent 0.1em);
    background-size: 100% 1.1em;
    font-size: 1.3em;
    line-height: 1.1;
    box-shadow: 2px 2px 6px #ccc;
    font-family: 'Indie Flower', cursive;
    color: #284283;
    overflow: scroll;   
    max-height: 300px;
    min-width: 250px;
    @media ${theme.device.laptop} { 
      max-height: 550px;
      overflow: auto; 
      padding: 1.2em 1em 2em 1.75em;
      grid-column: 1;
      grid-row: 1;
      width: 100%;
      max-width: 600px;
    }
    margin: 1em auto 0;

 `}
`;

const PaperList = ({ softRanks, position, inProgress }) => {
  return (
    <StyledPaper>
      <h4 style={{ textDecoration: "underline", textAlign: "left" }}>
        {position} Rankings {inProgress ? "(In Progress)" : "(Final)"}
      </h4>
      <ol>
        {softRanks.map((sr) => (
          <li key={sr.name}>{sr.name}</li>
        ))}
      </ol>
    </StyledPaper>
  );
};

export default PaperList;
