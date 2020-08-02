import styled from "styled-components";
import { Layout, Menu } from "antd";
import Link from "next/link";
import { useFetchUser } from "../../utils/user";
const { Header } = Layout;

const TitleContainer = styled.div`
  ${({ theme }) => `
        background-color: ${theme["header-color"]};
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
        border-bottom-right: 1px;
        border-bottom-style: solid;
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
  @media (max-width: 890px) {
    width: 100%;
  }
`;

export const MainNavbar = () => {
  const { user, loading } = useFetchUser();

  return (
    <StyledHeader>
      <TitleContainer>
        <Title>
          <img src="/logo.svg" alt="Rankings Assistant Logo" />
          <div>
            <h2>Rankings Assistant</h2>
            <p>Your personal fantasy football rankings assistant</p>
          </div>
        </Title>
      </TitleContainer>
      <StyledMenu
        theme="light"
        mode="horizontal"
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="/">
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
        {user && !loading
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
            ]}
      </StyledMenu>
    </StyledHeader>
  );
};