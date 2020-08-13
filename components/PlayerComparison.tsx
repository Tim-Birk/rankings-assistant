import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import PlayerCard from "./PlayerCard";
import FlipCard from "./FlipCard"


const StyledPlayerCardsContainer = styled(Row)`
  ${({ theme }) => `
      max-width: 700px;
      margin: ${theme["margin-small"]} auto;
    `}
`;

const StyledOR = styled(Col)`
  ${({ theme }) => `
      color: #FFF;
      font-weight: bold;
      font-size: 1.75em;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 3.5em;
      
    `}
`;

const PlayerComparison = ({ playerA, playerB, advanceNextPick }) => {
  return (
    <StyledPlayerCardsContainer>
      <FlipCard player={playerA} otherPlayer={playerB}  advanceNextPick={advanceNextPick} />
      <StyledOR span={2}>VS</StyledOR>
      <FlipCard player={playerB} otherPlayer={playerA}  advanceNextPick={advanceNextPick} />
    </StyledPlayerCardsContainer>
  );
};

export default PlayerComparison;
