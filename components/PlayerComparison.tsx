import React, { useState } from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import Card from "./FlipCard";

const StyledPlayerCardsContainer = styled(Row)`
  ${({ theme }) => `
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: ${theme["margin-small"]};
     
      @media ${theme.device.tablet} { 
        width: 505px
      }

      @media ${theme.device.laptop} { 
        width: 505px
      }
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
      text-shadow: 0px 1px 7px rgba(99,99,99,1);
      margin: 0 10px 2em;
    `}
`;


const PlayerComparison = ({
  playerA,
  playerB,
  advanceNextPick,
  setGameState,
}) => {
  const [flippedA, setFlippedA] = useState(true);
  const [flippedB, setFlippedB] = useState(true);
  return (
    <StyledPlayerCardsContainer>
      <Card
        player={playerA}
        otherPlayer={playerB}
        advanceNextPick={advanceNextPick}
        setGameState={setGameState}
        flipped={flippedA}
        set={setFlippedA}
        setOther={setFlippedB}
      />
      <StyledOR span={2}>VS</StyledOR>
      <Card
        player={playerB}
        otherPlayer={playerA}
        advanceNextPick={advanceNextPick}
        setGameState={setGameState}
        flipped={flippedB}
        set={setFlippedB}
        setOther={setFlippedA}
      />
    </StyledPlayerCardsContainer>
  );
};

export default PlayerComparison;
