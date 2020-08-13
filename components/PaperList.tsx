import React from "react";
import styled from "styled-components";

const StyledPaper = styled.div`
  ${({ theme }) => `
    @import url('https://fonts.googleapis.com/css?family=Lato:400,700,900');
    @import url('https://fonts.googleapis.com/css?family=Indie+Flower')

    margin: 2em auto;
    width: 16em;
       max-width: 90%;
    padding: 1.2em 1em 2em 4em;
    background-color: #fff; 
    background-image: linear-gradient(90deg, transparent 3.65em, #97bdc4 3.65em, #97bdc4 3.75em, transparent  3.75em), linear-gradient(#e1e1e1 0.1em, transparent 0.1em);
    background-size: 100% 1.1em;
    font-size: 1.3em;
       line-height: 1.1;
    box-shadow: 2px 2px 6px #ccc;
    font-family: 'Indie Flower', cursive;
       color: #284283;
       // transform: rotate(-4deg);
 `}
`;

const PaperList = ({ softRanks }) => {
  if ((softRanks.length === 0)) {
    return null;
  }
  return (
    <StyledPaper>
      <ol>
        {softRanks.map((sr) => (
          <li key={sr.name}>{sr.name}</li>
        ))}
      </ol>
    </StyledPaper>
  );
};

export default PaperList;
