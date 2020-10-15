import React from "react";
import styled from "styled-components";
import { Typography, Button } from "antd";
import Link from "next/link";

const { Title } = Typography;

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

const StyledTitle = styled(Title)`
  ${({ theme }) => `
    color: #FFF !important;
    line-height: 1.5;
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
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
    margin-bottom: 2em !important;
    font-size: 1.5rem !important;
    font-weight: lighter !important;
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
    width: 89px;
    height: 47px;
    margin-bottom: 4em;
    font-size: 1.25rem;
    border-width: 2px;
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
    </LandingContainer>
  );
};

export default Landing;
