import React from "react";
import { Typography, Col, Avatar, Button } from "antd";
import styled from "styled-components";

const { Title, Text } = Typography;

const StyledPlayerCardContainer = styled(Col)`
  ${({ theme }) => `
       display: flex;
       flex-direction: column;
       align-items: center;
       
    `}
`;

const StyledButton = styled(Button)`
  ${({ theme }) => `
        width: 80px;

    `}
`;

const StyledRank = styled(Text)`
  ${({ theme }) => `
  margin-bottom: ${theme["margin-xsmall"]};
        font-weight: 500;
    `}
`;

const StyledTitle = styled(Title)`
  ${({ theme }) => `
        margin-bottom: ${theme["margin-xsmall"]};
        height: 60px;
        display: flex;
        align-items: flex-end;
    `}
`;

const PlayerCard = ({
  player,
  otherPlayer,
  advanceNextPick
}) => {
  if (!player) {
    return null;
  }

  const handleAdvanceNextPick = () => {
    
    advanceNextPick(player, otherPlayer);
  };

  return (
    <StyledPlayerCardContainer span={12}>
      <StyledTitle level={4}>{player.name}</StyledTitle>
      {player.image ? <Avatar src={player.image} size={96} /> : null}
      <StyledRank>Default Rank: {player.rank}</StyledRank>

      <StyledButton onClick={handleAdvanceNextPick}>Pick</StyledButton>
    </StyledPlayerCardContainer>
  );
};

export default PlayerCard;
