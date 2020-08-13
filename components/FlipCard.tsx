import React from "react";
import styled from "styled-components";
import { Col } from "antd";

const StyledName = styled.h2`
  ${({ theme }) => `
    font-size: 0.9em;
    @media ${theme.device.mobileM} { 
        font-size: 1.1em;
    }

  `}
`;

const StyledNameContainer = styled.div`
  grid-row: 2;
  background: rgba(5, 5, 5, 0.8);
  width: 100%;
  padding: 4px 6px;
  width: 100%;
`;

const StyledPlayerImage = styled.img`
  grid-row: 1;
  width: 100%;
  height: 100%;
`;

const StyledWrapper = styled(Col)`
  ${({ theme }) => `
    
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        font-family: "Montserrat", sans-serif;
    }
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .card {
        width: 125px;
        height: 175px;

        @media ${theme.device.mobileM} { 
            width: 160px;
            height: 200px;
        }


        margin: 1em;
        perspective: 1500px;
        .content {
        position: relative;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transition: transform 0.1s cubic-bezier(0.75, 0, 0.85, 1);
        }
    }

    .more {
        display: none;

        &:checked ~ .content {
        transform: rotateY(180deg);
        }
    }

    .front,
    .back {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        transform-style: preserve-3d;
        border-radius: 6px;

        .inner {
        height: 100%;
        display: grid;
        // padding: 0.25em 1.5em;
        transform: translateZ(80px) scale(0.94);
        }
    }

    .front {
        background-color: gray;
        background-size: cover;
        background-position: center center;
        &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 6px;
        backface-visibility: hidden;
        // background: linear-gradient(
        //     40deg,
        //     rgba(2, 0, 36, 0.7),
        //     rgba(9, 9, 121, 0.7)
        // );
        }
        .inner {
        grid-template-rows: 75% 25%;
        justify-items: center;
        }

        h2 {
        // grid-row: 2;
        // margin-bottom: 0.3em;
        text-transform: uppercase;
        letter-spacing: 3px;
        color: #fff;
        font-weight: 500;
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
        }

        // .rating {
        // grid-row: 3;
        // color: rgba(255, 255, 255, 0.8);
        // font-size: 14px;
        // display: flex;
        // flex-flow: row nowrap;
        // i {
        //     margin: 0 1px;
        // }
        }
    }

    .back {
        transform: rotateY(180deg);
        background-color: #fff;
        border: 2px solid rgb(240, 240, 240);
        .inner {
        grid-template-rows: 1fr 2fr 1fr;
        // grid-template-columns: repeat(4, auto);
        grid-column-gap: 0.8em;
        justify-items: center;
        }

        .info {
        position: relative;
        display: flex;
        align-items: center;
        color: ${theme["accent-color"]};
        grid-row: 3;
        &:not(:first-of-type):before {
            content: "";
            position: absolute;
            left: -0.9em;
            height: 18px;
            width: 1px;
            background-color: #ccc;
        }
        span {
            font-size: 2em;
            font-weight: 700;
        }
        i {
            &:before {
            background: linear-gradient(40deg, ${theme["accent-color"]}, rgb(67, 138, 243));

            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            }
            font-size: 1.2em;
        }
        .icon {
            margin-left: 0.3em;
            span {
            display: block;
            margin-top: -0.25em;
            font-size: 0.8em;
            font-weight: 600;
            white-space: nowrap;
            }
        }
        }

        .description {
        grid-row: 5;
        grid-column: 1/-1;
        font-size: 0.86em;
        border-radius: 5px;
        font-weight: 600;
        line-height: 1.4em;
        overflow: auto;
        color: ${theme["accent-color"]};
        padding-right: 10px;
        }

        .location,
        .price {
        font-weight: 600;
        color: ${theme["accent-color"]};
        grid-row: 1;
        font-size: 0.86em;
        }

        .location {
        grid-column: 1/3;
        justify-self: left;
        }

        .price {
        grid-column: 3/-1;
        justify-self: right;
        }

        .button {
        grid-column: 1/-1;
        justify-self: center;
        }
    }

    .button {
        grid-row: -1;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 600;
        cursor: pointer;
        display: block;
        padding: 0 0.45em;
        height: 3em;
        line-height: 2.9em;
        min-width: 3em;
        background-color: transparent;
        border: solid 2px #fff;
        color: #fff;
        border-radius: 4px;
        text-align: center;
        left: 50%;
        backface-visibility: hidden;
        transition: 0.3s ease-in-out;
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.3);

        &:hover {
        background-color: #fff;
        box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
        text-shadow: none;
        color: ${theme["accent-color"]};
        }

        &.return {
        line-height: 3em;
        color: ${theme["accent-color"]};
        border-color: ${theme["accent-color"]};
        text-shadow: none;
        &:hover {
            background-color: ${theme["accent-color"]};
            color: #fff;
            box-shadow: none;
        }
        }
    }

    .info-button {
        // margin-left: 6em;
        // font-size: 1.5em;
        @media ${theme.device.mobileM} { 
            // font-size: 1em;
            // margin-left: 10em;
        }
        @media ${theme.device.mobileL} { 
            // margin-left: 11em;
        }

        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 600;
        cursor: pointer;
        display: block;
        // padding: 0 0.45em;
        // height: 3em;
        // line-height: 2.9em;
        min-width: 3em;
        background-color: transparent;
        // border: solid 2px #fff;
        color: #fff;
        border-radius: 4px;
        text-align: center;
        left: 50%;
        backface-visibility: hidden;
        transition: 0.3s ease-in-out;
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
        z-index: 2;
        

        &.return {
        line-height: 3em;
        color: ${theme["accent-color"]};
        border-color: ${theme["accent-color"]};
        text-shadow: none;
        &:hover {
            background-color: ${theme["accent-color"]};
            color: #fff;
            box-shadow: none;
        }
        }
    }

    .pick-button {
        // grid-row: -1;
        @media ${theme.device.mobileM} { 
            // font-size: 1em;
            // margin-left: 10em;
        }
        @media ${theme.device.mobileL} { 
            // margin-left: 11em;
        }

        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 600;
        cursor: pointer;
        display: block;
        // padding: 0 0.45em;
        // height: 3em;
        // line-height: 2.9em;
        min-width: 3em;
        background-color: transparent;
        border: none;
        color: #fff;
        border-radius: 4px;
        text-align: center;
        left: 50%;
        backface-visibility: hidden;
        transition: 0.3s ease-in-out;
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
        margin-bottom: 1em;
        

        &.return {
        line-height: 3em;
        color: ${theme["accent-color"]};
        border-color: ${theme["accent-color"]};
        text-shadow: none;
        &:hover {
            background-color: ${theme["accent-color"]};
            color: #fff;
            box-shadow: none;
        }
        }
    }

    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
        background: lighten(${theme["accent-color"]}, 20%);
    }
    ::-webkit-scrollbar-thumb:hover {
        background: ${theme["accent-color"]};
    }
  `}
`;

const FlipCard = ({ player, otherPlayer, advanceNextPick }) => {
  if (!player) {
    return null;
  }
  const handleAdvanceNextPick = () => {
    advanceNextPick(player, otherPlayer);
  };
  return (
    <StyledWrapper span={11}>
      <div className="wrapper">
        <label
          htmlFor={`card${player.rank}`}
          className="info-button"
          aria-hidden="true"
        >
          <div className="card">
            <input
              type="checkbox"
              id={`card${player.rank}`}
              className="more"
              aria-hidden="true"
            />
            <div className="content">
              <div
                className="front"
                // style={{
                //   backgroundImage: `url(${player.image})`,
                // }}
              >
                <div className="inner">
                  <StyledPlayerImage src={player.image} />
                  <StyledNameContainer>
                    <StyledName>{player.name}</StyledName>
                  </StyledNameContainer>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <h4>{player.name}</h4>
                  <h5>Consensus Rank: {player.rank}</h5>
                  {/* <label
                    htmlFor={`card${player.rank}`}
                    className="button return"
                    aria-hidden="true"
                  >
                    <i className="fas fa-arrow-left"></i>
                  </label> */}
                </div>
              </div>
            </div>
          </div>
        </label>
        <button className="pick-button" onClick={handleAdvanceNextPick}>
          Pick
        </button>
      </div>
    </StyledWrapper>
  );
};

export default FlipCard;
