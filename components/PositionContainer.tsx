import React, { useState, useEffect } from "react";
import Players from "../utils/players";
import { Form, Row, Col, Input } from "antd";
import styled from "styled-components";
import PlayerComparison from "./PlayerComparison";
import { permutations } from "mathjs";
import Modal from "antd/lib/modal/Modal";
import PaperList from "./PaperList";
import { Loading } from "./notify/Loading";

const StyledAppWrapper = styled.div`
  ${({ theme }) => `
    background: transparent;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${theme.device.laptop} { 
      align-items: flex-start;
    }
 `}
`;
const StyledInput = styled(Input)`
  ${({ theme }) => `
       margin-left: 8px;
       margin-right: 8px;
       width: 60px;
    `}
`;
const StyledRow = styled(Row)`
  ${({ theme }) => `
       display: flex;
       justify-content: space-around;
    `}
`;
const StyledButtonContainer = styled(Row)`
  ${({ theme }) => `
       width: 170px;
       display: flex;
       justify-content: space-between;
       margin-left: 1em;
       @media ${theme.device.mobileL} { 
        margin: 0 auto;
       }
    `}
`;
const StyledFormItem = styled(Form.Item)`
  ${({ theme }) => `
       .ant-form-item-control {
        display: flex;
        
       }
    `}
`;

const StyledNewButton = styled.button`
  ${({ theme }) => `
    color: #FFF;
    width: 80px;
    height: 30px;
    background-color: rgba(5,5,5,0.5);
    font-weight: 600;
    border: 1px solid #FFF;
    cursor: pointer;
    outline: none;
    &:hover {
      border: 1px solid #FFF;
      background-color: rgba(5,5,5,0.2);
      transition: background-color 0.7s;

    }

    @media ${theme.device.tablet} { 
      font-size: 1rem;
    }
    @media ${theme.device.laptop} { 
      
    }
  `}
`;
const StyledOptionsButton = styled.button`
  ${({ theme }) => `
  color: #FFF;
  width: 80px;
  background-color: rgba(5,5,5,0.5);
  font-weight: 600;
  border: 1px solid #FFF;
  cursor: pointer;
  outline: none;
    &:hover {
      border: 1px solid #FFF;
      background-color: rgba(5,5,5,0.2);
      transition: background-color 0.7s;
    }
    @media ${theme.device.tablet} { 
      font-size: 1rem;
    }
    @media ${theme.device.laptop} { 
    
    }
       
  `}
`;

const StyledGameOver = styled.h3`
  ${({ theme }) => `
       color: #FFF;
       margin-top: 1em;
       margin-bottom: 0.5em;
       text-shadow: 0px 1px 7px rgba(99,99,99,1);
       
       @media ${theme.device.tablet} { 
        margin: 1em auto 0.5em;
      }
    `}
`;

const GameListContainer = styled.div`
  ${({ theme }) => `

    @media ${theme.device.laptop} { 
        display: grid;
        grid-template-columns:  3fr 1fr;
        max-width: 900px;
        margin: 0 auto;
    }

  `}
`;

const PlayerComparisonContainer = styled.div`
  ${({ theme }) => `
    

    @media ${theme.device.laptop} { 
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        grid-column: 2;
    }

  `}
`;

const PositionContainer = ({
  position,
  gameState,
  setGameState,
  defaultNumberPlayers,
}) => {
  const [numberTopPlayers, setNumberTopPlayers] = useState(
    defaultNumberPlayers
  );

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    startNew();
  }, []);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    startNew();
    setVisible(false);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  const startNew = () => {
    let startRanks = [];
    let autoRankDifferential = 10;

    // Retrieve the amount of players for each postion as set in game settings to feed to position containers
    // automatically rank players that are, by default, "n" spots lower than the autoRankDifferential
    if (position === "RB") {
      const { runningBacks } = Players;
      runningBacks.forEach((pos) => {
        if (pos.rank <= numberTopPlayers) {
          let playersAhead = [];
          runningBacks.forEach((p) => {
            if (
              p.rank <= numberTopPlayers &&
              p.rank - pos.rank > autoRankDifferential
            ) {
              playersAhead.push(p.name);
            }
          });
          startRanks.push({ ...pos, playersBehind: [], playersAhead });
        }
      });
    } else if (position === "WR") {
      const { wideReceivers } = Players;
      wideReceivers.forEach((pos) => {
        if (pos.rank <= numberTopPlayers) {
          let playersAhead = [];
          wideReceivers.forEach((p) => {
            if (
              p.rank <= numberTopPlayers &&
              p.rank - pos.rank > autoRankDifferential
            ) {
              playersAhead.push(p.name);
            }
          });
          startRanks.push({ ...pos, playersBehind: [], playersAhead });
        }
      });
    } else if (position === "TE") {
      const { tightEnds } = Players;
      tightEnds.forEach((pos) => {
        if (pos.rank <= numberTopPlayers) {
          let playersAhead = [];
          tightEnds.forEach((p) => {
            if (
              p.rank <= numberTopPlayers &&
              p.rank - pos.rank > autoRankDifferential
            ) {
              playersAhead.push(p.name);
            }
          });
          startRanks.push({ ...pos, playersBehind: [], playersAhead });
        }
      });
    } else if (position === "QB") {
      const { quarterBacks } = Players;
      quarterBacks.forEach((pos) => {
        if (pos.rank <= numberTopPlayers) {
          let playersAhead = [];
          quarterBacks.forEach((p) => {
            if (
              p.rank <= numberTopPlayers &&
              p.rank - pos.rank > autoRankDifferential
            ) {
              playersAhead.push(p.name);
            }
          });
          startRanks.push({ ...pos, playersBehind: [], playersAhead });
        }
      });
    }

    setGameState({
      gameOver: false,
      possibleComparisons: permutations(numberTopPlayers, 2),
      defaultRanks: [...startRanks],
      currentPick: 1,
      playerA: startRanks[0],
      playerB: startRanks[1],
      softRanks: [],
      isLoading: false,
      consecutivePlayerPick: 1,
    });
  };

  const advanceNextPick = async (winningPlayer, losingPlayer) => {
    // winning player and winningPlayer.playersAhead all need to have their playersBehind updated with losing player and all losing player's playersBehind
    // losing player and losingPlayer.playersBehind all need to have their playersAhead updated with winning player and all winning player's playersAhead

    // add the winningPlayer into the losingPlayers' playersBehind to also check THOSE playersBehind...
    losingPlayer.playersBehind.push(winningPlayer.name);
    // add the losingPlayer into the winningPlayers' playersAhead to also check THOSE playersBehind...
    winningPlayer.playersAhead.push(losingPlayer.name);

    //  get all players currently ahead of winner and players ahead those players etc...
    const allWinningPlayersAffected = getAllWinningPlayersAffected(
      winningPlayer,
      []
    );
    //  get all players currently behind loser and players behind those players etc...
    const allLosingPlayersAffected = getAllLosingPlayersAffected(
      losingPlayer,
      []
    );

    // update players in defaultRanks for next gameState
    const newRanks = gameState.defaultRanks.map((p) => {
      // determine if winner or loser
      const win = allWinningPlayersAffected.filter((pa) => pa === p.name);
      // If player is a "winning" player, then set the players that winning player is ahead of to contain allLosingPlayersAffected
      if (win.length > 0) {
        let newPlayersAhead = Array.from(
          new Set(p.playersAhead.concat(allLosingPlayersAffected))
        );
        // Set this flag for winning player that was compared so they now show up in softRanks to display in Rankings List
        let isViewed = false;
        if (p.name === winningPlayer.name || p.isViewed) {
          isViewed = true;
        }
        let updatedPlayer = { ...p, playersAhead: newPlayersAhead, isViewed };
        const softRank = getSoftRank(updatedPlayer);
        updatedPlayer = { ...updatedPlayer, softRank };
        return updatedPlayer;
      }
      // If player is a "losing" player, then set the players that losing player is behind to contain allWinningPlayersAffected
      const lose = allLosingPlayersAffected.filter((pa) => pa === p.name);
      if (lose.length > 0) {
        let newPlayersBehind = Array.from(
          new Set(p.playersBehind.concat(allWinningPlayersAffected))
        );
        // Set this flag for losing player that was compared so they now show up in softRanks to display in Rankings List
        let isViewed = false;
        if (p.name === losingPlayer.name || p.isViewed) {
          isViewed = true;
        }
        let updatedPlayer = { ...p, playersBehind: newPlayersBehind, isViewed };
        const softRank = getSoftRank(updatedPlayer);
        updatedPlayer = { ...updatedPlayer, softRank };
        return updatedPlayer;
      }
      const softRank = getSoftRank(p);
      return { ...p, softRank };
    });

    // initialze other variables for next gameState
    let newPlayerA = losingPlayer;
    let newPlayerB = null;
    const newCurrentPick = gameState.currentPick + 1;
    // Accounts for if the same player has been displayed the max consecutive times in a row
    let consecutivePlayerPick =
      newPlayerA === gameState.playerA
        ? gameState.consecutivePlayerPick + 1
        : 1;

    // get a new randomPlayer
    const randomPlayer = getRandomPlayer(newRanks);

    // // make sure that it is not the same player as new playerA (previously losing player)
    // // make sure that the new randomPlayer does not exist in any of the comparisons (new or old)
    if (
      !checkIsSamePlayer(newPlayerA, randomPlayer) &&
      !checkComparisonAlreadyExists(newPlayerA, randomPlayer) &&
      !(consecutivePlayerPick >= 3)
    ) {
      newPlayerB = randomPlayer;
    } else {
      // No random player was found that hasn't been compared with playerA

      // There are still possible comparisons
      // get another set of players that have not been compared
      const newPlayers = getTwoPlayersNotCompared(newRanks);
      if (newPlayers.length === 0) {
        // No more possible comparisons
        console.log("game ended because no two random players found");
        setGameState((st) => ({ ...st, gameOver: true, isLoading: false }));
      } else {
        newPlayerA = newPlayers[0];
        newPlayerB = newPlayers[1];
      }
    }

    // get new soft ranks
    let newSoftRanks = [];
    newRanks.forEach((nr) => {
      if (nr.isViewed) {
        newSoftRanks.push(nr);
      }
    });
    newSoftRanks = newSoftRanks.sort(compareSoftRank);

    if (consecutivePlayerPick >= 3) {
      // reset Pick
      consecutivePlayerPick = 1;
    }

    // Set newState
    setGameState((st) => ({
      ...st,
      defaultRanks: newRanks,
      playerA: newPlayerA,
      playerB: newPlayerB,
      currentPick: newCurrentPick,
      softRanks: newSoftRanks,
      consecutivePlayerPick: consecutivePlayerPick,
    }));
  };

  const getAllLosingPlayersAffected = (lp, startingArr) => {
    if (lp.playersAhead.length === 0) {
      return [lp.name];
    }
    // if the player is in the starting array the stop here as 2nd base case
    let playerExists = startingArr.filter((p) => p === lp.name);
    if (playerExists.length > 0) {
      return [lp.name];
    }
    let allPlayersAffected = [];

    // add losing player name first
    allPlayersAffected.push(lp.name);
    // add losing player's playersAhead
    allPlayersAffected = allPlayersAffected.concat(lp.playersAhead);

    // loop through losing player's playersBehind and get those players' playersbehind
    lp.playersAhead.map((pa) => {
      let player = getPlayerByName(pa);
      let newPlayersAhead = player.playersAhead;
      // add current player's playersAhead to array
      allPlayersAffected = allPlayersAffected.concat(newPlayersAhead);
      allPlayersAffected = allPlayersAffected.concat(
        getAllLosingPlayersAffected(player, allPlayersAffected)
      );
    });
    return Array.from(new Set(allPlayersAffected));
  };

  const getAllWinningPlayersAffected = (wp, startingArr) => {
    if (wp.playersBehind.length === 0) {
      return [wp.name];
    }
    // if the player is in the starting array the stop here as 2nd base case
    let playerExists = startingArr.filter((p) => p === wp.name);
    if (playerExists.length > 0) {
      return [wp.name];
    }
    let allPlayersAffected = [];

    // add winning player name first
    allPlayersAffected.push(wp.name);
    // add winning player's playersBehind
    allPlayersAffected = allPlayersAffected.concat(wp.playersBehind);

    // loop through winning player's playersBehind and get those players' playersbehind
    wp.playersBehind.map((pa) => {
      let player = getPlayerByName(pa);
      let newPlayersBehind = player.playersBehind;
      // add current player's playersBehind to array
      allPlayersAffected = allPlayersAffected.concat(newPlayersBehind);
      allPlayersAffected = allPlayersAffected.concat(
        getAllWinningPlayersAffected(player, allPlayersAffected)
      );
    });
    return Array.from(new Set(allPlayersAffected));
  };

  const getRandomPlayer = (ranks) => {
    const max = Math.floor(numberTopPlayers);
    const randomPick = Math.floor(Math.random() * Math.floor(max));
    const randomPlayer = ranks[randomPick];
    return randomPlayer;
  };

  const getPlayerByName = (name) => {
    const foundPlayer = gameState.defaultRanks.filter(
      (defaultRank) => defaultRank.name === name
    );

    return foundPlayer[0];
  };

  const checkIsSamePlayer = (player, randomPlayer) => {
    if (player.rank === randomPlayer.rank) {
      return true;
    }
    return false;
  };

  const checkComparisonAlreadyExists = (p1, p2) => {
    const playerBehind = p1.playersBehind.filter((p) => p === p2.name);
    if (playerBehind[0]) {
      return true;
    }
    const playerAhead = p1.playersAhead.filter((p) => p === p2.name);
    if (playerAhead[0]) {
      return true;
    }

    const playerBehind2 = p2.playersBehind.filter((p) => p === p1.name);
    if (playerBehind2[0]) {
      return true;
    }
    const playerAhead2 = p2.playersAhead.filter((p) => p === p1.name);
    if (playerAhead2[0]) {
      return true;
    }
    return false;
  };

  const getTwoPlayersNotCompared = (ranks) => {
    let comparedStop = 0;
    let comparisonFound = false;

    do {
      const randomA = getRandomPlayer(ranks);
      const randomB = getRandomPlayer(ranks);
      if (
        !checkIsSamePlayer(randomA, randomB) &&
        !checkComparisonAlreadyExists(randomA, randomB)
      ) {
        comparisonFound = true;
        return [randomA, randomB];
      }

      comparedStop += 1;
    } while (comparedStop < gameState.possibleComparisons * 3);
    if (!comparisonFound) {
      return [];
    }
  };

  const getSoftRank = (player) => {
    let softRank = null;

    if (player.playersBehind.length !== 0 || player.playersAhead.length !== 0) {
      softRank = player.playersBehind.length + 1;
    }

    return softRank;
  };

  function compareSoftRank(a, b) {
    if (a.softRank < b.softRank) {
      return -1;
    }
    if (a.softRank > b.softRank) {
      return 1;
    }
    return 0;
  }

  return (
    <>
      <StyledButtonContainer>
        <StyledNewButton type="primary" onClick={() => startNew()}>
          New
        </StyledNewButton>

        <StyledOptionsButton type="primary" onClick={() => showModal()}>
          Settings
        </StyledOptionsButton>
      </StyledButtonContainer>
      <StyledAppWrapper>
        {gameState.gameOver ? (
          <>
            <StyledGameOver>
              Your Personal Top {numberTopPlayers} {position} Rankings:
            </StyledGameOver>
            <PaperList
              softRanks={gameState.softRanks}
              position={position}
              inProgress={!gameState.gameOver}
            />
          </>
        ) : (
          <>
            {gameState.gameOver ? null : (
              <StyledGameOver>
                Continue making picks to get your final rankings for the
                position
              </StyledGameOver>
            )}
            <GameListContainer>
              {gameState.isLoading ? (
                <Loading />
              ) : (
                <PlayerComparisonContainer>
                  {gameState.playerA && gameState.playerB ? (
                    <PlayerComparison
                      playerA={gameState.playerA}
                      playerB={gameState.playerB}
                      advanceNextPick={advanceNextPick}
                      setGameState={setGameState}
                    />
                  ) : null}
                </PlayerComparisonContainer>
              )}

              <PaperList
                softRanks={gameState.softRanks}
                position={position}
                inProgress={!gameState.gameOver}
              />
            </GameListContainer>
          </>
        )}

        <Modal
          title="Options"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form
            initialValues={{
              numberTopPlayers: defaultNumberPlayers,
              position: "RB",
            }}
          >
            <StyledRow>
              <Col span={24} offset={1}>
                <StyledFormItem
                  label="Top Players at Position"
                  name="numberTopPlayers"
                >
                  <StyledInput
                    value={numberTopPlayers}
                    onChange={(e) => setNumberTopPlayers(e.target.value)}
                    type="number"
                    required
                  />
                </StyledFormItem>
              </Col>
            </StyledRow>
          </Form>
        </Modal>
      </StyledAppWrapper>
    </>
  );
};

export default PositionContainer;
