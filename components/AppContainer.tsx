import React, { useState, useEffect } from "react";
import Players from "../utils/players";
import { Form, Row, Col, Select, Input, Button } from "antd";
import styled from "styled-components";
import PlayerComparison from "./PlayerComparison";
import { permutations } from "mathjs";
import Modal from "antd/lib/modal/Modal";
import PaperList from "./PaperList";

const { Option } = Select;

const StyledAppWrapper = styled.div`
  background: url(https://i.pinimg.com/originals/3b/1a/66/3b1a6603b7e1e5b6c16e9f998ffb0e91.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
       margin-top: 1em;
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
    `}
`;

const AppContainer = () => {
  const [numberTopPlayers, setNumberTopPlayers] = useState(10);
  const [currentPosition, setCurrentPosition] = useState("RB");
  const [defaultRanks, setDefaultRanks] = useState([]);
  const [currentPick, setCurrentPick] = useState(1);
  const [playerA, setPlayerA] = useState(null);
  const [playerB, setPlayerB] = useState(null);
  const [possibleComparisons, setPossibleComparisons] = useState(
    permutations(25, 2)
  );
  const [gameOver, setGameOver] = useState(false);
  const [softRanks, setSoftRanks] = useState([]);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    setVisible(false);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  const startNew = () => {
    let startRanks = [];

    if (currentPosition === "RB") {
      const { runningBacks } = Players;

      runningBacks.forEach((pos) => {
        if (pos.rank <= numberTopPlayers) {
          startRanks.push({ ...pos, playersBehind: [], playersAhead: [] });
        }
      });
    } else if (currentPosition === "WR") {
      const { wideReceivers } = Players;
      wideReceivers.forEach((pos) => {
        if (pos.rank <= numberTopPlayers) {
          startRanks.push({ ...pos, playersBehind: [], playersAhead: [] });
        }
      });
    }
    setDefaultRanks((state) => [...startRanks]);
    setPossibleComparisons(permutations(numberTopPlayers, 2));
    setCurrentPick(1);
    setPlayerA(startRanks[0]);
    setPlayerB(startRanks[1]);
    setGameOver(false);
    setSoftRanks([]);
  };

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  const getPlayersBehindPlayer = (currentPlayer) => {
    // All players behind current player
    //// Players currently behind the player
    //// Players behind the players above
    const playerBehind = getPlayerByName(defaultRanks, currentPlayer);
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

  const getPlayersAheadOfPlayer = (currentPlayer) => {
    // All players ahead of current player
    //// Players currently ahead the player
    //// Players ahead the players above

    console.log(currentPlayer);
    const playerAhead = getPlayerByName(defaultRanks, currentPlayer);
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

  // const getPlayersAheadOfPlayer = (currentPlayer) => {
  //   // All players ahead of current player
  //   //// Players currently ahead the player
  //   //// Players ahead the players above

  //   console.log(currentPlayer)
  //   let allPlayersAheadOfPlayer = [];
  //   currentPlayer.playersBehind.forEach((pb) =>
  //     allPlayersAheadOfPlayer.push(pb)
  //   );

  //   allPlayersAheadOfPlayer.forEach((pb) => {
  //     const playerAhead = getPlayerByName(defaultRanks, pb);
  //     const newAllPlayersAhead = getPlayersAheadOfPlayer(playerAhead);
  //     allPlayersAheadOfPlayer = allPlayersAheadOfPlayer
  //       .concat(newAllPlayersAhead)
  //       .filter(onlyUnique);
  //   });

  //   return allPlayersAheadOfPlayer;
  // };

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

  const advanceNextPick = (winningPlayer, losingPlayer) => {
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

    const newRanks = defaultRanks.map((player) => {
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
    const newCurrentPick = currentPick + 1;

    // get a new randomPlayer
    const randomPlayer = getRandomPlayer(newRanks);

    // console.log(randomPlayer);
    // // make sure that it is not the same player as new playerA (previously losing player)
    // // make sure that the new randomPlayer does not exist in any of the comparisons (new or old)
    if (
      !checkIsSamePlayer(newPlayerA, randomPlayer) &&
      !checkComparisonAlreadyExists(newPlayerA, randomPlayer)
    ) {
      newPlayerB = randomPlayer;
    } else {
      // No random player was found that hasn't been compared with playerA

      // There are still possible iterations
      // get another set of players that have not been compared
      const newPlayers = getTwoPlayersNotCompared(newRanks);
      if (newPlayers.length === 0) {
        console.log("game ended because no two random players found");
        setGameOver(true);
      } else {
        newPlayerA = newPlayers[0];
        newPlayerB = newPlayers[1];
      }
    }

    // get new soft ranks
    let newSoftRanks = newRanks.filter((nr) => nr.softRank);
    newSoftRanks = newSoftRanks.sort(compareSoftRank);

    // Set newState
    setDefaultRanks(newRanks);
    setPlayerA(newPlayerA);
    setPlayerB(newPlayerB);
    setCurrentPick(newCurrentPick);
    setSoftRanks(newSoftRanks);

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
    console.log(p1, p2);
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
    } while (comparedStop < possibleComparisons * 3);
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
    <StyledAppWrapper>
      <StyledButtonContainer>
        <StyledNewButton type="primary" onClick={() => startNew()}>
          New
        </StyledNewButton>

        <StyledOptionsButton type="primary" onClick={() => showModal()}>
          Options
        </StyledOptionsButton>
      </StyledButtonContainer>
      {gameOver ? (
        <StyledGameOverContainer>
          <StyledGameOver>
            Your Personal Top {numberTopPlayers} {currentPosition} Rankings:
          </StyledGameOver>
        </StyledGameOverContainer>
      ) : (
        <>
          {playerA && playerB ? (
            <PlayerComparison
              playerA={playerA}
              playerB={playerB}
              advanceNextPick={advanceNextPick}
            />
          ) : null}
        </>
      )}
      <PaperList softRanks={softRanks} />

      <Modal
        title="Options"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form initialValues={{ numberTopPlayers: 10, position: "RB" }}>
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
            <Col span={24} offset={1}>
              <Form.Item label="Position" name="position">
                <StyledSelect
                  placeholder="Position"
                  value={currentPosition}
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
            </Col>
          </StyledRow>
        </Form>
      </Modal>
    </StyledAppWrapper>
  );
};

export default AppContainer;
