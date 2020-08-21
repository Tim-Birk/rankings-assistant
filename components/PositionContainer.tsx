import React, { useState, useEffect } from "react";
import Players from "../utils/players";
import { Form, Row, Col, Select, Input } from "antd";
import styled from "styled-components";
import PlayerComparison from "./PlayerComparison";
import { permutations } from "mathjs";
import Modal from "antd/lib/modal/Modal";
import PaperList from "./PaperList";
import { Loading } from "./notify/Loading";

const { Option } = Select;

const StyledAppWrapper = styled.div`
  ${({ theme }) => `
  // background: url(https://i.pinimg.com/originals/3b/1a/66/3b1a6603b7e1e5b6c16e9f998ffb0e91.jpg);
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
       
    `}
`;
const StyledFormItem = styled(Form.Item)`
  ${({ theme }) => `
       .ant-form-item-control {
        display: flex;
        
       }
    `}
`;

const StyledSelect = styled(Select)`
  ${({ theme }) => `
       max-width: 80px;
    `}
`;

const StyledNewButton = styled.button`
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
  
  
       
    `}
`;

const StyledGameOver = styled.h3`
  ${({ theme }) => `
       color: #FFF;
       margin-top: 1em;
       margin-bottom: 0;
       text-shadow: 0px 1px 7px rgba(99,99,99,1);
    `}
`;

const StyledGameOverContainer = styled.div`
  ${({ theme }) => `
      background-color: rgba(5,5,5,0.5);
      color: #FFF;
      width: 100%;
      margin: 1em 0;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-top: solid 1px #FFF;
      border-bottom: solid 1px #FFF;
    `}
`;

const GameListContainer = styled.div`
  ${({ theme }) => `

    @media ${theme.device.laptop} { 
        display: grid;
        grid-template-columns:  3fr 1fr;
        max-width: 900px;
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
  // const [currentPosition, setCurrentPosition] = useState("RB");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    startNew();
  }, []);

  // const [gameState, setGameState] = useState({
  //   defaultRanks: [],
  //   currentPick: 1,
  //   playerA: null,
  //   playerB: null,
  //   softRanks: [],
  //   possibleComparisons: permutations(25, 2),
  //   gameOver: false,
  //   isLoading: false,
  //   consecutivePlayerPick: 1,
  // });

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

    if (position === "RB") {
      const { runningBacks } = Players;

      runningBacks.forEach((pos) => {
        if (pos.rank <= numberTopPlayers) {
          let playersAhead = [];
          runningBacks.forEach((p) => {
            if (p.rank <= numberTopPlayers && p.rank - pos.rank > 10) {
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
            if (p.rank <= numberTopPlayers && p.rank - pos.rank > 10) {
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
            if (p.rank <= numberTopPlayers && p.rank - pos.rank > 10) {
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
            if (p.rank <= numberTopPlayers && p.rank - pos.rank > 10) {
              playersAhead.push(p.name);
            }
          });
          startRanks.push({ ...pos, playersBehind: [], playersAhead });
        }
      });
    }
    // ToDO move game state to outer container to make cheat sheet?
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
    // setGameOver(false);
    // setPossibleComparisons(permutations(numberTopPlayers, 2));
    // setDefaultRanks((state) => [...startRanks]);
    // setCurrentPick(1);
    // setPlayerA(startRanks[0]);
    // setPlayerB(startRanks[1]);
    // setSoftRanks([]);
  };

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  const getPlayersBehindPlayer2 = (currentPlayer) => {
    // All players behind current player
    //// Players currently behind the player
    //// Players behind the players above
    const playerBehind = getPlayerByName(gameState.defaultRanks, currentPlayer);
    console.log(currentPlayer, playerBehind);
    let allPlayersBehindPlayer = [];
    playerBehind.playersAhead.forEach((pb) => allPlayersBehindPlayer.push(pb));

    allPlayersBehindPlayer.forEach((pb) => {
      // const playerBehind = getPlayerByName(defaultRanks, pb);
      const newAllPlayersBehind = getPlayersBehindPlayer(pb);
      allPlayersBehindPlayer = allPlayersBehindPlayer
        .concat(newAllPlayersBehind)
        .filter(onlyUnique);
    });

    return allPlayersBehindPlayer;
  };

  const getPlayersBehindPlayer = (currentPlayer) => {
     // All players behind current player
    //// Players currently behind the player
    //// Players behind the players above

    // console.log(currentPlayer);

    // Get the player object
    const playerBehind = getPlayerByName(gameState.defaultRanks, currentPlayer);
    // define the final list of players we want
    let allPlayersBehindPlayer = [];
    playerBehind.playersAhead.forEach((pb) => allPlayersBehindPlayer.push(pb));


    // for each one of those players that has a player ahead of them (and players ahead of them, and so on...) - add those players to the list
    // iterate only once through the entire ranks to determine if the iterated player fits the criteria above
    gameState.defaultRanks.forEach((dr) => {
      // For each already known player that is ahead of the current, add players ahead of them to the list
      playerBehind.playersAhead.forEach((pb) => {
        // the player is currently in the playersAhead to add that player
        if (dr.name === pb) {
          allPlayersBehindPlayer.push(dr.name);
          // get players ahead of this player
          const pbObj = getPlayerByName(gameState.defaultRanks, pb);
          let otherPlayersAhead = [];
          pbObj.playersAhead.forEach((opb) => {
            otherPlayersAhead.push(opb);
          });
          allPlayersBehindPlayer = allPlayersBehindPlayer
            .concat(otherPlayersAhead)
            .filter(onlyUnique);
        }
      });
    });
    
    return allPlayersBehindPlayer;
  };

  const getPlayersAheadOfPlayer2 = (currentPlayer) => {
    // All players ahead of current player
    //// Players currently ahead the player
    //// Players ahead the players above

    // console.log(currentPlayer);

    const playerAhead = getPlayerByName(gameState.defaultRanks, currentPlayer);
    let allPlayersAheadOfPlayer = [];
    playerAhead.playersBehind.forEach((pb) => allPlayersAheadOfPlayer.push(pb));

    allPlayersAheadOfPlayer.forEach((pb) => {
      const newAllPlayersAhead = getPlayersAheadOfPlayer(pb);
      allPlayersAheadOfPlayer = allPlayersAheadOfPlayer
        .concat(newAllPlayersAhead)
        .filter(onlyUnique);
    });

    return allPlayersAheadOfPlayer;
  };

  const getPlayersAheadOfPlayer = (currentPlayer) => {
    // All players ahead of current player
    //// Players currently ahead the player
    //// Players ahead the players above

    // console.log(currentPlayer);

    // Get the player object
    const playerAhead = getPlayerByName(gameState.defaultRanks, currentPlayer);
    // define the final list of players we want
    let allPlayersAheadOfPlayer = [];
    // get the players currently ahead of the player
    // playerAhead.playersBehind.forEach((pb) => allPlayersAheadOfPlayer.push(pb));

    // for each one of those players that has a player ahead of them (and players ahead of them, and so on...) - add those players to the list
    // iterate only once through the entire ranks to determine if the iterated player fits the criteria above
    gameState.defaultRanks.forEach((dr) => {
      // For each already known player that is ahead of the current, add players ahead of them to the list
      playerAhead.playersBehind.forEach((pb) => {
        // the player is currently in the playersAhead to add that player
        if (dr.name === pb) {
          allPlayersAheadOfPlayer.push(dr.name);
          // get players ahead of this player
          const pbObj = getPlayerByName(gameState.defaultRanks, pb);
          let otherPlayersBehind = [];
          pbObj.playersBehind.forEach((opb) => {
            otherPlayersBehind.push(opb);
          });
          allPlayersAheadOfPlayer = allPlayersAheadOfPlayer
            .concat(otherPlayersBehind)
            .filter(onlyUnique);
        }
      });
    });
    
    return allPlayersAheadOfPlayer;
  };

  const getPlayerAndPlayersAhead = (player) => {
    let playerAndPlayersAhead = getPlayersAheadOfPlayer(player.name);
    playerAndPlayersAhead.push(player.name);
    return playerAndPlayersAhead;
  };

  const getPlayerAndPlayersBehind = (player) => {
    let playerAndPlayersBehind = getPlayersBehindPlayer(player.name);
    playerAndPlayersBehind.push(player.name);
    return playerAndPlayersBehind;
  };

  const advanceNextPick = async (winningPlayer, losingPlayer) => {
    // winning player and winningPlayer.playersAhead all need to have their playersBehind updated with losing player and all losing player's playersBehind
    // losing player and losingPlayer.playersBehind all need to have their playersAhead updated with winning player and all winning player's playersAhead

    console.log(winningPlayer, losingPlayer);
    // add the winningPlayer into the losingPlayers' playersBehind to also check THOSE playersBehind...
    losingPlayer.playersBehind.push(winningPlayer.name);
    // add the losingPlayer into the winningPlayers' playersAhead to also check THOSE playersBehind...
    winningPlayer.playersAhead.push(losingPlayer.name);

    // CMC, Zeke
    console.log(winningPlayer, losingPlayer);

    // (A) Winner and all players ahead of Winner:
    let winnerAndPlayersAhead = getPlayerAndPlayersAhead(winningPlayer);
    // (B) Loser and all players Loser is ahead of
    let loserAndPlayersAhead = getPlayerAndPlayersBehind(losingPlayer);

    // Actions for Winner and all players ahead of Winner:
    ////set playersAhead to (B) Loser and all players Loser is ahead of...

    // Actions for (B) Loser and all players Loser is ahead of:
    ////set playersBehind to (A) Winner and all players ahead of Winner...

    console.log(winnerAndPlayersAhead);
    console.log(loserAndPlayersAhead);

    const newRanks = gameState.defaultRanks.map((player) => {
      // check if player in winnersAndPlayersAhead
      const checkPlayerWPA = winnerAndPlayersAhead.filter(
        (wpa) => wpa === player.name
      );
      if (checkPlayerWPA[0]) {
        // set playersAhead to (B) Loser and all players Loser is ahead of...
        const playersToSet = loserAndPlayersAhead.filter((lpa) => {
          let noAdd = false;
          if (lpa === player.name) {
            // it is the current player
            noAdd = true;
          }
          const playerBehind = player.playersBehind.filter((pb) => pb === lpa);
          if (playerBehind[0]) {
            // in the current players behind
            noAdd = true;
          }
          const playerAhead = player.playersAhead.filter((pb) => pb === lpa);
          if (playerAhead[0]) {
            // in the current players behind
            noAdd = true;
          }
          if (!noAdd) {
            return lpa;
          }
        });
        const newPlayersAhead = player.playersAhead
          .concat(playersToSet)
          .filter(onlyUnique);

        let updatedPlayer = {
          ...player,
          playersAhead: newPlayersAhead,
        };
        const softRank = getSoftRank(updatedPlayer);
        updatedPlayer = { ...updatedPlayer, softRank };
        return updatedPlayer;
      }
      // check if player in loserAndPlayersAhead
      const checkPlayerLPA = loserAndPlayersAhead.filter(
        (lpa) => lpa === player.name
      );
      if (checkPlayerLPA[0]) {
        //set playersBehind to (A) Winner and all players ahead of Winner...
        const playersToSet = winnerAndPlayersAhead.filter((wpa) => {
          let noAdd = false;
          if (wpa === player.name) {
            // it is the current player
            noAdd = true;
          }
          const playerBehind = player.playersBehind.filter((pb) => pb === wpa);
          if (playerBehind[0]) {
            // in the current players behind
            noAdd = true;
          }
          const playerAhead = player.playersAhead.filter((pb) => pb === wpa);
          if (playerAhead[0]) {
            // in the current players behind
            noAdd = true;
          }
          if (!noAdd) {
            return wpa;
          }
        });
        const newPlayersBehind = player.playersBehind
          .concat(playersToSet)
          .filter(onlyUnique);

        let updatedPlayer = {
          ...player,
          playersBehind: newPlayersBehind,
        };
        const softRank = getSoftRank(updatedPlayer);
        updatedPlayer = { ...updatedPlayer, softRank };
        return updatedPlayer;
      }
      const softRank = getSoftRank(player);
      let updatedPlayer = { ...player, softRank };
      return updatedPlayer;
    });

    console.log(newRanks);

    // initialze variables for next state
    let newPlayerA = losingPlayer;
    let newPlayerB = null;
    const newCurrentPick = gameState.currentPick + 1;
    let consecutivePlayerPick =
      newPlayerA === gameState.playerA
        ? gameState.consecutivePlayerPick + 1
        : 1;

    // get a new randomPlayer
    const randomPlayer = getRandomPlayer(newRanks);

    // console.log(randomPlayer);
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

      // There are still possible iterations
      // get another set of players that have not been compared
      const newPlayers = getTwoPlayersNotCompared(newRanks);
      if (newPlayers.length === 0) {
        console.log("game ended because no two random players found");
        // setGameOver(true);
        setGameState((st) => ({ ...st, gameOver: true, isLoading: false }));
      } else {
        newPlayerA = newPlayers[0];
        newPlayerB = newPlayers[1];
      }
    }

    // get new soft ranks
    let newSoftRanks = newRanks.filter((nr) => nr.softRank);
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

    // setDefaultRanks(newRanks);
    // setPlayerA(newPlayerA);
    // setPlayerB(newPlayerB);
    // setCurrentPick(newCurrentPick);
    // setSoftRanks(newSoftRanks);

    // if randomPlayer is found and satisfies criteria above, then setPlayerB to random player
    // // if no random player was found that hasn't been compared with playerA, check if gameOver (then gameOver)
    // // if not, get two new random players that haven't been compared and restart process (until gameOver)

    // set winningPlayer players behind
    // //  losing player
    // //  losing player's current playersBehind >> playersBehind's playersBehind >> and so on...

    // set winningPlayer's playersAhead's playersBehind
    // //  losing player's playersBehind >> playersBehind's playersBehind >> and so on...
    // add comparisons for every single derived comparison above

    // set playerA to losing player
    // setCurrentPick to next pick

    // get a new randomPlayer
    // // make sure that it is not the same player as new playerA (previously losing player)
    // // make sure that the new randomPlayer does not exist in any of the comparisons (new or old)

    // if randomPlayer is found and satisfies criteria above, then setPlayerB to random player
    // // if no random player was found that hasn't been compared with playerA, check if gameOver (then gameOver)
    // // if not, get two new random players that haven't been compared and restart process (until gameOver)
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

  const checkComparisonAlreadyExists = (p1, p2) => {
    // console.log(p1, p2);
    //if the p2 is in the p1's playersAhead or playersBehind, the comparison has been made
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
    // debugger;
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

  const checkIsSamePlayer = (player, randomPlayer) => {
    if (player.rank === randomPlayer.rank) {
      return true;
    }
    return false;
  };

  const getRandomPlayer = (ranks) => {
    const max = Math.floor(numberTopPlayers);
    const randomPick = Math.floor(Math.random() * Math.floor(max));
    const randomPlayer = ranks[randomPick];
    return randomPlayer;
  };

  const getPlayerByName = (ranks, name) => {
    const foundPlayer = ranks.filter(
      (defaultRank) => defaultRank.name === name
    );

    return foundPlayer[0];
  };

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
            <PaperList softRanks={gameState.softRanks} position={position} />
          </>
        ) : (
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

            <PaperList softRanks={gameState.softRanks} position={position} />
          </GameListContainer>
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
              {/* <Col span={24} offset={1}>
              <Form.Item label="Position" name="position">
                <StyledSelect
                  placeholder="Position"
                  value={position}
                  onChange={(value) => setCurrentPosition(value)}
                >
                  <Option key="QB" value={"QB"}>
                    QB
                  </Option>
                  <Option key="RB" value={"RB"}>
                    RB
                  </Option>
                  <Option key="WR" value={"WR"}>
                    WR
                  </Option>
                  <Option key="TE" value={"TE"}>
                    TE
                  </Option>
                </StyledSelect>
              </Form.Item>
            </Col> */}
            </StyledRow>
          </Form>
        </Modal>
      </StyledAppWrapper>
    </>
  );
};

export default PositionContainer;
