import React from "react";
import { Tabs } from "antd";
import PositionContainer from "./PositionContainer";
import styled from "styled-components";
import { permutations } from "mathjs";
import CheatSheet from "./CheatSheet";

const { TabPane } = Tabs;

const StyledTabs = styled(Tabs)`
  ${({ theme }) => `
    margin-left: 1em;
    max-width: 1300px;

    .ant-tabs-nav::before {
        border-bottom: none;
    }
    .ant-tabs-nav-wrap {
      justify-content: center;
    }
    .ant-tabs-tab {
        color: #FFF;
        font-weight: bold;
        font-size: 1rem;
        text-shadow: 0px 1px 7px rgba(99, 99, 99, 1);
    }
    .ant-tabs-tab-active {
        .ant-tabs-tab-btn {
        color: yellow;
        font-weight: inherit;
        border-bottom: none;
        }
    }
    @media ${theme.device.tablet} { 
        padding: 0 2em;
        margin: 0 auto;
        .ant-tabs-tab {
          font-size: 1.5rem;
        }
    }
    @media ${theme.device.laptop} { 
      
    }
 `}
`;

const CheatSheetTabContainer = styled.div`
  ${({ theme }) => `
    width: 100%;
    display: flex;
    justify-content: center;
    @media ${theme.device.tablet} { 

    }
    @media ${theme.device.laptop} { 
      
    }
 `}
`;

const StyledTabPane = styled(TabPane)``;

function callback(key) {
  console.log(key);
}

const PositionTabs = () => {
  const [gameStateQB, setGameStateQB] = React.useState({
    defaultRanks: [],
    currentPick: 1,
    playerA: null,
    playerB: null,
    softRanks: [],
    possibleComparisons: permutations(25, 2),
    gameOver: false,
    isLoading: false,
    consecutivePlayerPick: 1,
  });
  const [gameStateRB, setGameStateRB] = React.useState({
    defaultRanks: [],
    currentPick: 1,
    playerA: null,
    playerB: null,
    softRanks: [],
    possibleComparisons: permutations(25, 2),
    gameOver: false,
    isLoading: false,
    consecutivePlayerPick: 1,
  });
  const [gameStateWR, setGameStateWR] = React.useState({
    defaultRanks: [],
    currentPick: 1,
    playerA: null,
    playerB: null,
    softRanks: [],
    possibleComparisons: permutations(25, 2),
    gameOver: false,
    isLoading: false,
    consecutivePlayerPick: 1,
  });
  const [gameStateTE, setGameStateTE] = React.useState({
    defaultRanks: [],
    currentPick: 1,
    playerA: null,
    playerB: null,
    softRanks: [],
    possibleComparisons: permutations(25, 2),
    gameOver: false,
    isLoading: false,
    consecutivePlayerPick: 1,
  });

  return (
    <StyledTabs defaultActiveKey="1" onChange={callback}>
      <StyledTabPane tab="RB" key="1">
        <PositionContainer
          position="RB"
          gameState={gameStateRB}
          setGameState={setGameStateRB}
          defaultNumberPlayers={25}
        />
      </StyledTabPane>
      <StyledTabPane tab="WR" key="2">
        <PositionContainer
          position="WR"
          gameState={gameStateWR}
          setGameState={setGameStateWR}
          defaultNumberPlayers={25}
        />
      </StyledTabPane>
      <StyledTabPane tab="QB" key="3">
        <PositionContainer
          position="QB"
          gameState={gameStateQB}
          setGameState={setGameStateQB}
          defaultNumberPlayers={15}
        />
      </StyledTabPane>
      <StyledTabPane tab="TE" key="4">
        <PositionContainer
          position="TE"
          gameState={gameStateTE}
          setGameState={setGameStateTE}
          defaultNumberPlayers={15}
        />
      </StyledTabPane>
      <StyledTabPane tab="Cheat Sheet" key="5">
        <CheatSheetTabContainer>
          <CheatSheet
            qbRanks={gameStateQB.softRanks}
            rbRanks={gameStateRB.softRanks}
            wrRanks={gameStateWR.softRanks}
            teRanks={gameStateTE.softRanks}
          />
        </CheatSheetTabContainer>
      </StyledTabPane>
    </StyledTabs>
  );
};

export default PositionTabs;
