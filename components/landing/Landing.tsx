import React from "react";
import { Typography, Button } from "antd";
import Link from "next/link";

const { Title, Paragraph, Text } = Typography;
import styled from "styled-components";

const LandingContainer = styled.div`
  background: linear-gradient(-45deg, #003f2d, #64b6ac, #044389, #daffef);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
  color: #fff;
  padding-top: 4em;

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

const DescriptionSection = styled.section`
${({ theme }) => `
    background: #044389;
    height: 100%;
    @media ${theme.device.mobileL} { 

    }
    @media ${theme.device.tablet} { 

    }           
`}
`

const StyledButton = styled(Button)`
  ${({ theme }) => `
    width: 80px;
    height: 35px;
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
          Generate your own rankings cheat sheet based on player vs. player
          comparisons.
        </Slogan>
        <Link href="/app">
          <StyledButton ghost>Start</StyledButton>
        </Link>
      </TitleContent>
      {/* <DescriptionSection>
          <h1>Desccription Section</h1>
      </DescriptionSection> */}
    </LandingContainer>
  );
};

export default Landing;
