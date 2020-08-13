import styled from "styled-components";
import { Layout, Menu } from "antd";
import Link from "next/link";
import { useFetchUser } from "../../utils/user";
const { Header } = Layout;

const TitleContainer = styled.div`
  ${({ theme }) => `
        background-color: rgba(5, 5, 5, 0.8);
        color: rgba(255, 255, 255, 0.90);
        width: 50%;
        display: flex;
        align-items: center;

        @media (max-width: 890px){
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
          padding-left: ${theme["padding-small"]};
      }
      h2 {
          display: inline;
          color: inherit;
      }
      img {
          width: 64px;
      }
      p {
        line-height: 0;
      }
  `}
`;
const StyledHeader = styled(Header)`
  ${({ theme }) => `
        background-color: ${theme["header-color"]};
        border-bottom-color: ${theme["header-border-color"]};
        text-align: right;
        display: flex;
        li {
            font-size: ${theme["font-size-md"]};
        }
    `}
`;
const StyledMenu = styled(Menu)`
  border-bottom-width: 0px;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 890px) {
    width: 100%;
    justify-content: center;
  }
`;

const StyledLink = styled(Link)``;

export const MainNavbar = () => {
  const { user, loading } = useFetchUser();

  return (
    <StyledHeader style={{ backgroundColor: "rgba(5, 5, 5, 1)" }}>
      <TitleContainer>
        <StyledLink href="/">
          <a>
            <Title>
              <img src="/logo.svg" alt="Rankings Assistant Logo" />
              <div>
                <h2>Rankings Assistant</h2>
                <p>Your personal fantasy football rankings assistant</p>
              </div>
            </Title>
          </a>
        </StyledLink>
      </TitleContainer>
      <StyledMenu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: "64px", backgroundColor: "rgba(5, 5, 5, 0.8)" }}
      >
        <Menu.Item key="/">
          <Link href="/">
            <a style={{ color: "rgba(255, 255, 255, 0.90)" }}>Home</a>
          </Link>
        </Menu.Item>
        {/* {user && !loading
          ? [
              <Menu.Item key="/api/logout">
                <Link href="/api/logout">
                  <a>Logout</a>
                </Link>
              </Menu.Item>,
            ]
          : [
              <Menu.Item key="/api/login">
                <Link href="/api/login">
                  <a>Login</a>
                </Link>
              </Menu.Item>,
            ]} */}
      </StyledMenu>
    </StyledHeader>
  );
};
