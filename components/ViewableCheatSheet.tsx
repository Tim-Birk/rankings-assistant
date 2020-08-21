import React from "react";
import styled from "styled-components";

const StyledCheatSheetContainer = styled.div`
  ${({ theme }) => `
    background: #FFF;
    padding: 1.75em;
    font-size: 0.85em;
    margin-top: 0.5em;
    margin-bottom: 1em;
    height: 100vh;
    width: 90vw;
    max-width: 8.5in;
    overflow: auto;
    -webkit-box-shadow: 3px 3px 5px 2px rgba(0,0,0,0.64);
    -moz-box-shadow: 3px 3px 5px 2px rgba(0,0,0,0.64);
    box-shadow: 3px 3px 5px 2px rgba(0,0,0,0.64);
    
    @media ${theme.device.tablet} { 
     
    }
   
  `}
`;

const StyledCheatSheetTitle = styled.h3`
  ${({ theme }) => `
    text-align: left;
  `}
`;

const StyledCheatSheetSubtitle = styled.h4`
  ${({ theme }) => `
    text-align: left;
    margin-bottom: 1.75em;
  `}
`;

const StyledPositionTitle = styled.h4`
  ${({ theme }) => `
    text-align: left;
    text-decoration: underline;
    margin-left: -1em;
  `}
`;

const StyledList = styled.ol`
  ${({ theme }) => `
  padding-left: 1em;
`}
`;

const StyledCheatSheetContent = styled.div`
  ${({ theme }) => `
  line-height: 1.75;
  column-count: 1;
  column-fill: auto;
  @media ${theme.device.mobileL} { 
    column-count: 2;
  }
  @media ${theme.device.tablet} { 
    column-count: 4;
  }
`}
`;

const ViewableCheatSheet = ({ qbRanks, rbRanks, wrRanks, teRanks }) => {
  return (
    <StyledCheatSheetContainer>
      <StyledCheatSheetTitle>Fantasy Rankings Assistant</StyledCheatSheetTitle>
      <StyledCheatSheetSubtitle>
        Your Personal Rankings Cheat Sheet
      </StyledCheatSheetSubtitle>
      <StyledCheatSheetContent>
        <StyledList>
          <StyledPositionTitle>QB Rankings</StyledPositionTitle>
          {qbRanks.map((r) => (
            <li>{r.name}</li>
          ))}
        </StyledList>

        <StyledList>
          <StyledPositionTitle>RB Rankings</StyledPositionTitle>
          {rbRanks.map((r) => (
            <li>{r.name}</li>
          ))}
        </StyledList>

        <StyledList>
          <StyledPositionTitle>WR Rankings</StyledPositionTitle>
          {wrRanks.map((r) => (
            <li>{r.name}</li>
          ))}
        </StyledList>

        <StyledList>
          <StyledPositionTitle>TE Rankings</StyledPositionTitle>
          {teRanks.map((r) => (
            <li>{r.name}</li>
          ))}
        </StyledList>
      </StyledCheatSheetContent>
    </StyledCheatSheetContainer>
  );
};

export default ViewableCheatSheet;
