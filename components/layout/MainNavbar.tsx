import styled from "styled-components";
import { Layout, Menu } from "antd";
import Link from "next/link";
import { useFetchUser } from "../../utils/user";
const { Header } = Layout;

const TitleContainer = styled.div`
  ${({ theme }) => `
        background-color: rgba(5, 5, 5, 0.8);
        color: rgba(255, 255, 255, 0.90);
        width: 100%;
        display: flex;
        align-items: center;
        margin-left: 1rem;
        
        @media ${theme.device.tablet} { 
          margin-left: 0;
        }

        @media (max-width: 400px){
            visibility: hidden;
            width: 0;
        }
    `}
`;
const Title = styled.div`
  ${({ theme }) => `
      color: rgba(255, 255, 255, 0.90);
      text-align: left;
      display: flex;
      line-height: 50px;
      div {
          width: 100%;
          padding-left: 8px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          @media ${theme.device.tabletS} { 
            padding-left: ${theme["padding-small"]};
          }
      }
      h2 {
          display: inline;
          color: inherit;
          font-size: 0.75em;
          @media ${theme.device.tabletS} { 
            font-size: 1em;
          }
          @media ${theme.device.tablet} { 
            font-size: 1.5em;
          }
      }
      img {
        width: 42px;
          @media ${theme.device.tablet} { 
            width: 52px;
          }
      }
      p {
        line-height: 0;
        display: none;
        @media ${theme.device.tablet} { 
          display: block;
        }
      }
  `}
`;
const StyledHeader = styled(Header)`
  ${({ theme }) => `
        background-color: ${theme["header-color"]};
        border-bottom-color: ${theme["header-border-color"]};
        text-align: right;
        display: flex;
        padding: 0 15px;
        li {
            font-size: ${theme["font-size-md"]};
        }
    `}
`;
const StyledMenu = styled(Menu)`
  border-bottom-width: 0px;
  width: 30%;
  display: flex;
  justify-content: flex-end;
  margin-right: 1rem;
  @media (max-width: 410px) {
    width: 100%;
    justify-content: flex-start;
    margin-right: 0;
  }
`;

const NavItemsContainer = styled.div`
  border-bottom-width: 0px;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 410px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

// const StyledLink = styled(Link)``;

export const MainNavbar = () => {
  const { user, loading } = useFetchUser();

  return (
    <StyledHeader style={{ backgroundColor: "rgba(5, 5, 5, 1)" }}>
      <NavItemsContainer>
        <TitleContainer>
          <Link href="/">
            <a>
              <Title>
                <img src="/logo.svg" alt="Rankings Assistant Logo" />
                <div>
                  <h2>Fantasy Rankings Assistant</h2>
                  <p>Your personal fantasy football rankings assistant</p>
                </div>
              </Title>
            </a>
          </Link>
        </TitleContainer>
        <StyledMenu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: "64px", backgroundColor: "rgba(5, 5, 5, 0.8)" }}
        >
          <Menu.Item key="/" style={{padding: "0 20px 0 0"}}>
            <Link href="/">
              <a style={{ color: "rgba(255, 255, 255, 0.90)" }}>Home</a>
            </Link>
          </Menu.Item>
        </StyledMenu>
      </NavItemsContainer>
    </StyledHeader>
  );
};
