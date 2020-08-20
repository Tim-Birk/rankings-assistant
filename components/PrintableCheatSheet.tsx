import React from "react";
import styled from "styled-components";

const StyledCheatSheetContainer = styled.div`
  ${({ theme }) => `
    background: #FFF;
    width: 8.5in;
    height: 10.5in;
    padding: 0.50in;
    font-size: 0.85em;
    margin-bottom: 1em;
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
  column-count: 4;
  height: 100%;
  column-fill: auto;
  line-height: 1.75;
`}
`;

type CheatSheetProps = {
  qbRanks: any;
  rbRanks: any;
  wrRanks: any;
  teRanks: any;
};

class PrintableCheatSheet extends React.Component<CheatSheetProps> {
  render() {
    const { qbRanks, rbRanks, wrRanks, teRanks } = this.props;
    return (
      <StyledCheatSheetContainer>
        <StyledCheatSheetTitle>
          Fantasy Rankings Assistant
        </StyledCheatSheetTitle>
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
  }
}

export default PrintableCheatSheet;
