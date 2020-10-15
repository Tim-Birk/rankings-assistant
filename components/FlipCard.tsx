import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated as a } from "react-spring";
import { Loading } from "./notify/Loading";
import { Button } from "antd";

const StyledNameContainer = styled.div`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: center;
    grid-row: 2;
    background: rgba(5, 5, 5, 0.8);
    width: 100%;
    padding: 4px 6px;
    width: 100%;
    height: 40px;
    
    
    @media ${theme.device.tablet} { 
        height: 50px;
    }

  `}
`;

const StyledPlayerImage = styled.img`
  grid-row: 1;
  width: 100%;
  height: 100%;
`;

const StyledName = styled.h2`
  ${({ theme }) => `
    color: #FFF;
    font-size: 0.9em;
    @media ${theme.device.tablet} { 
        font-size: 1.1em;
    }

  `}
`;

const AnimatedDiv = styled(a.div)`
  ${({ theme }) => `
    width: 115px;
    height: 125px;
    
    @media ${theme.device.tablet} { 
        width: 170px;
        height: 180px;
    }

    position: absolute;
    
    cursor: pointer;
    will-change: transform, opacity;

    .back {
        background: rgb(2,0,36);
        background: linear-gradient(34deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 15%, rgba(0,212,255,1) 100%);
        border: 2px solid rgb(240, 240, 240);
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: ${theme["padding-medium"]};
        padding: 0 ${theme["padding-small"]} ${theme["padding-medium"]};
        text-align: center;
        width: 115px;
        height: 165px;
        .inner {
            color: #FFF;
            grid-template-rows: 1fr 2fr 1fr;
            grid-column-gap: 0.8em;
            justify-items: center;
        }
        @media ${theme.device.tablet} { 
            width: 170px;
            height: 230px;
        }
    }
  `}
`;

const CardContainer = styled.div`
  ${({ theme }) => `
    width: 115px;
    height: 125px;
    
    @media ${theme.device.tablet} { 
        width: 170px;
        height: 180px;
    }

  `}
`;

const BackName = styled.h4`
  ${({ theme }) => `
    color: inherit;

    @media ${theme.device.tablet} { 
        font-size: 1.25em;
    }

  `}
`;

const PickButton = styled(Button)`
  ${({ theme }) => `
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  cursor: pointer;
  display: block;
  min-width: 3em;
  background-color: transparent;
  border: 1px solid #fff;
  font-size: 1.25em;
  color: #fff;
  border-width: 2px;
  border-radius: 4px;
  text-align: center;
  backface-visibility: hidden;
  transition: 0.3s ease-in-out;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  margin-top: 4em;
  user-select: none;
  line-height: 1;
  height: 40px;
  
  &.return {
    line-height: 3em;
    color: ${theme["accent-color"]};
    text-shadow: none;
    &:hover {
        background-color: ${theme["accent-color"]};
        color: #fff;
        box-shadow: none;
    }
  }

    @media ${theme.device.tablet} { 
        margin-top: 4em;
        font-size: 1.5em;
    }

  `}
`;

const BackInfo = styled.h5`
  ${({ theme }) => `
   color: inherit;
   
    @media ${theme.device.tablet} { 
        font-size: 1em;
    }

  `}
`;

const BackRank = styled.h6`
  ${({ theme }) => `
   color: inherit;
   
    @media ${theme.device.tablet} { 
        font-size: 1em;
    }

  `}
`;

const CardPickContainer = styled.div`
  ${({ theme }) => `
   display: flex;
   flex-direction: column;
   align-items: center;
    
   width: 115px;
   height: 200px;
   @media ${theme.device.tablet} { 
      width: 170px;
      height: 275px;
    }

  `}
`;

const Card = ({
  player,
  otherPlayer,
  advanceNextPick,
  setGameState,
  flipped,
  set,
  setOther,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const setLoading = async (value) => {
    setIsLoading(value);
  };
  const handleAdvanceNextPick = async () => {
    setLoading(true).then(
      advanceNextPick(player, otherPlayer).then(setLoading(false))
    );
    set(true);
    setOther(true);
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <CardPickContainer>
          <CardContainer onClick={() => set((state) => !state)}>
            <AnimatedDiv
              className="front"
              style={{
                opacity,
                transform: transform.interpolate((t) => `${t} rotateY(180deg)`),
              }}
            >
              <StyledPlayerImage
                src={player.image ? player.image : "/blankPlayer.jpg"}
              />
              <StyledNameContainer>
                <StyledName>{player.name}</StyledName>
              </StyledNameContainer>
            </AnimatedDiv>
            <AnimatedDiv
              className="back"
              style={{
                opacity: opacity.interpolate((o: any) => 1 - o),
                transform,
              }}
            >
              <div className="back">
                <div className="inner">
                  <BackName>{player.name}</BackName>
                  <BackInfo>{player.info}</BackInfo>
                  <BackRank>Default Rank: {player.rank}</BackRank>
                </div>
              </div>
            </AnimatedDiv>
          </CardContainer>
          <PickButton ghost onClick={handleAdvanceNextPick}>Pick</PickButton>
        </CardPickContainer>
      )}
    </>
  );
};

export default Card;
