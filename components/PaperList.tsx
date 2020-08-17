import React from "react";
import styled from "styled-components";

const StyledPaper = styled.div`
  ${({ theme }) => `
    @import url('https://fonts.googleapis.com/css?family=Lato:400,700,900');
    @import url('https://fonts.googleapis.com/css?family=Indie+Flower')

    width: 16em;
    // max-width: 90%;
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
    @media ${theme.device.mobileL} { 
      max-height: none;
      overflow: auto; 
    }
    margin: 1em auto 0;

 `}
`;

const PaperList = ({ softRanks, position }) => {
  // if ((softRanks.length === 0)) {
  //   return null;
  // }
  return (
    <StyledPaper>
      <h4 style={{ textDecoration: "underline", textAlign: "left" }}>
        Your {position} Rankings
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
