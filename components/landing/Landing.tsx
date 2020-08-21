import React from "react";
import { Typography, Button } from "antd";
import Link from "next/link";

const { Title, Paragraph, Text } = Typography;
import styled from "styled-components";

const LandingContainer = styled.div`
  ${({ theme }) => `
    background: linear-gradient(-45deg, #003f2d, #64b6ac, #044389, #daffef);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    height: 100vh;
    color: #fff;
    padding-top: 4em;
    

    @media ${theme.device.mobileM} { 
        padding-top: 6em;
    }

    @media ${theme.device.tablet} { 
        padding-top: 10em;
    }

    @keyframes gradient {
        0% {
        background-position: 0% 50%;
        }
        50% {
        background-position: 100% 50%;
        }
        100% {
        background-position: 0% 50%;
        }
    }
  `}
`;

const SmallSlogan = styled(Title)`
  ${({ theme }) => `
    color: #FFF !important;
    color: inherit;
    font-size: 1.15em !important;;
    margin-bottom: 1.5em !important;
    text-shadow: 0px 1px 7px rgba(99,99,99,1);
    @media ${theme.device.mobileL} { 
    
    }
    @media ${theme.device.tablet} { 
    
    }
 `}
`;

const StyledTitle = styled(Title)`
  ${({ theme }) => `
    color: #FFF !important;
    line-height: 1.5;
    margin-bottom: 0 !important;
    text-shadow: 0px 1px 7px rgba(99,99,99,1);
    @media ${theme.device.mobileL} { 
    
    }
    @media ${theme.device.tablet} { 
    
    }
 `}
`;

const Slogan = styled(Title)`
  ${({ theme }) => `
    color: #FFF !important;
    color: inherit;
    line-height: 1.5;
    text-align: center;
    margin-bottom: 1.1em !important;
    @media ${theme.device.mobileL} { 
    
    }
    @media ${theme.device.tablet} { 
    
    }
 `}
`;

const TitleContent = styled.div`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
    
    @media ${theme.device.mobileL} { 
    
    }
    @media ${theme.device.tablet} { 
    
    }
 `}
`;

const Logo = styled.img`
  ${({ theme }) => `
    width: 52px;
    margin-bottom: 1em;
    
    @media ${theme.device.mobileL} { 

    }
    @media ${theme.device.tablet} { 

    }
  `}
`;

const StyledButton = styled(Button)`
  ${({ theme }) => `
    width: 80px;
    height: 35px;
    margin-bottom: 4em;
    @media ${theme.device.mobileL} { 

    }
    @media ${theme.device.tablet} { 

    }
 `}
`;

const DescriptionSection = styled.section`
  ${({ theme }) => `
    background: #044389;
    height: 100%;
    padding: ${theme["padding-medium"]};
    @media ${theme.device.mobileL} { 

    }
    @media ${theme.device.tablet} { 
        padding: ${theme["padding-large"]};
    }           
`}
`;

const DescriptionContent = styled(Paragraph)`
  ${({ theme }) => `
    color: #FFF !important;
    @media ${theme.device.mobileL} { 

    }
    @media ${theme.device.tablet} { 

    }           
`}
`;

const Landing = () => {
  return (
    <LandingContainer>
      <TitleContent>
        <SmallSlogan level={4}>
          The fun way to prepare for your draft!
        </SmallSlogan>
        <Logo src="/logo.svg" alt="Rankings Assistant Logo" />
        <StyledTitle>Fantasy Football Rankings Assistant</StyledTitle>
        <Slogan level={4}>
          Generate your own rankings cheat sheet based on player versus player
          comparisons
        </Slogan>
        <Link href="/app">
          <StyledButton ghost>Start</StyledButton>
        </Link>
      </TitleContent>
      {/* <DescriptionSection>
        <DescriptionContent>
          Draft day is here and you’re on the clock. You staring down the top
          two players at the position from your favorite fantasy football
          expert’s rankings and can’t decide who to take. The clock is ticking.
          Both players have their upside and downside. You start considering the
          full season outlook for each player and all the possible scenarios
          that could lead to success or failure. Time is up. You just
          auto-drafted a QB in the 4th round!
        </DescriptionContent>
        <DescriptionContent>
          Have you ever found yourself in a similar situation? Fantasy drafts
          are no time for making tough calls between two players from your
          “trusted” rankings. It is one thing to consider how you want to build
          out your team based on the current players you already drafted, but
          deciding if Player A is better than Player B should be done
          beforehand.
        </DescriptionContent>
        <DescriptionContent>
          If you are someone who does not want to be a slave to someone else’s
          rankings and likes to go into a draft feeling confident with your own,
          the Fantasy Rankings Assistant is the perfect tool for you. It is more
          than just dragging and dropping players around on a large list where
          you can easily get swayed by the default rankings or find yourself
          getting overwhelmed when trying to make decisions on multiple players
          at once. The Fantasy Rankings Assistant generates rankings based on
          you making side by side player comparisons.
        </DescriptionContent>
      </DescriptionSection> */}
    </LandingContainer>
  );
};

export default Landing;
